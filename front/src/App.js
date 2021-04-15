import { Header } from './components/Header';
import './App.css';
import { Balance } from './components/Balance';
import { IncomeExpences } from './components/IncomeExpences';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import {GlobalProvider} from './context/GlobalContex'

function App() {
  return (
    <GlobalProvider>
    <div className="App">
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpences />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
