import React, { useState } from 'react'

const Counter = () => {


    const [valorContador, setValorContador] = useState(0)


  return (
    <div>
        <p style={{
            width: "5vw",
            height: "5vh",
            marginTop: "5px",
            backgroundColor: "green"
          }}>{valorContador}</p>
        <button onClick={()=>{setValorContador(valorContador+1)}}>Incrementar +</button>
        <br></br>
        <button onClick={()=>{valorContador===0? setValorContador(0) : setValorContador(valorContador-1)}}>Decrementar -</button>

    </div>
  )
}

export default Counter