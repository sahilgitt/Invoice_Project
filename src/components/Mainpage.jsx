import React, { useContext, useState } from 'react';
import './Mainpage.css';
import { Link } from 'react-router-dom';
import { InvoiceContext } from '../App';

const Mainpage = () => {
  const { invoiceData } = useContext(InvoiceContext);
  const [searchData, setSearchData] = useState('');

  
  const filteredInvoices = invoiceData.filter(invoice => {
    const { invoiceNo, customerName } = invoice;
    const data = searchData.toLowerCase();
    return invoiceNo.toLowerCase().includes(data) || customerName.toLowerCase().includes(data);
  });

  return (
    <div className='main'>
      <div className='navbar'>
        <h1 className='heading'>INVOICE</h1>
      </div>
      <div className='navbar-2'>
        <div className='btn-container'>
          <Link to='/create' className='create-btn'>create</Link>
        </div>
        <div className='search-container'>
          <div className='search'>
            <input
              type='text'
              className='search-input'
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            />
          </div>
          <div className='button'>
            <button className='search-btn'>Search</button>
          </div>
        </div>
      </div>
      <div className='table'>
        <table>
          <thead>
            <tr className='head'>
              <th>Invoice No.</th>
              <th>Date</th>
              <th>Customer name</th>
              <th>Total</th>
              <th>Tax</th>
              <th>Grand total</th>
            </tr>
          </thead>
          <tbody>
            {filteredInvoices.map((invoice, index) => (
              <tr key={index}>
                <td>{invoice.invoiceNo}</td>
                <td>{invoice.date}</td>
                <td>{invoice.customerName}</td>
                <td>{invoice.total}</td>
                <td>{invoice.tax}</td>
                <td>{invoice.grandTotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Mainpage;

