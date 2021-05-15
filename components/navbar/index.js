import React from 'react';
import Link from 'next/link'
import { Nav,NavbarContainer,NavLogo, NavMenu,NavItems,NavLinks } from "./navElements";
  
const Navbar = () => {
//   const [scrollNav, setScrollNav] = useState(false)

//   const changeNav = () => {
//     if(window.scrollY >= 1000) {
//       setScrollNav(false)
//     } else {
//       setScrollNav(true)
//     }
//   }

//   useEffect(() => {
//     window.addEventListener('scroll', changeNav);
//   },[] );
//   scrollNav={scrollNav}

    return (
      <>
        <Nav>
          <NavbarContainer>
            <NavLogo>
            <Link href={"/"}><a>GS</a></Link>
            </NavLogo>
            <NavMenu>
              <NavItems>
                <NavLinks>
                  <Link href={"https://dribbble.com/gunaseelan"}><a>Work</a></Link>
                  {/* <Link href={"/mywriting"}><a>Writing</a></Link> */}
                </NavLinks>
              </NavItems>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </>
    );
  };
  
  export default Navbar;