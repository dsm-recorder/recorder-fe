import styled from 'styled-components';

export const RepositoryCard = styled.label<{ isSelected: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 30px;
  border: 1px solid ${({ theme }) => theme.colors.gray[50]};
  border-radius: 10px;
  align-items: center;
  width: 473px;
  height: 120px;
  background-color: ${({ isSelected, theme }) =>
    isSelected && theme.colors.green.light.hover};
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export const Description = styled.p`
  width: 300px;
  font-size: 16px;
  white-space: nowrap;
  vertical-align: bottom;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Language = styled.p`
  font-size: 16px;
`;
