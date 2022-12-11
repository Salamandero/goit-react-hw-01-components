import PropTypes from 'prop-types';
import Friends from './Friends/Friends';



const FriendsList = ({friends}) => {
    return(
        <ul className="friend-list">
        {friends.map(el =>(
            <li key={el.id} className="item">
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

