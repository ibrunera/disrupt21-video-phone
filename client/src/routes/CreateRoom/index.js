import React from 'react'
import {v1 as uuid} from 'uuid'
import './styles.css'

import Header from '../../components/Header'
import callImg from '../../assets/video-call.png'

const CreateRoom = ({history}) => {
  function handleCreateRoom(){
    const id = uuid()
    history.push(`/room/${id}`)
  }

  return (
    <div>
      <Header title="VISAPHONE"/>
      <div  className="divContainer">
        <img src={callImg} alt="video-call"/>
        <button onClick={handleCreateRoom}>Iniciar Chamada</button>
      </div>
    </div>
  )
}

export default CreateRoom