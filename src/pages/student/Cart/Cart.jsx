import React, { useContext } from 'react';
import { Box, Typography, IconButton, Button, TextField, Container, Grid, Rating } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../../../context/CartContext';
import CartHeader from './components/CartHeader';
import { colors } from '../../../colors/colors';

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <Box
      p={2}
      my={2}
      border="1px solid #E0E0E0"
      borderRadius="8px"
      sx={{ backgroundColor: '#f9f9f9' }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={2} md={7}>
          <IconButton onClick={() => removeItem(item.id)}>
            <DeleteIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant='h4'>{item.name}</Typography>
          <Rating value={4} readOnly />
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <img src="/public/Omar.jpg" alt={item.name} width="100%" style={{ borderRadius: '8px' }} />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            color="primary"
            sx={{
              textAlign: 'center',
              border: '1px solid #ccc',
              padding: '14px',
              borderRadius: '50px',
              color: colors.success,
              fontWeight: 'bold'
            }}
          >
            ر.س {item.price}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="ادخل الكود"
            sx={{
              mt: 1,
              width: '100%',
              "& .MuiInputBase-input": {
                textAlign: 'center',
                backgroundColor: colors.sky,
                padding: '20px',
                borderRadius: '50px !important'
              },
              "& .MuiInputBase-root": { borderRadius: '50px' }
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mt: 1,
              backgroundColor: colors.lightBlue,
              padding: '20px',
              borderRadius: '50px',
            }}
          >
            اتمام عملية الاشتراك
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <Container sx={{ maxWidth: '1500px !important' }}>
      <Box p={3}>
        <CartHeader text={'السله'} />
        <Box sx={{ paddingY: '20px' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              backgroundColor: colors.lightBlue,
              color: colors.white,
              padding: '20px',
              borderRadius: '50px',
              textAlign: 'center'
            }}
          >
            <Typography variant="h6">
              ({cart.length})
            </Typography>
            <Typography variant="h6">
              عدد الكورسات
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={2}>
          {cart.map((item) => (
            <Grid item xs={12} key={item.id}>
              <CartItem item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Cart;
