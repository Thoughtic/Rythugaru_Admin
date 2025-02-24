import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from 'mdi-react/FacebookIcon';
import GooglePlusIcon from 'mdi-react/GooglePlusIcon';
import {
  AccountCard,
  AccountContent,
  AccountHead,
  AccountLogo,
  AccountLogoAccent,
  AccountOr,
  AccountSocial,
  AccountSocialButtonFacebook,
  AccountSocialButtonGoogle,
  AccountTitle,
  AccountWrap,
} from '@/shared/components/account/AccountElements';
import LogInForm from './components/LogInForm';

const LogIn = () => (
  <AccountWrap>
    <AccountContent>
      <AccountCard>
        <AccountHead>
          <AccountTitle>Welcome to
            <AccountLogo> Rythu
              <AccountLogoAccent>Garu</AccountLogoAccent>
            </AccountLogo>
          </AccountTitle>
          <h4 className="subhead">Login </h4>
        </AccountHead>
        <LogInForm onSubmit={() => {}} />
       
      </AccountCard>
    </AccountContent>
  </AccountWrap>
);

export default LogIn;
