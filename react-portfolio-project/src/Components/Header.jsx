import React from 'react'
import Nav from './Nav'


const Header = ({ currentPage, handlePageChange }) => {
    console.log(currentPage)
    return (
        <header>
            <h1>BRIAN AHLERS HOMEPAGE</h1>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    )
}

export default Header;