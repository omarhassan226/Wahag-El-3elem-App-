import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBook, FaBars } from 'react-icons/fa';
import { RiHome6Fill } from 'react-icons/ri';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { IoPersonOutline } from 'react-icons/io5';
import { BsCart2 } from 'react-icons/bs';

const Sidebar = () => {
  const location = useLocation();
  const [showNames, setShowNames] = useState(false);
  const id = localStorage.getItem('id')

  const toggleShowNames = () => {
    setShowNames(!showNames);
  };

  const routes = location.pathname.includes('/app/student')
    ? [
        { path: '/app/student/main', icon: RiHome6Fill, Name: 'الرئيسة' },
        { path: '/app/student/courses/', icon: FaBook, Name: 'الكورسات' },
        { path: '/app/student/lecturers', icon: LiaChalkboardTeacherSolid, Name: 'المحاضرين' },
        { path: '/app/student/cart', icon: BsCart2, Name: 'السلة' },
        { path: `/app/student/profile/${id}`, icon: IoPersonOutline, Name: 'الملف الشخصي' },
      ]
    : [
        { path: '/app/teacher/main', icon: RiHome6Fill, Name: 'الرئيسة' },
        { path: '/app/teacher/analysis/', icon: FaBook, Name: 'الاحصائيات' },
        { path: '/app/teacher/courses', icon: LiaChalkboardTeacherSolid, Name: 'الكورسات' },
        { path: '/app/teacher/profile', icon: IoPersonOutline, Name: 'الملف الشخصي' },
      ];

  return (
    <div className="bg-[#3C7098] text-white min-h-full rounded-2xl transition-all duration-300">
      <div
        className={`flex pt-5 ${
          showNames ? 'justify-end pr-7' : 'justify-center'
        }`}
      >
        <FaBars
          onClick={toggleShowNames}
          size={25}
          className="cursor-pointer"
        />
      </div>
      <ul className="w-full flex flex-col pt-8">
        {routes.map((route, index) => {
          const isActive = location.pathname.startsWith(route.path);

          return (
            <li key={index} className="px-1 w-full">
              <Link
                to={route.path}
                className={`flex items-center gap-5 py-6 px-7 w-full ${
                  showNames
                    ? ' pl-24 pr-4 border-b-[.5px] border-solid border-b-[#FFFFFF1A]'
                    : ''
                } ${isActive && showNames ? 'bg-[#FFFFFF1A]' : ''}`}
              >
                {showNames && (
                  <div className="w-20 flex justify-end">
                    <p
                      dir="rtl"
                      className={` ${showNames ? 'opacity-100' : 'opacity-0'}`}
                    >
                      {route.Name}
                    </p>
                  </div>
                )}
                <route.icon
                  color={isActive ? '#FFFFFF' : '#FFFFFF80'}
                  size={25}
                  className="mx-auto"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
