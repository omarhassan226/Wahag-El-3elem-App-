import { CircularProgressbar } from "react-circular-progressbar";
const Card = ({ icon, text, text2 }) => {
  return (
    <div className="w-1/2 border-[1px] border-solid border-[#3C7098] p-5 rounded-2xl flex flex-col items-end gap-6  ">
      <img className="w-[70px] self-start  " src={icon} alt="" />
      <div className=" w-full flex justify-between items-center ">
        <span className="text-[#3C7098] py-1 px-4 bg-[#3C70980D] rounded-full ">
          {text2}
        </span>
        <p className="text-xl font-semibold">{text}</p>
      </div>
    </div>
  );
};

const Progress = () => {
  const completionPercentage = 75;
  return (
    <div dir="rtl">
      <p className="text-2xl text-[#00000080]">المتبقي من الكورس</p>
      <div className="relative pt-1">
        <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-[#d6d6d6]">
          <div
            style={{ width: `${completionPercentage}%` }}
            className="shadow-none  flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#22AD75]"
          ></div>
        </div>
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-lg font-semibold inline-block text-[#22AD75]">
              مكتمل: {completionPercentage}%
            </span>
          </div>
          <div className="text-right">
            <span className="text-lg font-semibold inline-block text-[#22AD75] ">
              {100 - completionPercentage}% متبقي
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
const AnalysisCourese = () => {
  return (
    <div className="flex gap-5">
      <div className="w-1/2 flex flex-wrap justify-between border-[1px] border-solid border-[#3C7098] p-5 rounded-2xl">
        <div className="mt-5 flex justify-center items-center relative">
          <CircularProgressbar
            value={75} // Adjust value as needed
            strokeWidth={7} // Thickness of the progress bar
            styles={{
              root: { width: 250, textAlign: "center" }, // Center the progress bar
              path: { stroke: "#3C7098" }, // Color of the progress bar
              trail: { stroke: "#d6d6d6" }, // Color of the trail (background)
            }}
          />
          <div className="abcenter text-center text-5xl font-bold text-[#3C7098]">
            25 <br />
            طالب
          </div>
        </div>
        <div className="mt-5 flex justify-center items-center relative">
          <CircularProgressbar
            value={75} // Adjust value as needed
            strokeWidth={7} // Thickness of the progress bar
            styles={{
              root: { width: 250, textAlign: "center" }, // Center the progress bar
              path: { stroke: "#3C7098" }, // Color of the progress bar
              trail: { stroke: "#d6d6d6" }, // Color of the trail (background)
            }}
          />
          <div className="abcenter text-center text-5xl font-bold text-[#3C7098]">
            25 <br />
            طالب
          </div>
        </div>
        <div className="mt-5 flex justify-center items-center relative">
          <CircularProgressbar
            value={75} // Adjust value as needed
            strokeWidth={7} // Thickness of the progress bar
            styles={{
              root: { width: 250, textAlign: "center" }, // Center the progress bar
              path: { stroke: "#3C7098" }, // Color of the progress bar
              trail: { stroke: "#d6d6d6" }, // Color of the trail (background)
            }}
          />
          <div className="abcenter text-center text-5xl font-bold text-[#3C7098]">
            25 <br />
            طالب
          </div>
        </div>
        <div className="mt-5 flex justify-center items-center relative">
          <CircularProgressbar
            value={75} // Adjust value as needed
            strokeWidth={7} // Thickness of the progress bar
            styles={{
              root: { width: 250, textAlign: "center" }, // Center the progress bar
              path: { stroke: "#3C7098" }, // Color of the progress bar
              trail: { stroke: "#d6d6d6" }, // Color of the trail (background)
            }}
          />
          <div className="abcenter text-center text-5xl font-bold text-[#3C7098]">
            25 <br />
            طالب
          </div>
        </div>
      </div>
      <div className="w-1/2" dir="rtl">
        <div className=" h-fit border-[1px] border-solid border-[#3C7098] p-5 rounded-2xl">
          <img className="mb-5" src="/src/assets/anlysis.png" alt="" />
          <div className="flex items-center justify-between flex-row-reverse">
            <p className="px-4 bg-[#3C70980D] py-1 text-center border-[1px] text-[#3C7098] border-solid border-[#0000000D] rounded-full">
              يومين في الاسبوع{" "}
            </p>
            <h5 className="text-3xl font-semibold">شهرين</h5>
          </div>
          <div dir="rtl" className="flex text-[#00000080] text-lg gap-1 my-5">
            <p className="w-1/2 text-center border-[1px] border-solid bg-[#3C7098] text-white border-[#0000000D] rounded-full">
              الاحد{" "}
            </p>
            <p className="w-1/2 text-center border-[1px] text-[#3C7098] border-solid border-[#0000000D] rounded-full">
              الخميس{" "}
            </p>
          </div>
          <Progress />
          <div dir="rtl" className="flex text-[#00000080] text-lg gap-1 ">
            <span>من</span>
            <p className="w-1/2 text-center border-[1px] border-solid border-[#0000000D] rounded-full">
              4/29/2024
            </p>
            <span>الي</span>
            <p className="w-1/2 text-center border-[1px] border-solid border-[#0000000D] rounded-full">
              4/29/2024
            </p>
          </div>
          <div
            dir="rtl"
            className="bg-[#0000000D] mt-4 w-full rounded-full py-1 text-center font-semibold text-lg text-[#00000080]"
          >
            2 من الاسابيع
          </div>
        </div>
        <div className="flex justify-between w-full gap-5 mt-5">
          <Card
            icon={"/src/assets/icon-1.png"}
            text="الكورسات"
            text2={"2 كورس"}
          />
          <Card
            icon={"/src/assets/icon-1.png"}
            text="الكورسات"
            text2={"2 كورس"}
          />
        </div>
      </div>
    </div>
  );
};

export default AnalysisCourese;
