import { Box } from '@mui/material'
import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import EQualification from './EQualification';

const MedicalRegistration = ({onClick}) => {
    const [forward, setForward] = useState(true)
    return (
        <div>
            <div className="container" style={{fontSize: "1.2rem"}}>
               {forward ? <>
                <div className="content">
                    <h2 className='pr_title2'>Medical Registration</h2>
                </div>
                <div className="flex">
                    <div className="form-section">
                        <label htmlFor="name">Registration Number</label> <br />
                        <input type="text" id="name" placeholder='Type Registration Number' className='text_inputs' /> <br />
                        <label htmlFor="specialization">Registration Council</label> <br />
                        <input type="text" id="specialization" placeholder='Type & Select Registration Council' className='text_inputs' /> <br />
                        <label htmlFor="gender">Registration Year</label> <br />
                        <input type="text" id="registeration year" placeholder='Type Registration Year' className='text_inputs' />
                        <br />
                        <label htmlFor="city">City</label> <br />
                        <input type="text" id="city" placeholder='Select City' className='text_inputs' />
                        <div className="flex_m_3">
                        <button className='back_btn' onClick={onClick}>Back</button>

                        <button className='continue_btn1' onClick={()=> setForward(false)}>Continue</button>
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
               </> : <><EQualification  onBackward={() => setForward(true)} /></>}
            </div>
        </div>
    )
}

export default MedicalRegistration
