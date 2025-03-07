import React, { useState } from 'react';
import {
  TextField, Button, Container, Box, Typography, IconButton,
  InputAdornment, createTheme, ThemeProvider, MenuItem, Select, FormControl, InputLabel
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import CountryFlags from '../components/CountryFlags';
import FacebookIcon from '@mui/icons-material/Facebook';
import axios from 'axios';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px'
  },
  formControl: {
    marginBottom: '20px',
    width: '100%',
  },
  inputBase: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ccc',
        borderRadius: '15px'
      },
      '&:hover fieldset': {
        borderColor: '#888',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#3f51b5',
      }
    }
  },
  button: {
    width: '100%',
    marginTop: '20px',
    backgroundColor: '#3c7098',
    borderRadius: '25px',
    color: 'white',
    textAlign: 'center',
    padding: '10px'
  },
  socialButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  },
  link: {
    marginTop: '20px',
    textAlign: 'center',
  },
  iconButtons: {
    border: '1px solid #3c7098',
    padding: '10px',
    borderRadius: '50%',
  }
};

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phonenumber: '',
    password: '',
    password_confirmation: '',
    date_of_birth: '',
    gender: '',
    user_type: '',
  });
  const [error, setError] = useState('');

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, password_confirmation } = formData;
    if (password !== password_confirmation) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('https://wagag-elalm-backend.fliicker.com/api/public/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.data.status) {
        window.location.href = "/choice"
      } else {
        setError('Invalid user type');
      }
    } catch (error) {
      setError('Registration failed');
    }
  };

  const theme = createTheme({
    direction: 'rtl',
  });

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <Box sx={styles.container}>
          <Typography variant="h4" component="h1" gutterBottom>
            التسجيل
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="ادخل الاسم"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleChange}
              sx={{ ...styles.formControl, ...styles.inputBase }}
            />
            <TextField
              label="ادخل البريد الالكتروني"
              variant="outlined"
              fullWidth
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              sx={{ ...styles.formControl, ...styles.inputBase }}
            />
            <TextField
              label="ادخل رقم الهاتف"
              variant="outlined"
              fullWidth
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              sx={{ ...styles.formControl, ...styles.inputBase }}
              InputProps={{
                startAdornment: <InputAdornment position="start"><CountryFlags />| +20</InputAdornment>
              }}
            />
            <TextField
              label="ادخل تاريخ الميلاد"
              variant="outlined"
              fullWidth
              name="date_of_birth"
              type="date"
              value={formData.date_of_birth}
              onChange={handleChange}
              sx={{ ...styles.formControl, ...styles.inputBase }}
              InputLabelProps={{ shrink: true }}
            />
            <FormControl fullWidth sx={styles.formControl}>
              <InputLabel>النوع</InputLabel>
              <Select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                sx={styles.inputBase}
              >
                <MenuItem value="male">ذكر</MenuItem>
                <MenuItem value="female">أنثى</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={styles.formControl}>
              <InputLabel>نوع المستخدم</InputLabel>
              <Select
                name="user_type"
                value={formData.user_type}
                onChange={handleChange}
                sx={styles.inputBase}
              >
                <MenuItem value="student">طالب</MenuItem>
                <MenuItem value="instructor">مدرس</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="ادخل كلمة المرور"
              variant="outlined"
              fullWidth
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              sx={{ ...styles.formControl, ...styles.inputBase }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <TextField
              label="تأكيد كلمة المرور"
              variant="outlined"
              fullWidth
              type={showConfirmPassword ? 'text' : 'password'}
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleChange}
              sx={{ ...styles.formControl, ...styles.inputBase }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowConfirmPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            {error && <Typography color="error">{error}</Typography>}
            <Button type="submit" variant="contained" color="primary" sx={styles.button}>
              تسجيل
            </Button>
          </form>
          <div style={styles.socialButtons}>
            <IconButton sx={styles.iconButtons}>
              <FacebookIcon sx={{ color: '#4092ff', width: '30px', height: '30px' }} />
            </IconButton>
            <IconButton sx={styles.iconButtons}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
              </svg>
            </IconButton>
            <IconButton sx={styles.iconButtons}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
              </svg>
            </IconButton>
          </div>
          <Typography style={styles.link}>
            {formData.user_type === 'student' ? (
              <Link to="/student-login">لديك حساب؟ <span style={{ textDecoration: 'underline' }}>سجل دخول كطالب</span> </Link>
            ) : (
              <Link to="/teacher-login">لديك حساب؟ <span style={{ textDecoration: 'underline' }}>سجل دخول كمدرس</span></Link>
            )}
            <div>
              قم بتبديل نوع المستخدم لتبديل نوع الحساب
            </div>
          </Typography>

        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignInForm;
