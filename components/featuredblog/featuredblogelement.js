import styled from 'styled-components';
import Link from 'next/link'


export const FeaturedContainer = styled.div`
    width: 100%;
    display: grid;
    padding: 20px 10px;
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    grid-gap: 10px;
`;

export const FeaturedCard = styled.div`
    padding: 20px;
    text-align: left;
    color: inherit;
    width: 460px;
    padding: 0px 30px;
    text-decoration: none;
    
    transition: color 0.15s ease, border-color 0.15s ease;
    
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
`;