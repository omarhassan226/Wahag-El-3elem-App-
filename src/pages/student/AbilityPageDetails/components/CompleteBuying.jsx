import { Box, Button, Container, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { colors } from '../../../../colors/colors';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const CompleteBuying = ({ price }) => {
    return (
        <Box display="flex" justifyContent="flex-end" sx={{ backgroundColor: colors.lightBlue, borderRadius: '50px', padding: '10px', cursor: 'pointer' }}>
            <Container maxWidth='1440px !important' sx={{ width: '58%', margin: '0 !important' }}>
                <Box display="flex" justifyContent="space-between" sx={{ backgroundColor: colors.lightBlue, borderRadius: '50px', padding: '10px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: colors.white, gap: '20px' }}>
                        اكمل عملية الاشتراك<ShoppingCartIcon />
                    </Box>
                    <Box sx={{display:'flex', position:'relative'}}>
                        <Typography variant="h4" sx={{ color: colors.white, position:'absolute',bottom:'0', display:'flex', alignItems:'center', height:'100%' }}><KeyboardArrowRightIcon sx={{ fontSize:'30px'}} /></Typography>
                        <Typography variant="h4" sx={{ color: colors.white , position:'absolute', bottom:'0', display:'flex', alignItems:'center', height:'100%', left:'-10px'}}><KeyboardArrowRightIcon sx={{ fontSize:'30px', opacity:'0.5'}} /></Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default CompleteBuying;
