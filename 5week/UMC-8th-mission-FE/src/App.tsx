import { RouteObject, RouterProvider, createBrowserRouter} from "react-router-dom";
import "./App.css";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import HomeLayout from "./assets/layouts/HomeLayout";
import Homepage from "./pages/Homepage";
import SignupPage from "./pages/SignupPage";
import Mypage from "./pages/Mypage";
import { AuthProvider } from "./context/AuthContext";
import ProtectedLayout from "./assets/layouts/ProtectedLayout";

// 1. 홈페이지
// 2. 로그인 페이지
// 3. 회원가입 페이지

const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {index: true, element: <Homepage />},
      {path: 'login', element: <LoginPage />},
      {path: 'signup', element: <SignupPage />},
      {path: "v1/auth/google/login" },
    ],
  },
];

//protectedRoutes
const protectedRoutes: RouteObject[] = [
  {
    path: "/",
    element: <ProtectedLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: 'my',
        element: <Mypage />,
      }
    ]
  },
];

const router = createBrowserRouter([...publicRoutes, ...protectedRoutes]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  )
}

export default App;