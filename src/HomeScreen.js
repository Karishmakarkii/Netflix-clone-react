import React from 'react'
import Banner from './Banner'
import "./HomeScreen.css"
import Nav from './Nav'

export default function HomeScreen() {
    return (
        <div className="homeScreen">
            {/* Navbar */}
            <Nav />
            
            {/* Banner */}
            <Banner />

            {/* Row */}
            
        </div>
    )
}
