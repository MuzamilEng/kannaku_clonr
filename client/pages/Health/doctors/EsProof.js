import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { Box } from '@mui/material';
import Map from './Map';

const EsProof = ({onClick, handleBackward}) => {
    const [forward, setForward] = useState(false) 
    const handleForward = () => {
        setForward(true)
    }
    
    return (
        <div>
            {!forward ? <>
                <div className="container" style={{fontSize: "1.2rem"}}>
                <div className="">
                    <h2 className="pr_title2">Establishment Proof</h2>
                    <p>Jamhur Ghifari</p>
                </div>
                <div className="">
                    <p>I am</p>
                    <div className="flex align">
                        <input type="radio" className='radio_inputs' />
                        <p className='establishment'>I own a establishment</p>
                       </div>
                        <div className="flex align">
                        <input type="radio" className='radio_inputs' />
                        <p className='establishment'>have rendered at other establishment</p>
                       </div>
                       <div className="flex align">
                        <input type="radio" className='radio_inputs' />
                        <p className='establishment'>a consult doctor</p>
                       </div>
                        <div className="flex align">
                        <input type="radio" className='radio_inputs' />
                        <p className='establishment'>practicing at home</p>
                       </div>
                </div>
                <div className="flex_wrapper">
                <div className="upload_img">
                    <Icon icon="uil:image-upload" />
                    <p>Drop or Upload Idenrity Proof</p>
                    <p>Upload</p>
                </div>
                <div className="box">
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
                <button className='back_btn' onClick={onClick}>Back</button>
                 <button className='continue_btn1' onClick={handleForward}>Continue</button>
                </div>
            </div>
            </> : <Map handleBackward={()=> setForward(false)} />}
        </div>
    )
}

export default EsProof
