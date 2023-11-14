import styled from 'styled-components';

export const PRModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 600px;
  background-color: ${({ theme }) => theme.colors.gray[10]};
  border-radius: 10px;
`;

export const ModalHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 30px;
  border-bottom: 1px solid #999999;
`;

export const TypeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: auto;
  padding: 15px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.gray[10]};
  background-color: ${({ theme }) => theme.colors.green.light.active};
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const ModalTitle = styled.p`
  font-size: 22px;
  font-weight: 400;
`;
