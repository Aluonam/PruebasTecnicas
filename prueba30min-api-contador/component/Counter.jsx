import React, { useState } from 'react'

const Counter = () => {


    const [valorContador, setValorContador] = useState(0)


  return (
    <div>
        <p>{valorContador}</p>
        <button onClick={(valorContador)=>{setValorContador(valorContador+1)}}>Incrementar +</button>
        <br></br>
        <button>Decrementar -</button>

    </div>
  )
}

export default Counter