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
border: 2px solid blue;
justify-content: center;
display: flex;
align-items: end;
`

const Image = styled.img`
height: 80px;
`

const NavMenu = styled.nav`
display: flex;
margin-left: 50px;
width: 72%;
font-size: 25px;
  a {
    font-family: 'Playfair Display', serif;
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
  font-size: 18px;
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
  border: 2px solid black;
  right: 10%;
  padding: 16px;
  a{
  display: block;
  margin-bottom: 10px;
  &:hover {
  display: inline-block;
  width: 100px;
  height: 40px;
  position: relative;
  background: red;
  &:hover:after{
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-left: 20px solid white;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  }
   &:hover:before{
  content: "";
  position: absolute;
  right: -20px;
  bottom: 0;
  width: 0;
  height: 0;
  border-left: 20px solid red;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  }
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
  width:150px;
  flex-direction: column;
  text-align: left;
  }
}
`