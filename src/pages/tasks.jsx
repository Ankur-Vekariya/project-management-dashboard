import { Helmet } from 'react-helmet-async';

import TasksView from 'src/sections/tasks/tasks';

// ----------------------------------------------------------------------

export default function Tasks() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>
      {/* <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Users</Typography>

        <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          New User
        </Button>
      </Stack> */}

      <TasksView />
    </>
  );
}
