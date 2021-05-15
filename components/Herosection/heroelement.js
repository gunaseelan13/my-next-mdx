import styled from 'styled-components';


export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 20px 0px 20px;
    margin-top: 60px;
    margin-bottom: 60px;
    
    background-color: #0000;

     @media screen and ( max-width: 375px ){
        transition: 0.8s all ease;
        margin: 0px 20px 0px 20px;
        margin-top: 36px;
        margin-bottom: 56px;

     }
     @media screen and ( max-width: 414px ){
        transition: 0.8s all ease;
        margin: 0px 20px 0px 20px;
        margin-top: 36px;
        margin-bottom: 56px;

     }
`;

export const HeroContent = styled.div`
    background: #0000;
    // padding: 0px 44px;
    width: 100%;
    max-width: 1100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: left;
    z-index: 2;
    background: transparent;
`;

export const HeroH1 = styled.h1`
    color: #ffff;
    font-size: 46px;
    text-align: left;
    font-weight: 600;
    letter-spacing: -1px;
    max-width: 800px;
    background: transparent;

    @media screen and (max-width: 768px) {
        font-size: 36px;
    }

    @media screen and (max-width: 414px) {
        transition: 0.8s all ease;
        font-size: 32px;
    }
    @media screen and ( max-width: 360px ){
        transition: 0.8s all ease;
        
        font-size: 24px;
     }
`;

export const HeroP1 = styled.p`
    color: #DDDCDB;
    font-size: 24px;
    opacity: .8;
    font-weight: 300;
    line-height: 38px;
    text-align: left;
    max-width: 600px;
    margin-top: 8px;
    background: transparent;

    @media screen and (max-width: 768px) {
        font-size: 20px;
        margin-top: 10px;
        line-height: 30px;
    }

    @media screen and (max-width: 414px) {
        transition: 0.8s all ease;
        margin-top: 8px;
        font-size: 16px;
        line-height: 24px;
    }
    @media screen and (max-width: 375px) {
        transition: 0.8s all ease;
        margin-top: 8px;
        font-size: 16px;
        line-height: 24px;
    }

`;

export const HeroBtnWrapper = styled.div `
    margin-top: 20px;
    flex-direction: column;
    align-item: left;
    background: transparent;
`;

export const Button = styled.button`
    border-radius: 6px;
    background: #515057;
    white-space: nowrap;
    padding: 14px 20px;
    color: inherit;
    outline: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    justify-content: left;
    flex-direction: row;
    align-item: flex-start;

    a {
        color: white;
        text-decoration: none;
        background: transparent;
    }
  

    &:hover {
        transition: 0.8s all ease;
        background: #3C3B41;  
    }
`;

export const h5 = styled.p`
    text-decoration: underline;
    background: transparent;
`;

