import React, {useContext} from 'react'
import { userContext } from './UseContext'

export default function Child4() {
    const {user, text} = useContext(userContext);

  return (
    <div>
      <h2>{user.id}</h2>
      <h2>{user.name}</h2>
    </div>
  )
}
