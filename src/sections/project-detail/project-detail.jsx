import React from 'react';

import { alpha } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {
  Box,
  Grid,
  Card,
  Button,
  Avatar,
  Container,
  Typography,
  //   CardActions,
  CardContent,
} from '@mui/material';

export default function ProjectsDetailView() {
  return (
    <Container>
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
            <Box sx={{ py: 1, px: 1, borderRadius: 2, backgroundColor: '#fff', height: 350 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar sx={{ height: 350 }} />
              </LocalizationProvider>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ py: 1, px: 1, borderRadius: 2, backgroundColor: '#fff' }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
              </LocalizationProvider>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ py: 1, px: 1, borderRadius: 2, backgroundColor: '#fff', height: 350 }}>
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
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ py: 2, px: 2, borderRadius: 2, backgroundColor: '#fff', height: 350 }}>
              <Typography>Team</Typography>
              <Grid item xs={4}>
                <Card
                  sx={{
                    maxWidth: 150,
                    maxHeight: 150,

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
              <Grid item xs={4}>
                <Card
                  sx={{
                    maxWidth: 150,
                    maxHeight: 150,

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

              {/* <Card
                sx={{
                  maxWidth: 150,
                  maxHeight: 150,
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
              </Card> */}
            </Box>
          </Grid>
        </Grid>
        <Button variant="contained" color="inherit" sx={{ minWidth: 300, my: 2, mx: 2 }}>
          Add User
        </Button>
      </Box>
    </Container>
  );
}
