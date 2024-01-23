import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { alpha } from '@mui/material/styles';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import axios from 'axios';

import {
  Box,
  Grid,
  Card,
  Chip,
  Stack,
  Button,
  Avatar,
  Container,
  Typography,
  CardContent,
} from '@mui/material';

import Iconify from 'src/components/iconify';

// import AppWidgetSummary from '../../overview/app-widget-summary';

export default function ProjectsDetailView(props) {
  const data = useLocation();

  const [projectDetail, setProjectDetail] = useState([]);
  const [sprintsList, setSprintsList] = useState([]);

  const getSprints = (arr) => {
    const token = localStorage.getItem('token');
    const arr1 = arr.map((item) => item?.sprints);
    console.log('arr1', arr1);
    axios
      .post(
        `http://localhost:5000/sprints/sprints`,
        {
          sprints: arr1[0],
        },
        {
          headers: { Authorization: `${JSON.parse(token)}` },
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
    const token = localStorage.getItem('token');
    axios
      .get(`http://localhost:5000/projects/project-details/${data.state.projectId}`, {
        headers: { Authorization: `${JSON.parse(token)}` },
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

  useEffect(() => {
    getProjectDetail();
  }, []);

  // function createData(name, calories, fat, carbs, protein) {
  //   return { name, calories, fat, carbs, protein };
  // }

  // const rows = [
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   createData('Eclair', 262, 16.0, 24, 6.0),
  //   createData('Cupcake', 305, 3.7, 67, 4.3),
  //   // createData('Gingerbread', 356, 16.0, 49, 3.9),
  // ];

  const commentData = [
    { comment: 'yuuu erte wew vbhg fjrh' },
    { comment: 'asdfgh fjrh' },
    { comment: 'asdfgh vbhg fjrh we' },
    { comment: 'asdfgh vbhg fjrh' },
    { comment: 'yuuu erte wew vbhg fjrh' },
    { comment: 'asdfgh fjrh' },
    { comment: 'asdfgh vbhg fjrh' },
    { comment: 'asdfgh vbhg fjrh we' },
  ];

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += i + 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
  }
  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Projects</Typography>

        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="eva:plus-fill" />}
          onClick={() => {
            // handleOpen();
            // router.push('/edit/project');
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
        <Grid container spacing={2}>
          {/* <Grid item xs={4}>
            <Box sx={{ py: 1, px: 1, borderRadius: 2, backgroundColor: '#fff', minHeight: 350 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar sx={{ height: 350 }} />
              </LocalizationProvider>
            </Box>
          </Grid> */}
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
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ py: 1, px: 1, borderRadius: 2, backgroundColor: '#fff', minHeight: 350 }}>
              <Typography variant="h5">Comments</Typography>
              {commentData?.map((item, index) => (
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
                    { backgroundColor: getRandomColor() },
                  ]}
                />
              ))}
              {/* <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Dessert (100g serving)</TableCell>
                      <TableCell align="right">Calories</TableCell>
                      <TableCell align="right">Fat&nbsp;(g)</TableCell>
                      <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                      <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer> */}
            </Box>
          </Grid>
          {/* <Grid item xs={4}>
            <Box sx={{ py: 1, px: 1, borderRadius: 2, backgroundColor: '#fff', minHeight: 350 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar sx={{ height: 350 }} />
              </LocalizationProvider>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ py: 1, px: 1, borderRadius: 2, backgroundColor: '#fff', height: 350 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar sx={{ height: 350 }} />
              </LocalizationProvider>
            </Box>
          </Grid> */}
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
                      // ...sx,
                    }}
                    // {...other}
                  >
                    {/* {icon && <Box sx={{ width: 64, height: 64 }}>{icon}</Box>} */}

                    <Stack spacing={0.5}>
                      {/* <Typography variant="h4">{fShortenNumber(total)}</Typography> */}

                      <Typography variant="h6">{sprints.sprintName}</Typography>
                      <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                        {sprints.description}
                      </Typography>
                      <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                        {sprints.extra}
                      </Typography>
                    </Stack>
                  </Card>
                  {/* <AppWidgetSummary
                    key={i}
                    title={sprints.sprintName}
                    title={sprints.sprintName}
                    title={sprints.sprintName}

                    // total={sprints?.description}
                    color="info"
                    icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
                  /> */}
                </Grid>
              ))}
            </>
          ))}
        </Grid>

        {/* <Button variant="contained" color="inherit" sx={{ minWidth: 300, my: 2, mx: 2 }}>
          Add User
        </Button> */}
      </Box>
    </Container>
  );
}
