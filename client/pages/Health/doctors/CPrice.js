import { Box } from '@mui/material'
import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import EsDetails from './EsDetails';
import BasicDetails from './BasicDetails';

const CPrice = ({onBack}) => {
    const [show, setShow] = useState(true);
    return (
        <div>
            <div className="container" style={{fontSize: "1.2rem"}}>
                {show ? <>
                    <div>
                <h1 className='pr_title2'>Connect Price</h1>
                <div className="flex align">
                    <div className="form-section">
                        <label className='labale' htmlFor="name">Please select any one of the following:</label> <br />
                       <div className="flex align">
                        <input type="radio" className='radio_inputs' />
                        <p className='establishment'>I own a establishment</p>
                       </div>
                        <div className="flex align">
                        <input type="radio" className='radio_inputs' />
                        <p className='establishment'>I visit a establishment</p>
                       </div>
                     <span>Note: You can add multiple establishment one by one.</span>
                     <div className="flex_m_3">
                        {/* <button className='back_btn'><a className='a_link1' href="/Health/doctors/mdRegisteration">Back</a></button> */}
                        <button className='back_btn' onClick={onBack}>Back</button>
                        <button className='continue_btn1' onClick={()=> setShow(false)}>Continue</button>

                        {/* <button className='continue_btn1'><a className='a_link' href="/Health/doctors/EsDetails">Continue</a></button> */}

                        </div>
                    </div>
                    <div className="img_sec1">
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
                            practitioners are listed on Practo. Your profile will get a “Verified” badge on verification. Doctors with
                            verified profiles get 95% more patient views on Practo.
                        </Box>
                    </div>
                </div>
                </div>
                </> : 
                <>
                <BasicDetails />
                </>}
            </div>
        </div>
    )
}

export default CPrice
