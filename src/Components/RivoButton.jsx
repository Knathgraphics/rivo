import React from 'react'

const RivoButton = (props) => {
  return (
    <div>
        <button onClick={props.onClick} className={props.className}>{props.content} </button>
    </div>
  )
}

export default RivoButton