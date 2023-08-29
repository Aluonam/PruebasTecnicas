import React from 'react'
import Counter from './Counter'
import UserList from './UserList'
import { useState } from 'react'

const ParentComponent = () => {

    const [valorContador, setValorContador] = useState(0)

  return (
    <>
    <Counter valorContador={valorContador} setValorContador={setValorContador}></Counter>
    <br></br>
    <UserList valorContador={valorContador}></UserList>
    </>
  )
}

export default ParentComponent