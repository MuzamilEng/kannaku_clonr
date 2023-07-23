import React from 'react'
import FeatherIcon from 'feather-icons-react'

function Idea({message}) {
  return (
    <div className='border rounded shadow-sm p-2' style={{height:"180px", width:"390px", color:"#40B09C", backgroundColor:"#ACE5DF" }}>
        <div className="row justify-content-center">
            {/* <img src="/src/assets/img/light.png" height="15px" width="15px" alt="" /> */}
            <br />
            <br />
            <p>{message}</p>
        </div>
    </div>
  )
}

export default Idea