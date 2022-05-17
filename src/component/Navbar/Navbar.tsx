import React, { useState } from 'react';
import { List, X } from 'phosphor-react';

import Logo from '../../assets/images/logo.png'
import './navbar.scss'

export function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const Menu = () => (
        <>
            <p><a href='#'>Albúns</a></p>
            <p><a href='#'>Faixas</a></p>
            <p><a href='#'>Código</a></p>
        </>
    )

    return (
        <div className='navbar'>
            <div className='navbar-links'>
                <div className='navbar-links_logo'>
                    <img src={Logo} alt="" />
                </div>
                <div className='navbar-links_container'>
                    <Menu />
                </div>
            </div>
            <div className='navbar-menu'>
                {toggleMenu
                    ? < X size={40} onClick={() => setToggleMenu(false)} />
                    : < List size={40} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="navbar-menu_container scale-up-center">
                        <div className='navbar-menu_container-links'>
                            <Menu />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}