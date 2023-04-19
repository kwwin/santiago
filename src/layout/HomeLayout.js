import React from 'react'
import { Button } from '@mui/material'
import {Outlet} from 'react-router-dom'
import Landing from '../landing.jpg'
import {  useNavigate } from "react-router-dom";

const HomeLayout = () => {
    const navigate = useNavigate()
    const Nav = () => {
        return (
            <>
                <nav style={{display: "flex", justifyContent: "center"}}>
                    <Button onClick={() => navigate('/')} style={{color: "black"}}>Home</Button>
                    <Button onClick={() => navigate('/digiposter')} style={{color: "black"}}>Poster</Button>
                    <Button onClick={() => navigate('/book')} style={{color: "black"}}>Book</Button>
                    <Button onClick={() => navigate('/events')} style={{color: "black"}}>Events</Button>
                </nav> 
                <header className="App-header ">
                <img src={Landing} alt="landing" className="image-size" style={{width: '100%', height: '270px', marginBottom: '50px'}} />

                </header>

                {/* ito yung nag ddisplay nung children */}
                <Outlet/>
            </>
        )
    }
  return (
    <div>
        <Nav/>
    </div>
  )
}

export default HomeLayout