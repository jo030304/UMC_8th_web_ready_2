import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";

const HomeLayout = () => {
    return (
    <div className='h-dvh flex flex-col'>
        <NavBar />
        <main className='flex-1'>
            <Outlet />
        </main>
        <footer>This is footer</footer>
    </div>
    );
};

export default HomeLayout;