import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import { alpha } from '@mui/material/styles';
import { deepOrange } from '@mui/material/colors';
import CardContent from '@mui/material/CardContent';
import {
  Box,
  Grid,
  Stack,
  Button,
  Avatar,
  Container,
  Typography,
  AvatarGroup,
  CardActionArea,
} from '@mui/material';

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
          px: 2,
          borderRadius: 1.5,
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.1),
          display: 'flex',
        }}
      >
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {projects.map((item, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Card sx={{ minWidth: 100, boxShadow: 20 }} key={index}>
                <CardActionArea
                  onClick={() => {
                    router.push('/project-detail');
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {item?.projectName}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      {item?.description}
                    </Typography>

                    <Typography color="text.secondary"> {item?.technology}</Typography>
                    <AvatarGroup max={4} sx={{}}>
                      <Avatar
                        sx={{ bgcolor: deepOrange[500] }}
                        alt="Remy Sharp"
                        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fflat-business-man-user-profile-avatar-icon-vector-4333097&psig=AOvVaw1eEJ5u7ldrd7BCKlTXCXWy&ust=1698948454014000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMjmq6uyo4IDFQAAAAAdAAAAABAR.jpg"
                      />
                      <Avatar
                        alt="Travis Howard"
                        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Duser&psig=AOvVaw1eEJ5u7ldrd7BCKlTXCXWy&ust=1698948454014000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMjmq6uyo4IDFQAAAAAdAAAAABAE"
                      />
                      <Avatar
                        alt="Cindy Baker"
                        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fuser-avatar&psig=AOvVaw2iRgJbVWGtPq8dTpYEuwDP&ust=1698948568489000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMCzh-Kyo4IDFQAAAAAdAAAAABAE"
                      />
                      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                    </AvatarGroup>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
