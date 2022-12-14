import PropTypes from 'prop-types';
import TransOperation from './TransOperation/TransOperation';
// import css from "./TransList.module.css";

const TransList = ({ transactions }) => {
  return (
    <>
      <tbody>
        {transactions.map(el => (
          <tr key={el.id}>
            <TransOperation
              type={el.type}
              amount={el.amount}
              currency={el.currency}
            />
          </tr>
        ))}
      </tbody>
    </>
  );
};

TransList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransList;
