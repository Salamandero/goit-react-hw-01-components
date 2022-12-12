import PropTypes from 'prop-types';
import css from './TitleStat.module.css'

const TitleStat = ({title}) => {
    return(<h3 className={css.title}>{title}</h3>)
};


TitleStat.propTypes = {
    title: PropTypes.string.isRequired,
}

export default TitleStat;