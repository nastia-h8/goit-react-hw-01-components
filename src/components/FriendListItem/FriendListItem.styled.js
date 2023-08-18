import styled from 'styled-components';

export const ListItem = styled.li`
  position: relative;
  width: 240px;
  padding: ${p => p.theme.spacing(3)};
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(3)};
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: ${p => p.theme.shadow};

  background-color: ${p => p.theme.colors.bgc};
`;

export const Status = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 12px;
  height: 12px;
  background-color: ${p => (p.children ? 'green' : 'red')};
  border-radius: ${p => p.theme.radii.circle};
`;
