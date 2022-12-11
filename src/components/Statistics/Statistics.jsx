import css from './Statistics.module.css'
import StatList from "./StatList/StatList";
import TitleStat from './TitleStat/TitleStat';

const Statistics = ({title, stats}) =>{
  return (
    <section className={css.statistics}> 
    {  {title}&&<TitleStat title={title}>{title}</TitleStat> }
      <StatList stats={stats}/> 
    </section>)

}

export default Statistics;