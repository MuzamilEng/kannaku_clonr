import React from 'react'

function ContinueButton({action}) {
  return (
    <button className='btn ps-5 pe-5 pt-2 pb-2' onClick={action} style={{backgroundColor:"#F0DA14", color:"white"}}>
        Next
    </button>
  )
}

export default ContinueButton