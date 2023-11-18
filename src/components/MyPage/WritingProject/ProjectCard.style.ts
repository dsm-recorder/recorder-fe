import styled from 'styled-components';

export const _Wrapper = styled.div`
  cursor: pointer;
  position: relative;
  width: 278px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const _IsPublishedText = styled.div`
  position: absolute;
  top: 13px;
  left: 20px;
  font-size: 16px;
  font-weight: 700;
`;

export const _ProjectImg = styled.img`
  width: 100%;
  height: 157px;
  border-radius: 10px 10px 0px 0px;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  object-fit: cover;
`;

export const _Title = styled.div`
  width: 135px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 24px;
  font-weight: 700;
`;

export const _TEXT = styled.div`
  font-size: 14px;
  font-weight: 400;
`;
