import React from 'react';

import Header from '../../common/Header';
// import Buttons from './Buttons/Buttons';
import Content from './Content/Content';
import './Main.scss';

const Main = () => {
  return (
    <div className="Main">
      <Header />
      {/* <Buttons /> */}
      <Content />
    </div>
  );
};

export default Main;
