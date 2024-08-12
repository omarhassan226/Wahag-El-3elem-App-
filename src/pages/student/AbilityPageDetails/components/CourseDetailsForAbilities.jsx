import { Box, Grid, Paper, Typography } from '@mui/material';
import { colors } from '../../../../colors/colors';

const CourseDetailsForAbilities = ({ details }) => {
    return (
        <Grid container spacing={2} p={2} sx={{ direction: 'rtl' }}>
            {details.map((detail, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', border: `1px solid ${colors.lightBlue}`, gap: '20px',  }}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
                            {detail.icon}
                            {details.description1}
                        </Box>
                        <Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                            <Typography variant="h6" component="div">
                                {detail.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" sx={{backgroundColor:colors.sky, padding:'7px', borderRadius:'30px'}}>
                                {detail.description}
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
};

export default CourseDetailsForAbilities;
