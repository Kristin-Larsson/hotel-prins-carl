import React from 'react';
import Logo from '../images/prinscarl_logo.png'
import styled from 'styled-components'

const Header = () => {

    return (
    <>
    <Wrapper>
    <Image src={Logo} alt="Prins Carl Logo" />
    <NavMenu>
    <input type="checkbox" id="checkbox_toggle" />
    <label for="checkbox_toggle" className="hamburger">&#9776;</label>
    <div className="menu">
      <a href="#">About us</a>
      <a href="#">Events</a>
      <a href="#">info</a>
      <a href="/Summary">Book</a>
    </div>
    </NavMenu>
    </Wrapper>
    </>
    )
}

export default Header;

const Wrapper = styled.div`
border: 2px solid purple;
display: flex;
width: 80%;
margin-left: 10%;
align-items: end;
`

const Image = styled.img`
height: 80px;
`

const NavMenu = styled.nav`
border: 2px solid green;
display: flex;
margin-left: 50px;
width: 72%;
font-size: 25px;
  a {
    margin-left: 20px;
    text-decoration: none;
    color: black;
  &:hover {
    color: grey;
    }
  }
.hamburger {
  width: 50px;
  display: none;
  font-size: 24px;
  user-select: none;
  }
  input[type=checkbox] {
  display: none;
  }
@media (max-width: 750px) {
  .menu {
  display: none;
  position: absolute;
  background-color: #FCF8E3;
  right: 10%;
  padding: 16px;
  a{
    display: block;
    margin-bottom: 10px;
  &:hover {
  display: inline-block;
  border: 2px solid black;
  }
  }

  }
 .hamburger {
  display: block;
  position: absolute;
  top: 40px;
  right:10%
  }
  input[type=checkbox]:checked ~ .menu{
  display: block;
  position: absolute;
  top: 80px;
  height: 200px;
  flex-direction: column;
  text-align: left;
  }
}
`