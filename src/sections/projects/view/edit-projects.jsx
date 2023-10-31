import axios from 'axios';
import React, { useEffect } from 'react';

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

export default function EditProjects() {
  const [selectedManager, setSelectedManager] = React.useState('Role');
  const [projectData, setProjectData] = React.useState({
    projectName: '',
    description: '',
    technology: '',
  });
  const [managers, setManagers] = React.useState([]);

  const handleChange = (event) => {
    setSelectedManager(event.target.value);
  };

  console.log('projectData-------------', projectData);

  const createProject = () => {
    axios
      .post('http://localhost:4000/projects/create-project', {
        projectName: projectData.projectName,
        description: projectData.description,
        technology: projectData.technology,
        createdBy: '653cd9b18fb2ee68155e15e9',
        assignedTo: selectedManager,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getManagers = () => {
    axios
      .get('http://localhost:4000/users/all/manager')
      .then((response) => {
        console.log(response);
        setManagers(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getManagers();
  }, []);

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Projects</Typography>
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
            label="Project Name"
            variant="outlined"
            onChange={(e) => {
              setProjectData({ ...projectData, projectName: e.target.value });
            }}
          />
          <TextField
            sx={{ minWidth: 300, my: 2, mx: 2 }}
            id="outlined-basic"
            label="Description"
            variant="outlined"
            onChange={(e) => {
              setProjectData({ ...projectData, description: e.target.value });
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
              setProjectData({ ...projectData, technology: e.target.value });
            }}
          />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedManager}
            label="Manager"
            onChange={handleChange}
            sx={{ minWidth: 300, my: 2, mx: 2 }}
          >
            {managers.map((item, index) => (
              <MenuItem value={item?._id}>{item.userName}</MenuItem>
            ))}
          </Select>
        </Box>
        <Button
          variant="contained"
          color="inherit"
          // startIcon={<Iconify icon="eva:plus-fill" />}
          onClick={() => {
            createProject();
          }}
          sx={{ minWidth: 300, my: 2, mx: 2 }}
        >
          Add User
        </Button>
      </Box>
    </Container>
  );
}
