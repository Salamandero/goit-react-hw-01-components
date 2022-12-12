import Header from "./Header/Header";
import TransList from "./TransList/TransList";
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({items}) =>{
    return ( 
        <table className={css.transactionHistory}>
            <Header/>
            <TransList transactions={items}/>
        </table>
    )
}

export default TransactionHistory;