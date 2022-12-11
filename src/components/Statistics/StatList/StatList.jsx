import PropTypes from 'prop-types';
import css from './StatList.module.css'


const StatList = ({stats}) =>{
return (    <ul className={css.statList}>
                {stats.map(el => ( 
                    <li key={el.id} className={css.item}>
                        <span className={css.label}>{el.label}</span>
                        <span className={css.percentage}>{el.percentage}%</span>
                    </li>
                ))}    
             </ul>
        );
}


StatList.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,    
};

export default StatList;