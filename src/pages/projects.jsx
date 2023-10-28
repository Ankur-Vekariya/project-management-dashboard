import { Helmet } from 'react-helmet-async';

import ProjectsView from 'src/sections/projects/view/projects';

// ----------------------------------------------------------------------

export default function ProjectsPage() {
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

      <ProjectsView />
    </>
  );
}
