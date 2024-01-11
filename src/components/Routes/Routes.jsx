import React from "react";
import {Route, Routes} from "react-router-dom";
import Header from "../Header/Header";

const appRoutes = () => {
    return (
        <Routes>
            <Route index element={<Header/>}/>
        </Routes>
    )
}

export default appRoutes;