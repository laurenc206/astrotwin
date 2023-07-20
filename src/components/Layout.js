import { Outlet } from 'react-router-dom';
import '../css/fonts.css';

const Layout = () => {
    return (
        <main>

            <Outlet/>
        </main>   
    );
};

export default Layout;
