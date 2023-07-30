import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Router from '../../routes/Router';
import { useLocation } from 'react-router-dom';
import AdminNav from '../../admin/AdminNav.jsx'



const Layout = () => {
    const location = useLocation()

    return (
        <>
            {/* {
                location.pathname.startsWith('/dashboard') ? <AdminNav /> : <Header />
            } */}
            <Header />
            <div>
                <Router />
            </div>
            <Footer />
        </>

    );
};

export default Layout;