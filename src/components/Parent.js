import React, { useState } from 'react'

const Parent = () => {
    const [selectedOption, setSelectedOption] = useState();

    const handleClick = (e)=>{
        setSelectedOption(e.target.value);
    }
  return (
    <div>
        <div className='parent'>
            <h1>Parent Component</h1>
            <div className='child1'>
                <h2>Child Component 1</h2>
                <button value="Option 1" onClick={handleClick}>Option 1</button>
            </div>
            <div className='child2'>
                <h2>Child Component 2</h2>
                <button value="Option 2" onClick={handleClick}>Option 2</button>
            </div>
            <div className='selectedOption'>
             <p>Selected Option: {selectedOption}</p>
            </div>
        </div>
    </div>
  )
}

export default Parent