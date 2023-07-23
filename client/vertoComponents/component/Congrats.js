import React, { useState } from 'react'
// import { ProgressC } from './ProgressC';
import Link from 'next/link';

const Congrats = () => {
    const [toggle, setToggle] = useState(true)

    return (
        <>
            {toggle && <>
                <div className="bg-white congrats_container">
                    <div className="grid grid-cols-1 items-center ">
                        {/* <div className="progressbar z-30">
                            <ProgressC />
                        </div> */}
                        <div className="mt-4 pt-2 z-40">
                            <p><span className='font-bold'>Congratulations! </span> Your transaction has been initiated.</p>

                            <div className="teal_container rounded-md p-2 mt-2 grid grid-cols-1 items-center">
                                <h1 className="font-bold text-xl">Transaction ID# EN-9840983602-2333</h1>
                                <Link href='/EWallet'>
                                <button className="font-bold view_btn btn">VIEW DETAILS</button>
                                </Link>
                                <p className="text-lg">You are sending <span className="font-bold"> 10,000 INR </span> at <span className="font-bold"> 1 INR = 0.009889 GBP </span> rate. Recipient will get <span className="font-bold">98.89 GBP</span></p>
                                <p className='text-lg'>Account Number: <span className="font-bold">xxxx2312</span></p>
                            </div>
                            <div className="mt-2 p-2">
                                <h1 className="font-bold text-2xl">What happens next?</h1>
                                <ul className="list-item p-3">
                                    <li className="text-gray-400">
                                        Once you have sent the money to verto, you can track the progress of your transaction <span className="text-teal-700 font-bold underline"> here </span>
                                    </li>
                                    <li className="text-gray-400">
                                        Verto will transfer money to recepient and you will be able to track the progress of your transaction in the <span className="text-teal-700 font-bold underline"> Transaction History </span> section
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>}
        </>

    )
}

export default Congrats
