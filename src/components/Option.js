import React from 'react';

const Option = (props) => (
  <div className='option'>
   
    <p className='task'>{props.count}- {props.optionText}</p>
    <button className='button button--link'
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      <h3 className='op'>Remove</h3>
      </button>
  </div>
);

export default Option;
