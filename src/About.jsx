import React from 'react'
import { NavLink } from 'react-router-dom';
import web from '../src/images/swdeveloper.jpg';
import Common from './Common';
const About=()=>{
    return(
        <>
       <Common name='Welcome to ' imgsrc={web} visit="/contact" btname="Contact now"/>
        </>
    )
}

export default About;