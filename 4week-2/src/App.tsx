import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomeLayout from './layouts/HomeLayout';

// 1. 홈페이지
// 2. 로그인 페이지
// 3. 회원가입 페이지

const router  = createBrowserRouter(  [
  {
    path: '/',
    element: <HomeLayout  />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <Homepage />},
      { path: '/login', element: <LoginPage />},
      { path: '/signup', element: <SignupPage />},
    ],
  },  
])

function App() {
  return (<RouterProvider router={router} />)
}

export default App
