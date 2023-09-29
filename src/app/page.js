'use client'
import { Fragment } from "react";
import Home from "./home/page";
import About from "./about/page";
import Resume from "./resume/page";
import Code from './code/page';
import Gallery from "@/components/simple/simple";
import ButtonAppBar from '../components/nav/nav';
import { NoSsr } from "@mui/material";
import {BlueDivider, PinkDivider, PurpleDivider, GreenDivider} from '../components/divider/divider'

function App(){

return(
    <Fragment>
        <NoSsr>
            <ButtonAppBar></ButtonAppBar>
                <Home></Home>
            <BlueDivider></BlueDivider>
                <About></About>
            <PinkDivider></PinkDivider>
            <Code></Code>
            <PurpleDivider></PurpleDivider>
                <Resume></Resume>
            <GreenDivider></GreenDivider>
                {/* <Contact></Contact> */}
        </NoSsr>
    </Fragment>

);
}


export default App