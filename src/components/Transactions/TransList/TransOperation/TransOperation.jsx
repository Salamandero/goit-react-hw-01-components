import PropTypes from 'prop-types';
// import css from "./TransOperation.module.css";

const TransOperation = ({ type, amount, currency }) => {
  return (
    <>
      {' '}
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
};

TransOperation.prototype = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransOperation;
