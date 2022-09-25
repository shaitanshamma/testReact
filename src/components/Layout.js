import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "./Header";

const Layout = ({chatList}) => {
    return (
        <>
            <Header chatList={chatList}/>
            <main>
                <Outlet/>
            </main>
        </>
    );
};

export default Layout;