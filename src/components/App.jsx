

import user from './jsonData/user.json';
import Profile from "./Profile/Profile";
import Statistics from './Statistics/Statistics';
import data  from './jsonData/data.json';
import FriendsList from './FriendsList/FriendsList';
import friends from "./jsonData/friends.json";
import TransactionHistory from './Transactions/TransactionHistory';
import transactions from "./jsonData/transactions.json";
import css from "./App.module.css";

import React from 'react';

export const App = () => {
  return (
 
       <div className={css.wrapper}>
       <Profile   
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}/>

     <Statistics
       title="Upload stats" stats={data}/>
      
      <FriendsList friends={friends} />;
     <TransactionHistory items={transactions} />
     </div>  

     
  
     )}

 