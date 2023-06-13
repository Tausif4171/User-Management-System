import React, { useState } from 'react'

const initialState = {
  name: '',
  email: '',
  phoneNumber: null
}

function AddEdit() {
  const [state, setState] = useState(initialState)
  const { name, email, phoneNumber } = initialState
  return (
    <div>AddEdit</div>
  )
}

export default AddEdit