import React, { useState } from 'react'
import MedicalRegistration from './MedicalRegistration';

const Profile = () => {
    const [show, setShow] = useState(true);
    const handleBackward = ()=> {
        setShow(true)
    }
    return (
        <div>
            <div className="container" style={{fontSize: "1.2rem"}}>
                <h1 className='pr_title'>Profile</h1>
                {show ? <>
                    <div className="content">
                    <h2 className='pr_title2'>Hello Dr.Jamhur Ghifari! Lets <br /> build your dedicated profile.</h2>
                    <p>Section A: Profile details</p>
                </div>
                <div className="flex">
                    <div className="form-section">
                        <label htmlFor="name">Name</label> <br />
                        <input type="text" id="name" placeholder='Dr./Mr./Ms.' className='text_inputs' /> <br />
                        <label htmlFor="specialization">Specialization</label> <br />
                        <input type="text" id="specialization" placeholder='Select Specialization' className='text_inputs' /> <br />
                        <label htmlFor="gender">Gender</label> <br />
                        <div className="flex s_ar">
                            <div>
                                <input type="radio" id="gender" placeholder='Male' className='radio_inputs' />
                                <p>Male</p>
                            </div>
                            <div>
                                <input type="radio" id="gender" placeholder='Female' className='radio_inputs' />
                                <p>Female</p>
                            </div>
                            <div>
                                <input type="radio" id="gender" placeholder='Other' className='radio_inputs' />
                                <p>Other</p>
                            </div>

                        </div>
                        <br />
                        <label htmlFor="city">City</label> <br />
                        <input type="text" id="city" placeholder='Select City' className='text_inputs' />
                        {/* <button className='continue_btn'><a className='a_link' href="/Health/doctors/mdRegisteration">Continue</a></button> */}
                        <button className='continue_btn' onClick={() => setShow(false)}>Continue</button>

                    </div>
                    <div className="img-sec">
                        <img
                            src='/images/pages/doctor-profile-snapshot.png'
                            alt=''
                            style={{ maxWidth: '541px', width: '100%', height: 'auto' }}
                        />
                    </div>
                </div>
                </> : <><MedicalRegistration onClick={handleBackward} /></>}
            </div>
        </div>
    )
}

export default Profile
