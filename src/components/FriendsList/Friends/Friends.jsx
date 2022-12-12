import PropTypes from 'prop-types';
import css from "./Friends.module.css";



const Friends = ({isOnline, avatar, name }) => {
    return (<>
    <span className={css.isOnline}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
    </>)
}

Friends.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Friends;