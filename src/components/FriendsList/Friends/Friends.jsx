import PropTypes from 'prop-types';
import css from './Friends.module.css';

const Friends = ({ isOnline, avatar, name }) => {
  const isOn = [];
  if (isOnline) {
    isOn.push('isOnline');
  }
  const active = isOn.join('');

  return (
    <>
      <span className={`${css.offline} ${css[active]}`}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
};

Friends.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Friends;
