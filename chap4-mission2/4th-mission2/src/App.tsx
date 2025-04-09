import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import HomeLayout from './layouts/HomeLayout.tsx';
import SignupPage from './pages/SignupPage.tsx';

const router : Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {index: true, path: "/", element: <HomePage />},
      {path: "login", element: <LoginPage />},
      {path: "signup", element: <SignupPage />},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;