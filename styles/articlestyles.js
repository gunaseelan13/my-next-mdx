import styled from 'styled-components';

export const ArticleContainer = styled.div`
    max-width: 1040px;
    height: auto;
    margin: 80px auto 6rem;
    color: white;
`;

export const ContentSection = styled.div`
    margin: 160px 50px 75px ;
`;

export const ContentBack = styled.div`
    margin: 20px 0px;
`;

export const ContentTitle = styled.div`
    color: #ffff;
    font-size: 46px;
    text-align: left;
    font-weight: 600;
    background: transparent;

    @media screen and (max-width: 768px) {
        font-size: 32px;
    }

    @media screen and (max-width: 480px) {
        transition: 0.8s all ease;
        font-size: 28px;
    }
`;

export const ContentArticle = styled.div`
    color: white;
    font-size: 20px;
    margin: 40px 0px;
    max-width: 1040px;

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }

    @media screen and (max-width: 480px) {
        transition: 0.8s all ease;
        font-size: 12px;
    }
`;