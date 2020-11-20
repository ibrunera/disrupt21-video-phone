import React from 'react'
import {v1 as uuid} from 'uuid'

const CreateRoom = ({history}) => {
  function handleCreateRoom(){
    const id = uuid()
    history.push(`/room/${id}`)
  }

  return <button onClick={handleCreateRoom}>Create Room</button>
}

export default CreateRoom