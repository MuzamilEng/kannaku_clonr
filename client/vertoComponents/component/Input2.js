import React from 'react'
import { Icon } from '@iconify/react';


const Input2 = () => {
    return (
        <div>
            <main className="input_2">
                <div className="input2_container p-2 flex m-1 items-center justify-evenly rounded-md border-2 border-gray-400">
                    <Icon icon="twemoji:flag-chad" className='text-lg' />
                    <Icon icon="ph:currency-cny-fill" className=' text-lg ml-2' />
                    <span className='text-teal-600 ml-2'>INR</span>
                    <Icon icon="bxs:down-arrow" className="text-gray-400 text-lg ml-2" />
                </div>
            </main>
        </div>
    )
}

export default Input2
