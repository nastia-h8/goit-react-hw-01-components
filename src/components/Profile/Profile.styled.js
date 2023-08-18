import styled from 'styled-components';

export const Card = styled.div`
  margin: 0 auto;
  width: 260px;
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: ${p => p.theme.shadow};
  overflow: hidden;
`;

export const Meta = styled.div`
  padding-top: ${p => p.theme.spacing(3)};
  padding-bottom: ${p => p.theme.spacing(3)};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing(1)};

  color: ${p => p.theme.colors.secondary};
`;

export const Thumb = styled.div`
  height: 200px;
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 160px;
    width: 160px;
    border-radius: ${p => p.theme.radii.circle};
    border: 1px solid ${p => p.theme.colors.border};
    object-fit: cover;
  }
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 600;

  color: ${p => p.theme.colors.primary};
`;

export const Stat = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  border-top: 1px solid ${p => p.theme.colors.border};

  li:not(:last-child) {
    border-right: 1px solid ${p => p.theme.colors.border};
  }
`;

export const StatItem = styled.li`
  padding-top: ${p => p.theme.spacing(3)};
  padding-bottom: ${p => p.theme.spacing(3)};
  flex-basis: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.spacing(1)};

  background-color: ${p => p.theme.colors.bgc};
`;

export const StatLabel = styled.span`
  font-size: 14px;
`;

export const StatValue = styled.span`
  font-weight: 600;
`;
