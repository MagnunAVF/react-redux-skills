import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

const tag = <span>Hi react!</span>

ReactDOM.render(
    <div>
        { tag }
    </div>,
    document.getElementById('root')
)