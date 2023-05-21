import './index.scss';
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
    <div className='App'>
        <Sidebar />
        <div className='page'>
            
            <Outlet />
            <footer className='footer'>
                <span>
                Built and coded with 💛 by 
                <a href="https://github.com/eliseflaneuse" target="_blank" rel="noreferrer"> Elise Flaneuse </a>
                / @ 2023
                </span>
            </footer>
        </div>
    </div>
    )
}

export default Layout;