import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import { alpha } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import { Box, Stack, Button, Container, Typography } from '@mui/material';

import { useRouter } from 'src/routes/hooks';

import Iconify from 'src/components/iconify';

export default function ProjectsView() {
  const [projects, setProjects] = useState([]);
  const getProjects = () => {
    axios
      .get('http://localhost:4000/projects')
      .then((response) => {
        console.log(response);
        setProjects(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProjects();
  }, []);
  const router = useRouter();
  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Projects</Typography>

        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="eva:plus-fill" />}
          onClick={() => {
            router.push('/edit/project');
          }}
        >
          New Projects
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
        {projects.map((item, index) => (
          <Card sx={{ width: 275, my: 2, mx: 2.5 }} key={index}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
                adjective
                {/* be{bull}nev{bull}o{bull}lent */}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
