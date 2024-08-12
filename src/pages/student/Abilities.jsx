import React, { useState } from "react";
import {
    Container,
    Grid,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    InputBase,
    Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AbilitiesCards from "../../components/AbilitiesCards";
import { colors } from "../../colors/colors";
import Header from "../../components/Header";
import CardsOfAbilityPage from "../../components/student/CardsOfAbilityPage";

const Header1 = ({ handleShoMenu }) => {
    return (
        <AppBar position="static" sx={{ backgroundColor: colors.lightBlue, borderRadius: '50px' }}>
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center' }}>
                    <Box onClick={handleShoMenu} sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', pl: 2 }}>
                        <ArrowDropDownIcon sx={{ opacity: '0.5' }} />
                        <Typography sx={{ pl: 0.5 }}>المحاضرين</Typography>
                    </Box>
                    <Box onClick={handleShoMenu} sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', pl: 2 }}>
                        <ArrowDropDownIcon sx={{ opacity: '0.5' }} />
                        <Typography sx={{ pl: 0.5 }}>الثانويه العامه</Typography>
                    </Box>
                    <Box onClick={handleShoMenu} sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', pl: 2 }}>
                        <ArrowDropDownIcon sx={{ opacity: '0.5' }} />
                        <Typography sx={{ pl: 0.5 }}>المواد</Typography>
                    </Box>
                    <Box onClick={handleShoMenu} sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', pl: 2, color: 'white' }}>
                        <ArrowDropDownIcon sx={{ opacity: '0.5' }} />
                        <Typography sx={{ pl: 0.5 }}>السعر</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
                    <InputBase
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                        sx={{
                            background: "white",
                            borderRadius: "4px",
                            padding: "0 10px",
                        }}
                    />
                    <IconButton type="submit" aria-label="search">
                        <SearchIcon sx={{ color: 'white' }} />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

function Abilities() {
    const [isClicked, setIsClicked] = useState(false);

    const handleShoMenu = () => {
        setIsClicked(!isClicked);
    };

    return (
        <Container sx={{ maxWidth: '1500px !important' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <Header text="القدرات" />
                <Box sx={{ py: 2 }}>
                    <Header1 handleShoMenu={handleShoMenu} />
                    {isClicked && (
                        <Box
                            sx={{
                                width: { xs: '100%', sm: '200px' },
                                height: '200px',
                                backgroundColor: colors.lightBlue,
                                borderRadius: '20px',
                                color: 'white',
                                mt: 2,
                            }}
                        >
                            <ul style={{ padding: '15px', margin: 0 }}>
                                <li>item 1</li>
                                <li>item 2</li>
                                <li>item 3</li>
                                <li>item 4</li>
                            </ul>
                        </Box>
                    )}
                </Box>
                <Grid container dir="rtl">
                    <CardsOfAbilityPage text={'القدرات'}/>
                </Grid>
            </Box>
        </Container>
    );
}

export default Abilities;
