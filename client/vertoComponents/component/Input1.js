import React from 'react'
import { Icon } from '@iconify/react';


const Input1 = () => {
    return (
        <div>
            <main className="input_1">
                <input type="text" placeholder='Enter Amount' className=' input1_container m-3 p-2 border-2 border-gray-400 rounded-md text-start focus:none placeholder:font-bold placeholder:right-1 placeholder:absolute placeholder:top-3 placeholder:text-green-600' />
            </main>
        </div>
    )
}

export default Input1
