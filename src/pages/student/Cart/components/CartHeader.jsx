/* eslint-disable react/prop-types */
import { LuBell } from "react-icons/lu";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import { useContext } from "react";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from "@mui/material";
import { CartContext } from "../../../../context/CartContext";
import { colors } from "../../../../colors/colors";


export const CartHeader = ({ text }) => {
    const { cart, clearCart } = useContext(CartContext);

    return (
        <div className="flex justify-between ">
            <div className="flex items-start gap-3">
                <Link to={'/app/student/cart'}>
                    <div
                        className="p-3 rounded-full bg-[#0000000D]"
                        style={{
                            backgroundColor: cart.length > 0 ? colors.lightBlue : colors.sky,
                            color: cart.length > 0 ? colors.white : colors.black, position: 'relative'
                        }}
                        onClick={() => clearCart()}
                    >
                        <span style={{ position: 'absolute', top: '-7px', right: '-12px', backgroundColor: colors.success, padding: '10px', borderRadius: '50%', width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{cart.length}</span>
                        <IconButton >
                            <DeleteIcon sx={{color:cart.length>0? colors.white: colors.lightBlue}}/>
                        </IconButton>
                    </div>
                </Link>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <h1 className="text-5xl font-semibold" dir="ltr">
                    {text}
                </h1>
                <div>
                    <SlowMotionVideoIcon sx={{ fontSize: "60px", opacity: "0.5" }} />
                </div>
            </div>
        </div>
    );
};

export default CartHeader;
