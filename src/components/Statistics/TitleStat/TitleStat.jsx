import PropTypes from 'prop-types';
import css from './TitleStat.module.css'

const TitleStat = ({title}) => {
    return(<h2 className={css.title}>{title}</h2>)
};


TitleStat.propTypes = {
    title: PropTypes.string.isRequired,
}

export default TitleStat;