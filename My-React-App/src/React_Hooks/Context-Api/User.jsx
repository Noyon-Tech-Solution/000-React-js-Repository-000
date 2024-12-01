import React, { useState } from 'react'

export default function User({user, onRemove}) {
    const {id, userName} = user;

    const handleRemove = (id) => {
        onRemove(id)
    }

  return (
    <article className='user'>
      <h2>{id}</h2>
      <h2>{userName}</h2>
      <button onClick={()=>handleRemove(id)}>Delete</button>
    </article>
  )
}
