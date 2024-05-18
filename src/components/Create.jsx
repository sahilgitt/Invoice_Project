import React, { useContext, useState } from 'react';
import { InvoiceContext } from '../App';
import { Navigate, useNavigate } from 'react-router-dom';
import './Create.css';

const Create = () => {
  const { setInvoiceData } = useContext(InvoiceContext);

  const [formData, setFormData] = useState({
    invoiceNo: '',
    date: '',
    customerName: '',
    total: '',
    tax: '',
    grandTotal: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInvoiceData(prevState => [...prevState, formData]);
    Navigate('/');
    setFormData({
      invoiceNo: '',
      date: '',
      customerName: '',
      total: '',
      tax: '',
      grandTotal: ''
    });
    
  }

  return (
    <div>
      <div className='head-invoice'><h1>Create Invoice</h1></div>

       
      <form className='create-form' onSubmit={handleSubmit}>
        <input type='text' name='invoiceNo' value={formData.invoiceNo} onChange={handleChange} placeholder='Invoice No.' />
        <input type='date' name='date' value={formData.date} onChange={handleChange} /> 
        <input type='text' name='customerName' value={formData.customerName} onChange={handleChange} placeholder='Customer Name' />
        <input type='number' name='total' value={formData.total} onChange={handleChange} placeholder='Total' />
        <input type='number' name='tax' value={formData.tax} onChange={handleChange} placeholder='Tax' />
        <input type='number' name='grandTotal' value={formData.grandTotal} onChange={handleChange} placeholder='Grand Total' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  ); 
  
}

export default Create;


