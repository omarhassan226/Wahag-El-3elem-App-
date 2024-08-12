import React, { useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '160px',
  },
  formControl: {
    marginBottom: '20px',
    width: '100%',
  },
  inputBase: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ccc',
        borderRadius:'15px'
      },
      '&:hover fieldset': {
        borderColor: '#888', 
      },
      '&.Mui-focused fieldset': {
        borderColor: '#3f51b5'
      },
    },
  },
  button: {
    width: '100%',
    marginTop: '20px',
    backgroundColor: '#3c7098',
    borderRadius: '25px',
    color:'white',
    textAlign:'center',
    padding:'10px'
  },
  link: {
    marginTop: '20px',
    textAlign: 'center',
  },
};

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate()
  const userType = location.pathname.split('/').pop();
  

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post('https://wagag-elalm-backend.fliicker.com/api/public/login', {
        email,
        password,
        user_type: userType,
      }, {
        params: {
          api_token: '123',
        }
      });
      console.log(response);
      
      
      

      if (response) {
        const userType = response.data.user.user_type; 
        navigate(userType === 'student' ? '/app/student/main' : '/app/teacher/main');
    }

    const id = response.data.user.id
    localStorage.setItem('id', id);
    console.log(id);
    
        console.log(response);
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={styles.container}>
        <Typography variant="h4" component="h1" gutterBottom>
          تسجيل الدخول
        </Typography>
        <TextField
          label="البريد الإلكتروني"
          variant="outlined"
          fullWidth
          sx={{ ...styles.formControl, ...styles.inputBase }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end">
                  <i className="fas fa-envelope"></i>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="كلمة المرور"
          variant="outlined"
          fullWidth
          type={showPassword ? 'text' : 'password'}
          sx={{ ...styles.formControl, ...styles.inputBase }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button
          onClick={handleLogin}
          variant="contained"
          sx={styles.button}
          disabled={loading}
        >
          {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
        </Button>
        <Typography variant="body2" color="textSecondary" sx={styles.link}>
          ليس لدي حساب? <Link to="/signup" style={{ textDecoration: 'underline' }}>إنشاء حساب</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default SignInForm;
