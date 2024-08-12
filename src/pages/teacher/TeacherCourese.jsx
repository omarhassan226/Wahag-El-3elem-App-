const Card = () => {
  return (
    <div className=" w-fit border-[1px] border-solid border-[#3C7098] p-5 rounded-2xl flex flex-col">
      <div className="flex justify-end items-start gap-20">
        <div dir="rtl">
          <p className="text-1xl font-semibold px-2 py-1 text-[#00000099] bg-[#3C70981A] rounded-full">
            10 طلاب
          </p>
        </div>
        <img className="w-24" src="/src/assets/ahmed.png" alt="" />
      </div>
      <div className="text-center mt-5 bg-[#3C70981A] rounded-2xl py-3 px-10 ">
        <p
          dir="rtl"
          className="  w-full font-semibold  text-[#3C7098] text-3xl"
        >
          التحصيلي
        </p>
        <p className="text-[#00000080] semibold" dir="rtl">
          4 دروس
        </p>
        <p className="text-[#00000080] semibold" dir="rtl">
          ساعة
        </p>
      </div>
    </div>
  );
};
const TeacherCourese = () => {
  return (
    <div className="pr-5 flex  justify-end gap-5 flex-wrap ">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default TeacherCourese;
