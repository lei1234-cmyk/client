import React from 'react';
import { Button, ConfigProvider } from 'antd';
import dbConnect from '../lib/dbConnect'
import Pet, { Pets } from '../models/Pet'

import theme from './theme/themeConfig';

const HomePage = () => {

  return <ConfigProvider theme={theme}>
    <div className="App">
      <Button type="primary">Button</Button>
    </div>
  </ConfigProvider>
};

export default HomePage;
