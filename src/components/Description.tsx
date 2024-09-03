interface DescriptionProps {
  value: string;
}
export const Description = (props: DescriptionProps) => {
  const { value } = props;
  return (
    <div className="sticky top-1/2 transform -translate-y-1/2">
      <h1 className="font-satoshi text-5xl "> Johnny Tan</h1>
      <p className="text-5xl">{value}</p>
    </div>
  );
};
