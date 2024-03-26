import React from 'react';
import Navbar from './Universal/Navbar';
import Footer from './Universal/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='border border-inherit'>
            <Outlet></Outlet>
            </div>
        
            <Footer></Footer>
        </div>
    );
};

export default Root;