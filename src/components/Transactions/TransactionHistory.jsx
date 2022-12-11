import Header from "./Header/Header";
import TransList from "./TransList/TransList";

const TransactionHistory = ({items}) =>{
    return ( 
        <table className="transaction-history">
            <Header/>
            <TransList transactions={items}/>
        </table>
    )
}

export default TransactionHistory;