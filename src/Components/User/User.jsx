import React from "react";
import Feed from "../Feed/Feed";
import UserStats from "./UserStats";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import { Routes, Route } from 'react-router-dom';

const User = () => {
    return (
        <section className="container">
            <UserHeader />
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="postar" element={<UserPhotoPost />} />
                <Route path="estatisticas" element={<UserStats />} />
            </Routes>
        </section>
    )
}

export default User;