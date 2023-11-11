import styled from 'styled-components';

export const _Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-width: 1000px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.gray[10]};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0px 200px;
  z-index: 99;
`;

export const _Logo = styled.div`
  cursor: pointer;
  width: 150px;
  height: 50px;
  font-size: 28px;
  text-align: center;
  line-height: 60px;
`;

export const _TabMenuWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 20px;
  font-weight: 600;
`;

export const _BAR = styled.div`
  position: absolute;
  bottom: 0;
  left: calc(50% - 25px);
  width: 50px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
`;

export const _LoginWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 180px;
  height: 50px;
  border-radius: 5px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[20]};
  }
`;

export const _Login = styled.div`
  height: 20px;
  font-size: 20px;
`;

export const _UserImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 18px;
`;

export const _UserName = styled.div`
  font-size: 20px;
`;
