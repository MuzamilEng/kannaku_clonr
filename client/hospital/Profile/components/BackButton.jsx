import React from 'react'

function BackButton({action}) {
  return (
    <button className='btn p-2 border' onClick={action} style={{backgroundColor:"white", color:"blcak"}}>
        Back
    </button>
  )
}

export default BackButton