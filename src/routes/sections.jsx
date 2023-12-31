import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import ProjectsPage from 'src/pages/projects';
import DashboardLayout from 'src/layouts/dashboard';

import EditUser from 'src/sections/user/view/edit-user';
import EditProjects from 'src/sections/projects/view/edit-projects';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const Tasks = lazy(() => import('src/pages/tasks'));
export const RegisterPage = lazy(() => import('src/pages/register'));
export const ProjectDetailPage = lazy(() => import('src/pages/project-detail'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'user', element: <UserPage /> },
        { path: 'edit/user', element: <EditUser /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'tasks', element: <Tasks /> },
        { path: 'projects', element: <ProjectsPage /> },
        { path: 'edit/project', element: <EditProjects /> },
        { path: 'project-detail', element: <ProjectDetailPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'register',
      element: <RegisterPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
