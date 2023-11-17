import styled from 'styled-components';

export const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;

export const PRModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 600px;
  min-height: 600px;
  width: 600px;
  height: 600px;
  background-color: ${({ theme }) => theme.colors.gray[10]};
  border-radius: 10px;
  padding: 30px;
`;

export const ModalHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  height: 80px;
  padding: 15px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray[70]}`};
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
  background-color: ${({ theme }) => theme.colors.gray[70]};
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const ModalLabel = styled.p`
  font-size: 22px;
  font-weight: 600;
`;

export const Description = styled.div`
  width: 100%;
  height: 170px;
`;

export const ModalMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
  height: 100%;
  padding: 15px;
  overflow-y: auto;
`;
