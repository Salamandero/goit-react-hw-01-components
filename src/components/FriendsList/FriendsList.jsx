import PropTypes from 'prop-types';
import Friends from './Friends/Friends';
import css from "./FriendsList.module.css";



const FriendsList = ({friends}) => {
    return(
        <ul className={css.friendList}>
        {friends.map(el =>(
            <li key={el.id} className={css.item}>
                <Friends 
                isOnline={el.isOnline} 
                avatar={el.avatar} 
                name={el.name}
                />
            </li>
        ))}
        </ul>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,    
};


export default FriendsList;

