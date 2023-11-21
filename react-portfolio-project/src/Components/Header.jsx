import React from 'react'
import Nav from './Nav'


const Header = ({ currentPage, handlePageChange }) => {
    console.log(currentPage)
    return (
        <header>
            <h1>Brian Ahlers</h1>
            <p>Homepage</p>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    )
}

export default Header;