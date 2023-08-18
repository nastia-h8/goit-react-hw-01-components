import PropTypes from 'prop-types';
import { Table, Head, Body, Type } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Head>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Head>

      <Body>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <Type>{type}</Type>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </Body>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
