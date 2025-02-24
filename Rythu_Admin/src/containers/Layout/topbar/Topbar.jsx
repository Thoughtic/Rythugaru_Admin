import React from 'react';
import PropTypes from 'prop-types';
import TopbarSidebarButton from './TopbarSidebarButton';
import TopbarProfile from './TopbarProfile';
import {
  TopbarContainer,
  TopbarLeft,
  TopbarLogo,
  TopbarRight,
} from './BasicTopbarComponents';

const Topbar = ({ changeMobileSidebarVisibility, changeSidebarVisibility }) => (
  <TopbarContainer>
    <TopbarLeft>
      <TopbarSidebarButton
        onClickMobile={changeMobileSidebarVisibility}
        onClickDesktop={changeSidebarVisibility}
      />
      <TopbarLogo to="/" />
      <TopbarLogo to="/" style={{ marginLeft: '-150px' }}>  {/* Added marginLeft */}
        <img src="/img/lOGO.png" alt="logo" style={{ height: '45px' }} />
      </TopbarLogo>
    </TopbarLeft>
    <TopbarRight>
      <TopbarProfile />
    </TopbarRight>
  </TopbarContainer>
);

Topbar.propTypes = {
  changeMobileSidebarVisibility: PropTypes.func.isRequired,
  changeSidebarVisibility: PropTypes.func.isRequired,
};

export default Topbar;
