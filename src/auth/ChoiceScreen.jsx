import { Button } from '@mui/material';
import React, { useState } from 'react';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
    },
    button: {
        width: '25%',
        margin: '20px',
        borderRadius: '25px',
        color: 'white',
        textAlign: 'center',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '20px'
    },
    selectedButton: {
        backgroundColor: '#3c7098',
    },
    unselectedButton: {
        backgroundColor: '#ffffff',
        outline: '1px solid #3c7098',
        color: '#3c7098',
        "&:hover": {
            backgroundColor: 'primary',
            color: '#ffffff',
        }
    }
};

const ChoiceScreen = () => {
    const [selected, setSelected] = useState('student');

    const handleButtonClick = (value) => {
        setSelected(value);
        if (value === 'student') {
            window.location.href = '/signin/student';
        } else if (value === 'instructor') {
            window.location.href = '/signin/instructor';
        }
    };

    return (
        <div style={styles.container}>
            <Button
                type="button"
                variant="contained"
                sx={{
                    ...styles.button,
                    ...(selected === 'student' ? styles.selectedButton : styles.unselectedButton),
                }}
                onClick={() => handleButtonClick('student')}
            >
                طالب
            </Button>
            <Button
                type="button"
                variant="contained"
                sx={{
                    ...styles.button,
                    ...(selected === 'instructor' ? styles.selectedButton : styles.unselectedButton),
                }}
                onClick={() => handleButtonClick('instructor')}
            >
                مدرس
            </Button>
        </div>
    );
};

export default ChoiceScreen;
