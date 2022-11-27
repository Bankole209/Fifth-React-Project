import React from 'react'

const Joke = (props) => {
  return (
    <div className='setup-card'>
      <h3>Setup: {props.setup}</h3>
      <p>Punchline: {props.punchline}</p>
      {/* <hr style={{color:'#918E9B'}}/> */}
    </div>
  )
}

export default Joke

