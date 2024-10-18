const contacts = [
  { title: "About", link: "#about" },
  { title: "Email", link: "mailto:johnnytanwork1@gmail.com" },
  { title: "LinkedIn", link: "https://www.linkedin.com/in/johnny-tan1/" },
  { title: "GitHub", link: "https://github.com/johnny-t06" },
];

export const Header = () => {
  return (
    <div>
      <NameTile />
      <div className="fixed flex gap-4 top-0 right-0 p-4 ">
        {contacts.map((contact, index) => (
          <a
            href={contact.link}
            key={index}
            className="font-satoshi-bold text-gray-500 hover:text-gray-800"
          >
            {contact.title}
          </a>
        ))}
      </div>{" "}
    </div>
  );
};

export const NameTile = () => {
  return (
    <div className="fixed top-0 left-0 p-4">
      <a
        className=" font-satoshi-bold text-gray-800 hover:text-black "
        href="/"
      >
        johnnytan.work
      </a>
    </div>
  );
};
