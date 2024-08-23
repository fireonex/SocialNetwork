import React from 'react';
import {Flex, Spin} from 'antd';
import styled from "styled-components";
import {Theme} from "../../styles";

const contentStyle: React.CSSProperties = {
    padding: 50,
    background: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 4,
};

const CustomSpin = styled(Spin)`
  .ant-spin-dot {
    font-size: 30px; 
    color: ${Theme.colors.DarkGreen}; 
  }

  .ant-spin-text {
    color: ${Theme.colors.DarkGreen}; 
    font-size: 18px; 
  }
`;

const content = <div style={contentStyle}/>;

export const Preloader = () => (
        <Flex gap="middle">
            <CustomSpin tip="Loading" size="large">
                {content}
            </CustomSpin>
        </Flex>
);

