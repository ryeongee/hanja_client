import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import '../style/Menu.css';

const Menu = () => {
    return (
        <div className="menu">
            <Navbar color="light" light expand="md">
            <NavbarBrand href="/">한자 학습 시스템</NavbarBrand>                        
                <Nav className="ml-auto" navbar>
                    <NavItem><NavLink href="/search">한자 검색</NavLink></NavItem>
                    <NavItem><NavLink href="/learn">한자 학습</NavLink></NavItem>
                    <NavItem><NavLink href="/game">한자 게임(빙고)</NavLink></NavItem>
                    <NavItem><NavLink href="/words">단어 학습</NavLink></NavItem>
                </Nav>              
            </Navbar>
        </div>
    );
};

export default Menu;