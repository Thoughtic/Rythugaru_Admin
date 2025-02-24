import React from 'react';
// import { Link } from 'react-router-dom';
// import FacebookIcon from 'mdi-react/FacebookIcon';
// import GooglePlusIcon from 'mdi-react/GooglePlusIcon';
import {
  AccountCard,
  AccountContent,
  AccountHead,
  AccountLogo,
  AccountLogoAccent,
  // AccountOr,
  // AccountSocial,
  // AccountSocialButtonFacebook,
  // AccountSocialButtonGoogle,
  AccountTitle,
  AccountWrap,
} from '@/shared/components/account/AccountElements';
import LogInForm from './components/LogInForm';

const LogIn = () => (
  <AccountWrap>
    <AccountContent>
      <AccountCard>
        {/* Logo Section */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <img
            src="/img/Logo_eng.png"
            alt="Company Logo"
            style={{ height: '100px', maxWidth: '100%', objectFit: 'contain' }}
          />
        </div>
        <AccountHead>
          <AccountTitle>Welcome to
            <AccountLogo> Rythu
              <AccountLogoAccent>Garu</AccountLogoAccent>
            </AccountLogo>
          </AccountTitle>
          <h4 className="subhead">Login </h4>
        </AccountHead>
        <LogInForm onSubmit={() => { }} />

      </AccountCard>
    </AccountContent>
  </AccountWrap>
);

export default LogIn;
