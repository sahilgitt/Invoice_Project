import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Mainpage from './components/Mainpage';
import Create from './components/Create';
import { createContext, useState } from 'react';

const InvoiceContext = createContext();

function App() {
  const [invoiceData, setInvoiceData] = useState([]);

  return (
    <InvoiceContext.Provider value={{ invoiceData, setInvoiceData }}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Mainpage />} />
            <Route path='/create' element={<Create />} />
          </Routes>
        </div>
      </BrowserRouter>
    </InvoiceContext.Provider>
  );
}

export default App;
export { InvoiceContext };


