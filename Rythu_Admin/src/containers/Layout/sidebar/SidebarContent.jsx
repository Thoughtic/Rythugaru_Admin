import React from 'react';
import PropTypes from 'prop-types';
import { colorBorder, colorBackground, colorHover } from '@/utils/palette';
import { left } from '@/utils/directions';
import styled from 'styled-components';
import SidebarLink, { SidebarLinkTitle, SidebarNavLink } from './SidebarLink';
import SidebarCategory from './SidebarCategory';

const SidebarContent = ({
  onClick,
  collapse,
  changeToLight,
  changeToDark,
}) => (
  <SidebarContentWrap collapse={collapse}>
    <SidebarBlock collapse={collapse}>
      <SidebarLink title="Dashboard" icon="home" route="/pages/dashboard" onClick={onClick} />
    </SidebarBlock>

    <SidebarBlock collapse={collapse}>
      <SidebarLink title="Rythugaru" icon="user" route="/pages/rythugaru" onClick={onClick} />
    </SidebarBlock>

    <SidebarBlock collapse={collapse}>
      <SidebarLink title="Merchants" icon="users" route="/pages/merchants" onClick={onClick} />
    </SidebarBlock>

    <SidebarBlock collapse={collapse}>
      <SidebarLink title="Providers" icon="users" route="/pages/providers" onClick={onClick} />
    </SidebarBlock>

    <SidebarBlock collapse={collapse}>
      <SidebarLink title="ServicesRequests" icon="user" route="/pages/servicerequests" onClick={onClick} />
    </SidebarBlock>

    <SidebarBlock collapse={collapse}>
      <SidebarLink title="Franchises" icon="exit" route="/pages/franchises" onClick={onClick} />
    </SidebarBlock>

    <SidebarBlock collapse={collapse}>
      <SidebarLink title="Market Updates" icon="exit" route="/pages/marketupdates" onClick={onClick} />
    </SidebarBlock>

    <SidebarBlock collapse={collapse}>
      <SidebarLink title="CropInfo" icon="crop" route="/pages/cropinfo" onClick={onClick} />
    </SidebarBlock>

    <SidebarBlock collapse={collapse}>
      <SidebarLink title="Articles" icon="user" route="/pages/articles" onClick={onClick} />
    </SidebarBlock>

    <SidebarBlock collapse={collapse}>
      <SidebarLink title="News" icon="user" route="/pages/news" onClick={onClick} />
    </SidebarBlock>

    <SidebarBlock collapse={collapse}>
      <SidebarLink title="CustomerSupport" icon="user" route="/pages/customersupport" onClick={onClick} />
    </SidebarBlock>

    <SidebarBlock collapse={collapse}>
      <SidebarLink title="Report" icon="book" route="/pages/report" onClick={onClick} />
    </SidebarBlock>

    <SidebarBlock collapse={collapse}>
      <SidebarLink title="AdminUsers" icon="users" route="/pages/adminusers" onClick={onClick} />
    </SidebarBlock> 
  </SidebarContentWrap>
);

SidebarContent.propTypes = {
  onClick: PropTypes.func.isRequired,
  collapse: PropTypes.bool,
  changeToLight: PropTypes.func.isRequired,
  changeToDark: PropTypes.func.isRequired,
};

SidebarContent.defaultProps = {
  collapse: false,
};

export default SidebarContent;

// region STYLES

const SidebarContentWrap = styled.div`
  height: 100%;
  overflow: auto;
  padding-top: 0;
  
  & > div:last-child {
    width: 4px !important;

    div {
      transition: height 0.3s;
      opacity: 0.52;
    }
  }
  
  @media screen and (min-width: 576px) {
    padding-top: 15px;
    
    ${props => props.collapse && `
      width: 55px;
      overflow: visible !important;
      transition: width 0.3s;
    `}
  }
`;

const SidebarBlock = styled.ul`
  padding: 5px 0;
  border-bottom: 1px solid ${colorBorder};
  list-style-type: none;
  
  &:last-child {
    border: none;
  }
  
  @media screen and (min-width: 576px) {
    
    ${props => props.collapse && `
      & > li > a,
      & > li > button {
        overflow: hidden;
        width: 55px;
        background: ${colorBackground(props)};
        
        span:last-of-type {
          opacity: 0;
          transition: 0.3s;
        }
  
        ${SidebarLinkTitle} {
          position: absolute;
          width: 160px;
          ${left(props)}: 70px;
        }
  
        &:hover {
          background: ${colorHover(props)};
        }
      }
      
      & > li:hover > a,
      & > li:hover > button {
        width: 275px;
        
        span {
          opacity: 1;
        }
      }
    `}
  }
`;

// endregion
