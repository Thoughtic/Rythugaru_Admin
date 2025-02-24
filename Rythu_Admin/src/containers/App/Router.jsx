import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { colorBackgroundBody } from '@/utils/palette';
import { paddingLeft } from '@/utils/directions';
import Layout from '../Layout/index';
import MainWrapper from './MainWrapper';

import LogIn from '../LogIn/index';
import ExamplePageOne from '../Example/index';
import ExamplePageTwo from '../ExampleTwo/index';
import Report from '../pages/Report';
import AdminUsers from '../pages/AdminUsers';
import Articles from '../pages/Articles';
import CropInfo from '../pages/CropInfo';
import CustomerSupport from '../pages/CustomerSupport';
import Dashboard from '../pages/Dashboard';
import Franchises from '../pages/Franchises';
import MarketUpdates from '../pages/MarketUpdates';
import Merchants from '../pages/Merchants';
import News from '../pages/News';
import Providers from '../pages/Providers';
import Rythugaru from '../pages/Rythugaru';
import ServiceRequests from '../pages/ServiceRequests';

const Pages = () => (
  <Switch>
    <Route path="/pages/one" component={ExamplePageOne} />
    <Route path="/pages/two" component={ExamplePageTwo} />
    <Route path="/pages/report" component={Report} />
    <Route path="/pages/adminusers" component={AdminUsers} />
    <Route path="/pages/articles" component={Articles} />
    <Route path="/pages/cropinfo" component={CropInfo} />
    <Route path="/pages/customersupport" component={CustomerSupport} />
    <Route path="/pages/dashboard" component={Dashboard} />
    <Route path="/pages/franchises" component={Franchises} />
    <Route path="/pages/marketupdates" component={MarketUpdates} />
    <Route path="/pages/merchants" component={Merchants} />
    <Route path="/pages/news" component={News} />
    <Route path="/pages/providers" component={Providers} />
    <Route path="/pages/rythugaru" component={Rythugaru} />
    <Route path="/pages/servicerequests" component={ServiceRequests} />
  </Switch>
);

const wrappedRoutes = () => (
  <div>
    <Layout />
    <ContainerWrap>
      <Route path="/pages" component={Pages} />
    </ContainerWrap>
  </div>
);

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/log_in" component={LogIn} />
        <Route path="/" component={wrappedRoutes} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;

// region STYLES

const ContainerWrap = styled.div`
  padding-top: 90px;
  min-height: 100vh;
  transition: padding-left 0.3s;

  ${paddingLeft}: 0;

  background: ${colorBackgroundBody};

  @media screen and (min-width: 576px) {
    ${paddingLeft}: 250px;
  }

  @media screen and (max-width: 576px) {
    padding-top: 150px;
  }
`;

// endregion
