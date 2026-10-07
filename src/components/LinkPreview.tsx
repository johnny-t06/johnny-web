"use client";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import Image, { getImageProps } from "next/image";
import { encode } from "qss";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal, preload } from "react-dom";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LinkPreviewProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
  layout?: string;
} & (
  | { isStatic: true; imageSrc: string }
  | { isStatic?: false; imageSrc?: never }
);

const PEEK_DELAY_MS = 300;
const PEEK_MOVE_TOLERANCE_PX = 10;

const DESKTOP_QUERY = "(min-width: 1024px)";
const PEEK_IMAGE_SIZES = "(max-width: 640px) 90vw, 384px";

const subscribeDesktop = (onChange: () => void) => {
  const mql = window.matchMedia(DESKTOP_QUERY);
  mql.addEventListener("change", onChange);
  return () => {
    mql.removeEventListener("change", onChange);
  };
};
const getIsDesktop = () => window.matchMedia(DESKTOP_QUERY).matches;

export const LinkPreview = ({
  children,
  url,
  className,
  width = 200,
  height = 125,
  quality = 50,
  layout = "fixed",
  isStatic = false,
  imageSrc = "",
}: LinkPreviewProps) => {
  let src;
  if (!isStatic) {
    const params = encode({
      url,
      screenshot: true,
      meta: false,
      embed: "screenshot.url",
      colorScheme: "dark",
      "viewport.isMobile": true,
      "viewport.deviceScaleFactor": 1,
      "viewport.width": width * 3,
      "viewport.height": height * 3,
    });
    src = `https://api.microlink.io/?${params}`;
  } else {
    src = imageSrc;
  }

  const [isOpen, setOpen] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [peeking, setPeeking] = useState(false);
  const peekTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pressOrigin = useRef<{ x: number; y: number } | null>(null);
  const didPeek = useRef(false);

  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const isDesktop = useSyncExternalStore(
    subscribeDesktop,
    getIsDesktop,
    () => false,
  );

  // Microlink screenshots are already small (width*3 x height*3), so the peek
  // loads them as-is rather than through the optimizer.
  const peekImage = {
    src,
    alt: "",
    fill: true,
    sizes: PEEK_IMAGE_SIZES,
    quality: 75,
    unoptimized: !isStatic,
  } as const;

  // Below lg the hover card never opens, so warm the image the peek will use
  // instead of the hover-card variant.
  useEffect(() => {
    if (!isMounted || isDesktop) {
      return;
    }
    const { props } = getImageProps(peekImage);
    preload(props.src, {
      as: "image",
      imageSrcSet: props.srcSet,
      imageSizes: props.sizes,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted, isDesktop, src]);

  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);

  const translateX = useSpring(x, springConfig);

  const handleMouseMove = (event: any) => {
    const targetRect = event.target.getBoundingClientRect();
    const eventOffsetX = event.clientX - targetRect.left;
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2; // Reduce the effect to make it subtle
    x.set(offsetFromCenter);
  };

  const endPress = () => {
    if (peekTimer.current) {
      clearTimeout(peekTimer.current);
    }
    peekTimer.current = null;
    pressOrigin.current = null;
    setPressed(false);
    setPeeking(false);
  };

  useEffect(() => {
    return () => {
      if (peekTimer.current) {
        clearTimeout(peekTimer.current);
      }
    };
  }, []);

  const handlePointerDown = (event: React.PointerEvent) => {
    didPeek.current = false;

    if (event.pointerType !== "touch" || isDesktop) {
      return;
    }
    // A second finger restarts the press instead of orphaning the first timer.
    if (peekTimer.current) {
      clearTimeout(peekTimer.current);
    }
    pressOrigin.current = { x: event.clientX, y: event.clientY };
    setPressed(true);
    peekTimer.current = setTimeout(() => {
      didPeek.current = true;
      setPeeking(true);
      navigator.vibrate?.(10);
    }, PEEK_DELAY_MS);
  };

  const handlePointerMove = (event: React.PointerEvent) => {
    if (event.pointerType !== "touch" || !pressOrigin.current || peeking) {
      return;
    }
    const dx = event.clientX - pressOrigin.current.x;
    const dy = event.clientY - pressOrigin.current.y;
    if (Math.hypot(dx, dy) > PEEK_MOVE_TOLERANCE_PX) {
      endPress();
    }
  };

  const handlePointerCancel = () => {
    didPeek.current = false;
    endPress();
  };

  const handleClick = (event: React.MouseEvent) => {
    if (didPeek.current) {
      event.preventDefault();
      didPeek.current = false;
    }
  };

  let host = url;
  try {
    host = new URL(url).hostname.replace(/^www\./, "");
  } catch {}

  return (
    <>
      {isMounted && isDesktop ? (
        <div className="hidden">
          <Image
            src={src}
            width={width}
            height={height}
            quality={quality}
            layout={layout}
            priority={true}
            alt="hidden image"
          />
        </div>
      ) : null}

      <HoverCardPrimitive.Root
        openDelay={50}
        closeDelay={100}
        onOpenChange={(open) => {
          setOpen(open);
        }}
      >
        <HoverCardPrimitive.Trigger
          onMouseMove={handleMouseMove}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endPress}
          onPointerCancel={handlePointerCancel}
          onPointerLeave={endPress}
          onContextMenu={(e) => {
            if (peeking) {
              e.preventDefault();
            }
          }}
          onClick={handleClick}
          className={cn(
            "block text-black dark:text-white select-none [-webkit-touch-callout:none] lg:select-auto",
            "transition-[transform,box-shadow,background-color] duration-200 ease-[cubic-bezier(.34,1.4,.64,1)]",
            pressed &&
              "relative z-10 scale-[1.03] rounded-2xl bg-[#f7fbff] shadow-[0_10px_30px_rgba(49,47,47,0.16)]",
            className,
          )}
          href={url}
        >
          {children}
        </HoverCardPrimitive.Trigger>

        <HoverCardPrimitive.Content
          className="[transform-origin:var(--radix-hover-card-content-transform-origin)]"
          side="top"
          align="center"
          sideOffset={10}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                className="shadow-xl rounded-xl"
                style={{
                  x: translateX,
                }}
              >
                <Link
                  href={url}
                  className="block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800"
                  style={{ fontSize: 0 }}
                >
                  <Image
                    src={isStatic ? imageSrc : src}
                    width={width}
                    height={height}
                    quality={quality}
                    layout={layout}
                    priority={true}
                    className="rounded-lg"
                    alt="preview image"
                  />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Root>

      {isMounted &&
        createPortal(
          <AnimatePresence>
            {peeking && (
              <motion.div
                key="peek"
                aria-hidden="true"
                className="lg:hidden fixed inset-0 z-50 pointer-events-none flex items-start justify-center pt-[18vh] px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <div className="absolute inset-0 bg-white/50 backdrop-blur-md" />
                <motion.div
                  className="relative w-full max-w-sm p-2.5 rounded-[22px] bg-white shadow-[0_30px_80px_rgba(49,47,47,0.35)] flex flex-col gap-2.5"
                  style={{ transformOrigin: "50% 80%" }}
                  initial={{ scale: 0.85 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.85 }}
                  transition={{ type: "spring", stiffness: 320, damping: 22 }}
                >
                  <div
                    className={cn(
                      "relative max-h-[55vh] w-full overflow-hidden rounded-[14px] bg-[#dde9f4]",
                      isStatic && "aspect-[4/5]",
                    )}
                    // Same shape as the microlink viewport, so nothing is cropped.
                    style={
                      isStatic
                        ? undefined
                        : { aspectRatio: `${width} / ${height}` }
                    }
                  >
                    <Image
                      {...peekImage}
                      alt=""
                      className={
                        isStatic ? "object-contain" : "object-cover object-top"
                      }
                      draggable={false}
                    />
                  </div>
                  <div className="px-1 pb-0.5 text-[13px] text-muted truncate">
                    {host}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
};
