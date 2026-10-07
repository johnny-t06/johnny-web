"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logoicon from "../../public/images/logoicon.jpg";
import johnnyhead from "../../public/images/johnny-head.jpg";
import { socials } from "@/data/contacts";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "./ArrowUpRight";
const aboutLink = { title: "About", link: "#about" };
const navLinks = [{ title: "Work", link: "#work" }, aboutLink];
const contacts = [aboutLink, ...socials];

export const Header = () => {
  return (
    <>
      <header className="hidden lg:flex items-center justify-between w-full max-w-page mx-auto h-header-h px-gutter">
        <Link href="/">
          <Image src={logoicon} alt="logo" className="size-logo rounded-lg" />
        </Link>
        <nav className="flex gap-2 -mr-3.5">
          {contacts.map((contact, index) => (
            <a
              href={contact.link}
              key={index}
              className="h-12 px-3.5 flex items-center font-satoshi text-nav text-[#6e6259] hover:text-espresso"
            >
              {contact.title}
            </a>
          ))}
        </nav>
      </header>
      <MobileHeader />
    </>
  );
};

const MobileHeader = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="lg:hidden sticky top-0 z-40 h-14 px-4 flex items-center justify-between bg-white/85 backdrop-blur-md border-b border-line">
        <BrandLink className="text-black" />
        <IconButton
          label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="text-black"
          path="M4 8h16M4 16h16"
        />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-50 flex flex-col bg-espresso/80 backdrop-blur-[18px] backdrop-saturate-[1.4] text-cream font-satoshi"
          >
            <div className="h-14 px-4 flex items-center justify-between border-b border-cream/20 shrink-0">
              <BrandLink onClick={close} />
              <IconButton
                label="Close menu"
                onClick={close}
                path="M6 6l12 12M18 6L6 18"
              />
            </div>

            <motion.div
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
              className="flex flex-col flex-1 overflow-y-auto"
            >
              <nav className="pt-8 px-4 flex flex-col">
                {navLinks.map((item) => (
                  <a
                    key={item.title}
                    href={item.link}
                    onClick={close}
                    className="font-satoshi-bold text-[40px] leading-none py-3.5"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>

              <div className="pt-10 px-4 flex flex-col">
                <div className="text-[13px] tracking-[0.08em] uppercase pb-2 text-cream-muted">
                  Contact
                </div>
                {socials.map((s) => (
                  <a
                    key={s.title}
                    href={s.link}
                    onClick={close}
                    className="h-14 flex items-center justify-between text-[19px] border-b border-cream/20"
                  >
                    {s.title}
                    <ArrowUpRight />
                  </a>
                ))}
              </div>

              <div className="mt-auto px-4 pt-6 pb-8 flex items-center gap-3">
                <Image
                  src={johnnyhead}
                  alt=""
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <div className="flex flex-col gap-0.5">
                  <span className="font-satoshi-bold text-[15px]">
                    Johnny Tan
                  </span>
                  <span className="text-[13px] text-cream-muted">
                    San Francisco
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const BrandLink = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <Link href="/" onClick={onClick} className="flex items-center gap-2.5">
      <Image src={logoicon} alt="" className="w-8 h-8 rounded-md" />
      <span className={cn("font-satoshi-bold text-[15px]", className)}>
        johnnytan.work
      </span>
    </Link>
  );
};

const IconButton = ({
  label,
  path,
  className,
  ...rest
}: {
  label: string;
  path: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        "w-11 h-11 -mr-2.5 flex items-center justify-center",
        className,
      )}
      {...rest}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      >
        <path d={path} />
      </svg>
    </button>
  );
};

export const NameTile = () => {
  return (
    <div className="fixed top-0 left-0 p-4">
      <Link
        className=" font-satoshi-bold text-gray-800 hover:text-black "
        href="/"
      >
        johnnytan.work
      </Link>
    </div>
  );
};
