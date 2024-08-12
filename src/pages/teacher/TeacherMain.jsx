import Header from "../../components/Header";
const Card = () => {
  return (
    <div className=" w-fit border-[1px] border-solid border-[#3C7098] p-5 rounded-2xl flex flex-col">
      <div className="flex justify-end items-start gap-24">
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
const TeacherMain = () => {
  return (
    <div>
      <Header text="مرحبا بك في منصة وهج التعليمية" />
      <p className="text=[#00000080] mt-2 pr-5" dir="rtl">
        اختر الكورس المناسب واستمتع برحله تعليمية مميزه
      </p>
      <div className="flex justify-end py-5 px-5 gap-5 ">
        <p className="py-2 px-5 bg-[#3C70981A] w-fit rounded-full cursor-pointer ">
          الجامعات
        </p>
        <p className="py-2 px-5 bg-[#3C70981A] w-fit rounded-full cursor-pointer">
          الثانوية العامة
        </p>
      </div>
      <div className="pr-5 flex justify-end gap-5 flex-wrap ">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default TeacherMain;
