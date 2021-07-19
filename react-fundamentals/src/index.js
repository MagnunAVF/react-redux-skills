import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import First from './components/basics/First'
import WithProps from './components/basics/WithProps'
import Fragment from './components/basics/Fragment'

ReactDOM.render(
    <div>
        <First></First>
        <WithProps
            title="Student Score"
            student="Pedro Silva"
            score={4.1}/>
        <WithProps
            title="Student Score"
            student="Maria Rosa"
            score={9.3}/>
        <Fragment/>
    </div>,
    document.getElementById('root')
)