import React from 'react';
import { Box, Typography, Rating, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { colors } from "../../colors/colors";

function CardsOfAbilityPage({text}) {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Link
                to={`/app/student/ability/1`}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '20px',
                    border: `1px solid ${colors.lightBlue}`,
                    borderRadius: '16px',
                    textDecoration: 'none',
                    gap: '20px',
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', width:'100%'  }}>
                        <img src="/public/Omar.jpg" alt="{Teacher?.name}" width={100}/>
                    <Box>
                        <Typography variant="h6" component="p" sx={{ fontWeight: 'bold' }}>
                            ahmed
                        </Typography>
                        <Rating
                            name="text-feedback"
                            size="small"
                            value={4}
                            readOnly
                            precision={0.5}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        backgroundColor: '#f5f8fa',
                        borderRadius: '10px',
                        padding: '20px',
                        textAlign: 'center',
                        width: '100%',
                    }}
                >
                    <Typography variant="h6" component="p" sx={{ color: colors.lightBlue }}>
                        {text}
                    </Typography>
                    <Typography variant="body2" component="p" sx={{ color: '#00000080', marginTop: '-8px' }}>
                        دروس
                    </Typography>
                    <Typography variant="body2" component="p" sx={{ color: '#00000080', marginTop: '-8px' }}>
                        ساعة
                    </Typography>
                </Box>
            </Link>
        </Grid>
    );
}

export default CardsOfAbilityPage;
