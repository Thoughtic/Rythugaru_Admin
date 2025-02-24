import React from 'react';
import styled from 'styled-components';
import { colorBackground, colorText, colorGray } from '@/utils/palette';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Terms & Conditions</FooterLink>
        <Copyright>© {currentYear} Rythugaru. All rights reserved.</Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

// Styled Components for Footer

const FooterContainer = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  bottom: 0;
  min-height: 60px;
  z-index: 101;
  box-shadow: 0 -2px 15px 0 rgba(0, 0, 0, 0.05);
  background: ${colorBackground};
  padding: 0 15px;
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; /* Ensure items wrap on smaller screens */
`;

const FooterLink = styled.a`
  font-size: 14px;
  color: ${colorGray};
  text-decoration: none;
  margin-left: 15px;

  &:hover {
    color: ${colorText};
  }

  @media screen and (max-width: 576px) {
    margin-left: 10px;
  }
`;

const Copyright = styled.span`
  font-size: 12px;
  margin-left: 50px;
  text-align: right;
  color: ${colorGray};

  @media screen and (max-width: 576px) {
    margin-left: 15px;
  }
`;
