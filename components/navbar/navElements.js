import styled from 'styled-components';

export const Nav = styled.nav`
     // margin-top: -80px;
    max-width: auto;
    width: 1040px;
     // height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    margin: 0px 20px 0px 20px;
    background: transparent;
    z-index: 4;

    @media screen and ( max-width: 960px ){
        transition: 0.8s all ease;
        position: static;
     }
     @media screen and ( max-width: 768px ){
          transition: 0.8s all ease;
          margin: 0px 20px 0px 20px;
          width: auto;
     }

     @media screen and ( max-width: 375px ){
          transition: 0.8s all ease;
          margin: 0px 20px 0px 20px;
     }
     @media screen and ( max-width: 414px ){
          transition: 0.8s all ease;
          margin: 0px 20px 0px 20px;
     }
    

`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1040px;
//     padding: 0 24px;
    
    background: transparent;

    @media screen and ( max-width: 768px ){
     transition: 0.8s all ease;

     width: 768px;
  }

  }
     @media screen and ( max-width: 320px ){
     transition: 0.8s all ease;
     width: 320px;
  }
  @media screen and ( max-width: 414px ){
     transition: 0.8s all ease;
     width: 414px;
     }
  

`;

export const NavLogo = styled.div`
     color: #fff;
     justify-self: flex-start;
     cursor: pointer;
     font-size: 24px;
     display: flex;
     align-items: center;
     // margin-left: 24px;
     font-weight: bold;
     text-decoration: none;
     background: transparent;

     a{
          color: #ffff;
          text-decoration: none;
          background: transparent;

     }

`;


export const NavMenu = styled.ul`
     display: flex;
     align-items: right:
     text-align: center;
     font-size: 16px;
     background: transparent;

     @media screen and ( max-width: 768px ){
          transition: 0.8s all ease;
          width: auto;
     }
     @media screen and ( max-width: 320px ){
          transition: 0.8s all ease;
          width: auto;
     }
`;

export const NavItems = styled.div`
     height: 80px;
     align-items: center;
     background: transparent;
`;

export const NavLinks = styled.p`
     color: #ffff;
     display: flex;
     align-items: center;
     text-decoration: none;
     height: 100%;
     cursor: pointer;
     background: transparent;

     a{
          color: #ffff;
          // margin: 20px;
          text-decoration: none;
          background: transparent;

     }
`;