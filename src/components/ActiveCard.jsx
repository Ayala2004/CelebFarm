import Button from "./Button";

const ActiveCard = ({
  imgPost,
  status,
  time,
  title,
  date,
  name,
  imgProfil,
  buttonText,
}) => {
  return (
    <div className="w-[400px] h-fit ">
      <div className="flex  m-2 bg-white rounded-xl">
        {/* img//////////////////////////////////////////// */}
        <div className="p-3">
          <img
            src={imgPost}
            alt="img posted"
            className="w-28 h-[110px] object-cover rounded-2xl "
          />
        </div>

        <div className="flex flex-col gap-3 mt-3">
          {/* status and time//////////////////////////////////////////// */}
          <div className="flex justify-between">
            <div
              className={`bg-purple-50 text-purple-800 text-sm rounded-xl text-nowrap py-[4px] px-2
                ${
                  status == "Live"
                    ? "bg-green-50 text-green-700"
                    : status === "For review"
                    ? "bg-red-50 text-red-500"
                    : ""
                }`}
            >
              {status}
            </div>
            <div className="text-[10px] text-slate-300">{time}</div>
          </div>

          {/* title//////////////////////////////////////////// */}
          <div className="font-semibold px-2">{title}</div>

          {/* date//////////////////////////////////////////// */}
          <div>{date}</div>
        </div>
      </div>

      <div className="bg-[#f7f6fc] flex justify-between items-center py-5">
        <div className="flex gap-2 items-center ">
          <img
            src={imgProfil}
            alt="writer image"
            className="rounded-full w-11 h-11 object-cover  "
          />
          <div className="font-semibold">{name}</div>
        </div>
        <div>
          <Button label={buttonText} />
        </div>
      </div>
    </div>
  );
};

export default ActiveCard;
