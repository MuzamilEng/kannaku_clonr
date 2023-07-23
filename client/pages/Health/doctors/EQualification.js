import { Box } from '@mui/material'
import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import CPrice from './CPrice';

const EQualification = ({onBackward}) => {
    const [show, setShow] = useState(true);
    return (
        <div>
            <div className="container" style={{fontSize: "1.2rem"}}>
                {
                    show ? <>
                    <div className="content">
                    <h2 className='pr_title2'>Education Qualification</h2>
                    <span>Please enter your best level of education</span>
                </div>
                <div className="flex">
                    <div className="form-section">
                        <label htmlFor="name">Degree</label> <br />
                        <input type="text" id="name" placeholder='Type & Select Degree' className='text_inputs' /> <br />
                        <label htmlFor="specialization">College/Institute</label> <br />
                        <input type="text" id="specialization" placeholder='Type & Select College/Institute' className='text_inputs' /> <br />
                        <label htmlFor="gender">Year of Completion</label> <br />
                        <input type="text" id="registeration year" placeholder='Type Registration Year of Completion' className='text_inputs' />
                        <br />
                        <label htmlFor="city">Year of experience</label> <br />
                        <input type="text" id="city" placeholder='Type Year of experience (0-70 years)' className='text_inputs' />
                        <div className="flex m_3">
                        {/* <button className='back_btn'><a className='a_link1' href="/Health/doctors/mdRegisteration">Back</a></button> */}
                        <div className="flex_m_4">
                        <button className='back_btn' onClick={onBackward}>Back</button>
                       <button className='continue_btn1' onClick={()=> setShow(false)}>Continue</button>
                        </div>
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
                    </> : <><CPrice onBack={()=> setShow(true)} /></>
                }
            </div>
        </div>
    )
}

export default EQualification
