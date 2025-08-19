import UserCard from "../../components/UserCard";
import Tabs from "../../components/Tabs";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function UserPage () {
    return (
        <div className="user-page">
            <UserCard/>

        <div className="tabs">
            <Tabs/>
        </div>
        </div>
    )
}