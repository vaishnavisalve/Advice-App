
 import React, {useState, useEffect} from 'react'
 import './Navbar.css'
 
 export default function Navbar() {
   const [toggleMenu, setToggleMenu] = useState(false)
   const [screenWidth, setScreenWidth] = useState(window.innerWidth)
 
 
   const toggleNav = () => {
     setToggleMenu(!toggleMenu)
   }
 
   useEffect(() => {
 
     const changeWidth = () => {
       setScreenWidth(window.innerWidth);
     }
 
     window.addEventListener('resize', changeWidth)
 
     return () => {
         window.removeEventListener('resize', changeWidth)
     }
 
   }, [])
 
   return (
     
     <nav>
       {(toggleMenu || screenWidth > 500) && (
        
       <ul className="list">
       <li className="items">
       <a href="https://www.linkedin.com/in/vaishnavi-salve-847389200" target="_blank" class="fa fa-linkedin"></a>
       </li>
       <li className="items"> <a href="https://github.com/vaishnavisalve" Target="_blank" class="fa fa-github"></a></li>
     </ul>
       )}
 
       <button onClick={toggleNav} className="btn"></button>
     </nav>
   )
 }