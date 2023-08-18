import styled from 'styled-components';

export const Table = styled.table`
  width: 400px;
  margin: 0 auto;
`;

export const Head = styled.thead`
  th {
    width: calc(100% / 3);
    padding-top: ${p => p.theme.spacing(2)};
    padding-bottom: ${p => p.theme.spacing(2)};
    font-size: 20px;
    color: ${p => p.theme.colors.light};
    background-color: ${p => p.theme.colors.accent};
  }
`;

export const Body = styled.tbody`
  text-align: center;

  ::first-letter {
    text-transform: uppercase;
  }

  tr:nth-child(even) {
    background-color: ${p => p.theme.colors.bgc};
  }

  td {
    padding: ${p => p.theme.spacing(2)};
  }
`;

export const Type = styled.td`
  text-align: left;
`;
