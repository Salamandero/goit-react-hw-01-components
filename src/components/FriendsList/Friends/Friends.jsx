import PropTypes from 'prop-types';



const Friends = ({isOnline, avatar, name }) => {
    return (<>
    <span className="isOnline">{isOnline}</span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
    </>)
}

Friends.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Friends;