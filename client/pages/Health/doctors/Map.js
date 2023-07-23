import { Icon } from '@iconify/react'
import { Box } from '@mui/material'
import React, { useState } from 'react'
import EsTiming from './EsTiming'

const Map = ({handleBackward, onClick}) => {
    const [forward, setForward] = useState(false)
    // const onClick = () => {
    //     setForward(true)
    // }
  return (
    <div>
    {
        !forward ? <>
        <div className="container" style={{fontSize: "1.2rem"}}>
        <div className="content">
            <h2 className='pr_title2'>Map Location</h2>
            <p>Practice Location</p>
        </div>
        <div className="flex">
            <div className="form-section">
                <label htmlFor="name">Phone number</label> <br />
                <input type="text" id="name" placeholder='' value={+6282340291921} className='text_inputs' /> <br />
                <p className="labal">Note: Patient calls will be directed to this number.
                 You can update it later also.</p>
                 <br className='prg_para'/>
                 <label htmlFor="name">Email</label> <br />
                <input type="text" id="name" placeholder='Enter Email Address' className='text_inputs' /> <br />
                 <br className='prg_para'/>
                 <label htmlFor="name">Street address</label> <br />
                <input type="text" id="name" placeholder='Type Street Address' className='text_inputs' /> <br />
                 <br className='prg_para'/>
                 <div className="flex_box">
                 <div className="drap_drop">
                    <p>Drag n drop the pin to your location:</p>
                    <span className="blue">USE CURRENT LOCATION</span>
                    <img
                    src='/images/pages/user-location.png'
                    alt=''
                    style={{  width: '400px', height: 'auto' }}
                />
                 </div>
                <div className="mr_l">
                     <Box
                            sx={{
                                background: '#DFF8F6',
                                border: '2px solid #ACE5DF',
                                borderRadius: '4px',
                                color: '#40B09C',
                                maxWidth: '390px',
                                p: '18px'
                            }}
                        >
                            <Icon icon="heroicons-outline:light-bulb" color='#40B09C' width={22} height={22} />
                            <br />
                            This information helps us perform critical checks to ensure that only licensed and genuine medical
                            practitioners are listed on Practo. Your profile will get a “Verified” badge on verification.
                        </Box>
                </div>
                 </div>
                 <div className="flex_m_5">
                 <button className='back_btn' onClick={handleBackward}>Back</button>
                <button className='continue_btn1' onClick={()=> setForward(!forward)}>Continue</button>
                 </div>
            </div>
        </div>
    </div>
        </> : <EsTiming onBackward={()=> setForward(!forward)}/>
    }
</div>
  )
}

export default Map
