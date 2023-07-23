import { trHistory } from '../Data';
import React from 'react'

const CommonTransaction = ({title}) => {
  return (
    <div>
      <div className="bg-white w-full h-full m-2 rounded-l-lg p-6">
                <div className="orders rounded-l-lg">
<h1>{title}</h1>
                  <div className="grid grid-cols-7 gap-2 items-center border-b-2 border-gray-300 p-2">
                    <span className="font-bold">Order Id</span>
                    <span className="font-bold">Order Date</span>
                    <span className="font-bold">Sailing</span>
                    <span className="font-bold">Buying</span>
                    <span className="font-bold">To</span>
                    <span className="font-bold">Rate</span>
                    <span className="font-bold">Status</span>
                  </div>

                  {trHistory?.map((item) => {
                    const { order_id, oredr_date, from, to, agreed_rate, rate, status, awaits } = item;
                    return (
                      <div className="grid grid-cols-7 items-center border-b-2 border-gray-200 p-1" key={order_id}>
                        <span className="text-gray-400">{order_id}</span>
                        <p className='w-24'>{oredr_date}</p>
                        <p>{from}</p>
                        <p>{to}</p>
                        <p className="text-gray-400">{rate}</p>
                        <p className='w-24'>{agreed_rate}</p>
                        <p className={`${awaits ? 'text-teal-700' : 'text-yellow-400'}`}>{status}</p>
                      </div>
                    );
                  })}

                </div>
              </div>
    </div>
  )
}

export default CommonTransaction
