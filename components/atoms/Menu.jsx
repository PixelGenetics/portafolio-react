import React from 'react'
import './styles/Menu.css'
import Dark_mode from '../organism/Dark_mode'

const Menu = () => {
return (
    <div id='contenedor_menu'>
        <div id='title'>
        <span id='title_kevin'>Kevin </span>
        <span id='title_borge'>Borge</span>
        </div>
    <ul id='menu'>
        <li>projects</li>
        <li>blog</li>
        <li>contact</li>
        <li><Dark_mode/></li>
    </ul>
    </div>
)
}

export default Menu
