import { Card, CardContent, CardMedia, Typography, Box, Rating } from '@mui/material';

const TutorProfile = ({ name, rating, description, image }) => {
    return (
        <Box display="flex" alignItems="center" p={2} dir="rtl">
            <CardMedia
                component="img"
                sx={{ width: 120, borderRadius: '50%' }}
                image={image}
                alt={name}
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Box display="flex" alignItems="center">
                    <Rating value={rating} readOnly />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                        ({rating})
                    </Typography>
                </Box>
                <Typography variant="body2" color="textSecondary">
                    {description}
                </Typography>
            </CardContent>
        </Box>
    );
};

export default TutorProfile;
