import React from 'react';

const Input = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <input onChange={props.onChange} value={props.value}></input>
    </form>
  )
}

export default Input;
