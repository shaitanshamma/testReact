import React from 'react';
import CustomLink from "./CustomLink";

const Header = ({chatList}) => {
    return (
        <header>
            <CustomLink to={"/"}>Home </CustomLink>
            <CustomLink to={"/profile"}>Profile </CustomLink>
            {chatList.map((e)=>{
                return <CustomLink key={e.id} to={`/${e.name}`}>{e.name} </CustomLink>
            })}
        </header>
    );
};

export default Header;