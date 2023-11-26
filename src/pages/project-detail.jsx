import { Helmet } from 'react-helmet-async';

import ProjectsDetailView from 'src/sections/projects/view/project-detail';

export default function ProjectDetailPage() {
  
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <ProjectsDetailView />
    </>
  );
}
