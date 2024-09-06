interface NameTileProps {
  name: string;
}

export const NameTile = (props: NameTileProps) => {
  const { name } = props;
  return (
    <div className="fixed top-0 right-0 p-4">
      <div className=" font-satoshi-bold text-black ">{name}</div>
    </div>
  );
};
