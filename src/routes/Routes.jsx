import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrimaryLayout from "../layout/PrimaryLayout";
import IndexPage from "../pages/IndexPage";


const router = createBrowserRouter([
  {
    path: '/',
    element: <PrimaryLayout />,
    children: [
      {
        index: true,
        element: <IndexPage />
      },
      {
        path: '/nosotros',
        element: <h2>Nosotros</h2>
      }
    ]
  }
])

const Routes = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default Routes;