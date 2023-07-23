import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { Box } from '@mui/material';
import EsProof from './EsProof';

const Identity = ({handleBackward ,mdProof}) => {
    const [forward, setForward] = useState(false) 
    const handleBackwards = () => {
        setForward(true)
    }
    return (
        <div>
            {!forward ? <>
                <div className="container" style={{fontSize: "1.2rem"}}>
                <div className="">
                    <h2 className="pr_title2">{mdProof}</h2>
                    <p>Jamhur Ghifari</p>
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
                <div className="upload_para">
                    <p>
                        Please upload your identity proof to ensure that the ownership
                        of your profile remains with only you.
                    </p>
                </div>
                <ul className='id_lists'>
                    <li className='ul_padding'>
                        <p>Aadhar Card</p>
                    </li>
                    <li className='ul_padding'>
                        <p>Driving License</p>
                    </li>
                    <li className='ul_padding'>
                        <p>Voter Card</p>
                    </li>
                    <li className='ul_padding'>
                        <p>Any other Govt.ID</p>
                    </li>
                </ul>
                <ul className="id_list2">Extra proofs required to be uploaded:
                <li className='ul_padding'>Medical Registeration Proof</li>
                <li className='ul_padding'>Establishment Proof</li>
                </ul>
                <div className="flex_btn">
                <button className='back_btn' onClick={handleBackward}>Back</button>
                 <button className='continue_btn1' onClick={handleBackwards}>Continue</button>
                </div>
            </div>
            </>  : <EsProof onClick={()=> setForward(false)} /> }
        </div>
    )
}

export default Identity
