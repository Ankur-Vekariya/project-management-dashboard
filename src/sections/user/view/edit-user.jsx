import React from 'react';
import axios from 'axios';

import { alpha } from '@mui/material/styles';
import {
  Box,
  Stack,
  Button,
  Select,
  MenuItem,
  Container,
  TextField,
  Typography,
} from '@mui/material';

import { useRouter } from 'src/routes/hooks';
// import { Helmet } from 'react-helmet-async';

import Iconify from 'src/components/iconify';

export default function EditUser() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = React.useState('Role');
  const [userData, setUserData] = React.useState({
    userName: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  console.log('userdata-------------', userData);

  const createUser = () => {
    axios
      .post('http://localhost:4000/users/create-user', {
        userName: userData.userName,
        email: userData.email,
        password: userData.password,
        role: selectedRole,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Users</Typography>

        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="eva:plus-fill" />}
          onClick={() => {
            router.push('/edit/user');
          }}
        >
          New User
        </Button>
      </Stack>
      <Box
        sx={{
          py: 2,
          px: 2.5,
          borderRadius: 1.5,
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
        }}
      >
        <Box
          sx={{
            minWidth: 120,
          }}
        >
          <TextField
            sx={{ minWidth: 300, my: 2, mx: 2 }}
            id="outlined-basic"
            label="User Name"
            variant="outlined"
            onChange={(e) => {
              setUserData({ ...userData, userName: e.target.value });
            }}
          />
          <TextField
            sx={{ minWidth: 300, my: 2, mx: 2 }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(e) => {
              setUserData({ ...userData, email: e.target.value });
            }}
          />
        </Box>
        <Box sx={{ minWidth: 120 }}>
          <TextField
            sx={{ minWidth: 300, my: 2, mx: 2 }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={(e) => {
              setUserData({ ...userData, password: e.target.value });
            }}
          />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedRole}
            label="Role"
            onChange={handleChange}
            sx={{ minWidth: 300, my: 2, mx: 2 }}
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="manager">Manager</MenuItem>
            <MenuItem value="developer">Developer</MenuItem>
          </Select>
        </Box>
        <Button
          variant="contained"
          color="inherit"
          // startIcon={<Iconify icon="eva:plus-fill" />}
          onClick={() => {
            createUser();
          }}
          sx={{ minWidth: 300, my: 2, mx: 2 }}
        >
          Add User
        </Button>
      </Box>
    </Container>
    // <Helmet>
    //   <title> User | Minimal UI </title>
    // </Helmet>
  );
}
