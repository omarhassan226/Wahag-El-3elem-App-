import { Box, Button, Container, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { colors } from '../../../../colors/colors';
import { useContext } from 'react';
import { CartContext } from '../../../../context/CartContext';

const CallToAction = ({ handleAddToCart }) => {
    const {cart} = useContext(CartContext)
    return (
        <Box onClick={handleAddToCart} display="flex" justifyContent="space-between" sx={{ backgroundColor: colors.success, borderRadius: '50px', padding: '10px', cursor: 'pointer' }}>
            <Container maxWidth='1440px !important'>
                <Box display="flex" justifyContent="space-between" sx={{ backgroundColor: colors.success, borderRadius: '50px', padding: '10px' }}>
                    <Typography variant="h6" sx={{ color: colors.white }}>{cart[0]?.price} ر.س</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: colors.white, gap: '20px' }}>
                        أضف إلى السلة<ShoppingCartIcon />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default CallToAction;
