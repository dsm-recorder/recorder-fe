import styled from 'styled-components';

export const RepositoryCard = styled.label<{ isSelected: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 60px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  align-items: center;
  width: 700px;
  min-height: 120px;
  background-color: ${({ isSelected, theme }) =>
    isSelected && theme.colors.green.light.hover};
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.gray[100]};
  font-size: 20px;
  font-weight: 600;
`;

export const Description = styled.p`
  width: 600px;
  color: #8f8e8e;
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
  white-space: nowrap;
  height: 15px;
  vertical-align: bottom;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Language = styled.p`
  height: 20px;
  font-size: 16px;
`;
