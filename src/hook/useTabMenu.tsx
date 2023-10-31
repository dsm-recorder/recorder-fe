import React, { useState } from 'react';
import styled from 'styled-components';

interface ITabMenuProps {
  tabMenuKey: number;
  children: React.ReactNode;
}

export const useTabMenu = (initialState: number, tabMenuArr: JSX.Element[]) => {
  const [tabState, setTabState] = useState(initialState);

  const TabMenuBox = ({ tabMenuKey, children }: ITabMenuProps) => {
    return (
      <_Wrapper
        $isActive={tabMenuKey === tabState}
        onClick={() => setTabState(tabMenuKey)}
      >
        <_Title $isActive={tabMenuKey === tabState}>{children}</_Title>
      </_Wrapper>
    );
  };

  return { TabMenuBox, TabMenuItem: tabMenuArr[tabState] };
};

const _Wrapper = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 50px;
  border-left: ${({ $isActive, theme }) =>
    $isActive && `3px solid ${theme.colors.green.normal.active}`};
  &:hover {
    background-color: ${({ theme }) => theme.colors.green.light.default};
  }
`;

const _Title = styled.div<{ $isActive: boolean }>`
  width: 160px;
  padding: 5px 10px;
  background-color: ${({ $isActive, theme }) =>
    $isActive && theme.colors.green.light.default};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.gray[100]};
  font-size: 20px;
  font-weight: 400;
`;
