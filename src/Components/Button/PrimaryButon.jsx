import React from "react";
import { Button, Dropdown, Flex } from 'antd';
const onMenuClick = (e) => {
    console.log('click', e);
  };

function PrimaryButon({title,typecolor}) {
  return <Button onClick={onclick} type={typecolor}>{title}</Button>;
}

export default PrimaryButon;
