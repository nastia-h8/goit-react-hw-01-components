import styled from 'styled-components';
import { getRandomHexColor } from '../../utils/getRandomHexColor';

export const Section = styled.section`
  margin: 0 auto;
  width: 360px;
  text-align: center;
  overflow: hidden;
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: ${p => p.theme.shadow};
  background-color: ${p => p.theme.colors.bgc};
`;

export const Title = styled.h2`
  padding-top: ${p => p.theme.spacing(3)};
  padding-bottom: ${p => p.theme.spacing(3)};
  text-transform: uppercase;
  font-size: 20px;
`;

export const Stat = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${p => p.theme.colors.light};
`;

export const StatItem = styled.li`
  padding-top: ${p => p.theme.spacing(2)};
  padding-bottom: ${p => p.theme.spacing(2)};
  flex-basis: calc(100% / 5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.spacing(1)};

  background-color: ${getRandomHexColor};
`;

export const StatLabel = styled.span`
  font-size: 14px;
`;

export const StatValue = styled.span`
  font-weight: 600;
`;
