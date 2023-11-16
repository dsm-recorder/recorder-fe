import styled from 'styled-components';

export const BoxWrapper = styled.div`
  width: 100%;
  height: 490px;
  border: 1px solid #999999;
  border-radius: 10px;
  padding: 30px;
  gap: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const TodoWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.gray[70]};
  padding: 30px;
  box-shadow: 4px 4px 10.1px 0px rgba(0, 0, 0, 0.25);
`;

export const TodoCardWrapper = styled.div`
  width: 100%;
  min-height: 60px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.gray[10]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

export const TodoScroll = styled.div`
  gap: 30px;
  height: 420px;
  max-height: 420px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  background-color: ${({ theme }) => theme.colors.gray[70]};
`;
