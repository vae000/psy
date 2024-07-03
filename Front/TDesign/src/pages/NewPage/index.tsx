import React, { memo, useState } from 'react';
import { Button, Space } from 'tdesign-react';
import { DownloadIcon } from 'tdesign-icons-react';
import Style from './index.module.less';

import request from 'utils/request';

const getHealth = async ()=>{
  const result = await request.get('http://api.vipslib.com/acadmgr/api/health')
}

const MyComponent = () => {
  const ck2 = () => {
    console.log(getHealth())
  };

  return (
    <Space>
      <Button size='large' variant='outline' onClick={ck2} className={Style.bt}>
        ChatGPT <DownloadIcon />
      </Button>
    </Space>
  );
};

export default MyComponent;
