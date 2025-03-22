import React from 'react'

const Parent = () => {
  return (
    <div>
        <div className='parent'>
            <h1>Parent Component</h1>
            <div className='child1'>
                <h2>Child Component 1</h2>
                <button>Option 1</button>
            </div>
            <div className='child2'>
                <h2>Child Component 2</h2>
                <button>Option 2</button>
            </div>
            <div className='selectedOption'>
                Selected Option: 
            </div>
        </div>
    </div>
  )
}

export default Parent