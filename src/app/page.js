'use client'
import { Fragment } from "react";
import Home from "./home/page";
import Gallery from "@/components/simple/simple";
import ButtonAppBar from '../components/nav/nav';
import { NoSsr } from "@mui/material";

function App(){

return(
    <Fragment>
        <NoSsr>
            <ButtonAppBar></ButtonAppBar>
            <Home></Home>
        </NoSsr>
    </Fragment>

);
}


export default App