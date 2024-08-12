/* eslint-disable react/prop-types */
import { BsCart2 } from "react-icons/bs";
import { LuBell } from "react-icons/lu";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import { Container } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { colors } from "../colors/colors";
import { Link } from "react-router-dom";

export const Header = ({ text }) => {
  const { cart } = useContext(CartContext);

  return (
    <div className="flex justify-between ">
      <div className="flex items-start gap-3">
        <div className="p-5 rounded-full bg-[#0000000D]">
          <LuBell size={23} />
        </div>
        <Link to={'/app/student/cart'}>
        <div
          className="p-5 rounded-full bg-[#0000000D]"
          style={{
            backgroundColor: cart.length > 0 ? colors.lightBlue : colors.sky,
            color: cart.length > 0 ? colors.white : colors.black, position:'relative'
          }}
        >
          <span style={{position:'absolute', top:'-7px', right:'-12px', backgroundColor:colors.success, padding:'10px', borderRadius:'50%', width:'35px', height:'35px', display:'flex', justifyContent:'center', alignItems:'center'}}>{cart.length}</span>
          <BsCart2 size={23} />
        </div>
        </Link>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <h1 className="text-5xl font-semibold" dir="rtl">
          {text}
        </h1>
        <div>
          <SlowMotionVideoIcon sx={{ fontSize: "60px", opacity: "0.5" }} />
        </div>
      </div>
    </div>
  );
};

export default Header;
