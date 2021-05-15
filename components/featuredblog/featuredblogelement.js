import styled from 'styled-components';
import Link from 'next/link'


export const FeaturedContainer = styled.div`
    width: 100%;
    display: grid;
    padding: 20px 10px;
    justify-content: center;
    grid-template-columns: repeat(auto-fit,minmax(380px,1fr));
    grid-gap: 10px;

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(auto-fit,minmax(300px,1fr));

    }
    @media screen and (max-width: 320px) {
        padding: 10px 5px;
        grid-template-columns: repeat(auto-fit,minmax(320px,1fr));

    }
`;

export const FeaturedCard = styled.div`
    
    text-align: left;
    color: inherit;
    width: 460px;
    padding: 0px 40px;
    text-decoration: none;
    transition: color 0.15s ease, border-color 0.15s ease;

    @media screen and (max-width: 768px) {
        width: 300px;

    }
    @media screen and (max-width: 900px) {
        width: 400px;

    }
    @media screen and (max-width: 320px) {
        width: 240px;
    }
    
    &:hover {
        cursor: pointer;

    }
`;

export const FeaturedHeader = styled.div`
    color: #F4F4F4;
    font-size: 22px;
    opacity: 1;
    text-align: left;
    font-weight: 600;
    padding: 0px 44px;
    letter-spacing: 0.01em;
    background: transparent;

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
    @media screen and (max-width: 320px) {
        font-size: 16px;
    }
`;

export const PostTitle = styled.div`
    color: #F4F4F4;
    font-size: 18px;
    text-align: left;
    font-weight: 400;
    padding: 8px 0px;
    background: transparent;
    
    &:hover {
        text-decoration: underline; 
        transition: 0.8s all ease;
        cursor: pointer;

    }
    
    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
    @media screen and (max-width: 320px) {
        font-size: 16px;
    }
`;