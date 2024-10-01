const PostCard = ({ title, value }) => {
  return (
    <div className="border-1 border-slate-100 shadow-sm shadow-gray-300 rounded-md flex flex-col justify-center items-center w-36 h-20 ">
      <h1 className="font-bold">{value}</h1>
      <h6 className="text-gray-500">{title}</h6>
    </div>
  );
};

export default PostCard;
