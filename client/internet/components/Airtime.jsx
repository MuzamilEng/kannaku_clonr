import { element } from 'prop-types';
import React, { useEffect, useState } from 'react';

const Airtime = () => {
  const [telcoOptions, setTelcoOptions] = useState([
    {id: 0, text : "--Select Telco Provider--"},
    { id: 1, text: 'MTN' },
    { id: 2, text: 'GLO' },
    { id: 3, text: '9Mobile' },
    { id: 4, text: 'Airtel' }
  ]);
  const [telcoProvider, setFormType] = useState('');
  const [modemNumber, setMobileNumber] = useState('');
  const [amount, setAmount] = useState('');

const getRequest = async()=>{
 try {
  const response = await fetch('http://localhost:3000/api/v1/airtime')
  const data = await response.json()
  console.log(data);
 } catch (error) {
  console.log(error);
 }
}

  const submitForm = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const data = {
        telcoProvider,
        modemNumber,
        amount,
      };

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
        redirect: 'follow',
      };

      const response = await fetch('http://localhost:3000/api/v1/airtime', requestOptions);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log('error', error);
    }
  };
  
  // useEffect(()=> {
  //   getRequest();
  // }, [])


  function changeTelco(event) {
    event.preventDefault();
    setFormType(event.target.value);
    console.log('Hi there, user!', event.target.value);
  }


  return (
    <>
      <div className="form-group row">
        <label className="col-lg-5 col-form-label">Telco Provider</label>
        <div className="col-lg-7">
          {/* <select
            className="form-control"
            onChange={changeTelco}
            name='select'
            value={'formType'}
          >
                {telcoOptions?.map((telco) => (
          <option key={telco?.id} value={telco?.text}>
            {telco.text}
          </option>
        ))}
          </select> */}
          <input type="text" className="form-control" value={telcoProvider} onChange={(e)=> setFormType(e.target.value)} />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-lg-5 col-form-label">Mobile Number</label>
        <div className="col-lg-7">
          <input
            type="text"
            className="form-control"
            value={modemNumber}
            placeholder="Mobile Phone Number"
            onChange={(e) => setMobileNumber(e.target.value)}
            />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-lg-5 col-form-label">Amount</label>
        <div className="col-lg-7">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="mySpanClass input-group-text" id="basic-addon1">
                ₦
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              placeholder="Amount"
              aria-label="amount"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
      </div>
      <button type='submit' className="btn btn-primary" onClick={submitForm}>
        Submit
      </button>
    </>
  );
};

export default Airtime;
