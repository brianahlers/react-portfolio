import React from 'react'
import Nav from './Nav'


const Header = ({ currentPage, handlePageChange }) => {
    console.log(currentPage)
    return (
        <header>
            <h1>put a pic here</h1>
            <p>put a description here</p>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    )
}

export default Header;