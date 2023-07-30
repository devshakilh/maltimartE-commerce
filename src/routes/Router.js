import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../page/Home';
import Shop from '../page/Shop';
import ProductDetails from '../page/ProductDetails';
import Cart from '../page/Cart';
import Checkout from '../page/Checkout';
import Login from '../page/Login';
import SignUp from '../page/SignUp';
import ProtectedRoute from './ProtectedRoute';
import { AllProducts } from '../admin/AllProducts';
import AddProducts from '../admin/AddProducts';
import Dashboard from '../admin/AddProducts'



const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='home' element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='shop/:id' element={<ProductDetails />} />
            <Route path='cart' element={<Cart />} />

            <Route path='/*' element={<ProtectedRoute />}>
                <Route path='checkout' element={<Checkout />}></Route>
                <Route path='dashboard' element={<Dashboard />}></Route>
                <Route path='dashboard/all-products' element={<AllProducts />}></Route>
                <Route path='dashboard/add-products' element={<AddProducts />}></Route>

            </Route>



            <Route path='login' element={<Login />} />
            <Route path='signup' element={<SignUp />} />
        </Routes>
    );
};

export default Router;