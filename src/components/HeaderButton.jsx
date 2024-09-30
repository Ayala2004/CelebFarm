
const HeaderButton = ({ href, Icon }) => {
  return (
    <div>
      <a href={href} className="flex flex-1 p-4 ">
        <Icon className="size-10 border-2 flex justify-center items-center p-1 rounded-full" />
      </a>
    </div>
  );
};

export default HeaderButton;