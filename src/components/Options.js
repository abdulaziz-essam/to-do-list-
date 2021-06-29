import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
  <div className='widget-header'>
  <h3 className='widget-header-title'>your options</h3>

    <button className='button button--link' onClick={props.handleDeleteOptions}>Remove All</button>
 
      
    {
      /* props.options.map((option) => (
        <Option 
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      )) */}

    
 
    </div>
        {  props.options.map((option,index) => (
    <Option
      key={option}
      optionText={option}
      handleDeleteOption={props.handleDeleteOption}
      count={index+1}
    />
      ))}
            {props.options.length === 0 && <p className='widget__message'>Please add an option to get started!</p>}
  </div>
);

export default Options;
