import axios from 'axios';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { alpha } from '@mui/material/styles';
import {
  Box,
  Grid,
  Card,
  Chip,
  Stack,
  Modal,
  Button,
  Avatar,
  TextField,
  Container,
  Typography,
  CardContent,
} from '@mui/material';

import Iconify from 'src/components/iconify';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 3,
  pt: 2,
  px: 4,
  pb: 3,
  minWidth: 800,
};

export default function ProjectsDetailView(props) {
  const reduxUser = useSelector((state) => state.userSlice.user);
  const data = useLocation();

  const [projectDetail, setProjectDetail] = useState([]);
  const [sprintsList, setSprintsList] = useState([]);
  const [comment, setComment] = useState('');
  const [open, setOpen] = React.useState(false);
  const [commentsList, setCommentssList] = useState([]);

  const getSprints = (arr) => {
    // const token = localStorage.getItem('token');
    const arr1 = arr.map((item) => item?.sprints);
    console.log('arr1', arr1);
    axios
      .post(
        `http://localhost:5000/sprints/sprints`,
        {
          sprints: arr1[0],
        },
        {
          headers: { Authorization: `${reduxUser?.user?.token}` },
        }
      )
      .then((response) => {
        console.log('response sprints', response);
        setSprintsList(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getProjectDetail = () => {
    axios
      .get(`http://localhost:5000/projects/project-details/${data.state.projectId}`, {
        headers: { Authorization: `${reduxUser?.user?.token}` },
      })
      .then((response) => {
        console.log('response==========', response);
        setProjectDetail(response?.data);
        getSprints(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const createComment = () => {
    const userData = JSON.parse(localStorage.getItem('user'));

    const body = {
      comment,
      projectId: data.state.projectId,
      userId: userData?._id,
    };
    axios
      .post(`http://localhost:5000/comments/create-comment`, body, {
        headers: { Authorization: `${userData?.token}` },
      })
      .then((response) => {
        console.log('response==========', response);
        handleClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getProjectComment = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    console.log('userData', userData);
    axios
      .get(`http://localhost:5000/comments/by-project/${data.state.projectId}`, {
        headers: { Authorization: `${userData?.token}` },
      })
      .then((response) => {
        console.log('response==========', response);
        setCommentssList(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProjectDetail();
    getProjectComment();
  }, []);

  // function getRandomColor() {
  //   const letters = '0123456789ABCDEF';
  //   let color = '#';
  //   for (let i = 0; i < 6; i += i + 1) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   console.log(color);
  //   return color;
  // }
  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Project details</Typography>

        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="eva:plus-fill" />}
          onClick={() => {
            handleOpen();
            // router.push('/edit/project');
          }}
        >
          New Comment
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
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box sx={{ py: 2, px: 2, borderRadius: 2, backgroundColor: '#fff', height: 350 }}>
              <Typography variant="h5">Team</Typography>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                  <Card
                    sx={{
                      minWidth: 150,
                      // maxHeight: 150,
                      backgroundColor: '#dcf0fa',
                    }}
                  >
                    <CardContent
                      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 40, height: 40 }}
                      />
                      <Typography variant="h5">benevolent</Typography>
                      <Typography
                        // variant="h6 "
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Word of the Day
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card
                    sx={{
                      minWidth: 150,
                      // maxHeight: 150,
                      backgroundColor: '#dcf0fa',
                    }}
                  >
                    <CardContent
                      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 40, height: 40 }}
                      />
                      <Typography variant="h5">benevolent</Typography>
                      <Typography
                        // variant="h6 "
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Word of the Day
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card
                    sx={{
                      minWidth: 150,
                      // maxHeight: 150,
                      backgroundColor: '#dcf0fa',
                    }}
                  >
                    <CardContent
                      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 40, height: 40 }}
                      />
                      <Typography variant="h5">benevolent</Typography>
                      <Typography
                        // variant="h6 "
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Word of the Day
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card
                    sx={{
                      minWidth: 150,
                      // maxHeight: 150,
                      // backgroundColor: '#dcf0fa',
                    }}
                  >
                    <CardContent
                      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 40, height: 40 }}
                      />
                      <Typography variant="h5">benevolent</Typography>
                      <Typography
                        // variant="h6 "
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Word of the Day
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ py: 1, px: 1, borderRadius: 2, backgroundColor: '#fff', minHeight: 350 }}>
              <Typography variant="h5">Comments</Typography>
              {commentsList?.map((item, index) => (
                <Chip
                  key={index}
                  avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
                  label={item?.comment}
                  // variant="outlined"
                  onDelete={() => {
                    console.log('delete click');
                  }}
                  sx={[
                    { height: '40px', margin: '5px', borderRadius: '25px' },
                    { backgroundColor: '#dcf0fa' },
                  ]}
                />
              ))}
            </Box>
          </Grid>
          {projectDetail?.map((item, index) => (
            <>
              {sprintsList.map((sprints, i) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card
                    component={Stack}
                    spacing={3}
                    direction="row"
                    sx={{
                      px: 3,
                      py: 3,
                      borderRadius: 2,
                    }}
                  >
                    <Stack spacing={0.5}>
                      <Typography variant="h6">{sprints.sprintName}</Typography>
                      <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                        {sprints.description}
                      </Typography>
                      <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                        {sprints.extra}
                      </Typography>
                    </Stack>
                  </Card>
                </Grid>
              ))}
            </>
          ))}
        </Grid>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }}>
          <Typography variant="h4">Create Project</Typography>
          <Box
            sx={{
              py: 2,
              px: 2.5,
              borderRadius: 1.5,
              bgcolor: (theme) => alpha(theme.palette.grey[600], 0.12),
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
                label="comment"
                variant="outlined"
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              />
            </Box>

            <Button
              variant="contained"
              color="inherit"
              startIcon={<Iconify icon="eva:plus-fill" />}
              onClick={() => {
                createComment();
              }}
              sx={{ minWidth: 300, my: 2, mx: 2 }}
            >
              Add Comment
            </Button>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
}
