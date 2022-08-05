import React, {useState} from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars)

  return (
    <Container>

      <a>
        <img class = "image" src = "/images/tesla1.svg" alt="" />
      </a>

      <Menu>
        {cars && cars.map((car, index) =>(
          <a key= {index}  href = "#">{car}</a>
        ))}
      </Menu>

      <RightMenu>
        <a href = "#"> Shop</a>
        <a href = "#"> Tesla Account</a>
        <CustomMenu  onClick= {()=> setBurgerStatus(true)}/>
      </RightMenu>

      <BurgerNav show ={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick= {()=> setBurgerStatus(false )}/>
        </CloseWrapper>
        {cars && cars.map((car, index) =>(
          <li key= {index} ><a href= "#">{car}</a></li>
        ))}
        <li><a href= "#">Model Solar Roof</a></li>
        <li><a href= "#">Model Solar Panels</a></li>
        <li><a href= "#">Existing Inventory</a></li>
        <li><a href= "#">Used Inventory</a></li>
        <li><a href= "#">Trade-in</a></li>
        <li><a href= "#">Test Drive</a></li>
        <li><a href= "#">Powerwall</a></li>
        <li><a href= "#">Commercial Energy</a></li>
        <li><a href= "#">Utilities</a></li>
        <li><a href= "#">Charging</a></li>
        <li><a href= "#">Find Us</a></li>
        {/* <li><a href= "#">Support</a></li>
        <li><a href= "#">Investor Relations</a></li> */}



      </BurgerNav>

    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* The CSS justify-content property defines 
  how the browser distributes space between 
  and around content items along the 
  main-axis of a flex container, and the inline axis 
  of a grid container. */
 .image {
   height: 55px;
   width: 140px;

 }
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  /* If an element has flex: 1 ,
  this means the size of all of the other elements 
  will have the same width as their content, 
  but the element with flex: 1 will have the 
  remaining full space given to it. */

  a{
    font-weight: 600px;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap; 
    :hover{
      background-color: #cdd1d4;
      border-radius: 10px;
      padding: 8px 10px;
      opacity: 0.74;
    } 
  }

  @media(max-width: 768px)
  {
    display: none;
  }
`
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a{
    font-weight: 600px;
    text-transform: uppercase;
    margin-right: 10px;
    :hover{
      background-color: #cdd1d4;
      border-radius: 10px;
      padding: 8px 10px;
      opacity: 0.74;
    }
  } 
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
  position: fixed; /*  always on the top no matter what happen */
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  /* opacity: 0.6; */
  width: 300px;
  z-index: 100;
  /* The z-index property specifies the stack order of an element.
  An element with greater stack order is always 
  in front of an element with a lower stack order. */

  /* The stacking context is a three-dimensional 
  conceptualization of HTML elements along an imaginary 
  z-axis relative to the user, who is assumed to be 
  facing the viewport or the webpage. HTML elements occupy 
  this space in priority order based on element attributes. */

  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align:start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  /* The translateX() CSS function repositions an element horizontally
  on the 2D plane. Its result is a <transform-function> data type. */

  transition: transform 0.2s ease-in-out;
  li{
    padding: 15px 0;
    border-bottom: 1px solid rgba( 0, 0, 0, 0.2);

    a{
      font-weight: 300;
      :hover{
      background-color: #cdd1d4;
      border-radius: 10px;
      padding: 8px 10px;
      opacity: 0.74;
    }
    }
    
  }
`

const CustomClose= styled(CloseIcon)`
  cursor: pointer;
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

`
