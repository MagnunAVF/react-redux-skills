import React from 'react'

export default function WithProps(props) {
    const status = props.score >= 6.0 ? 'OK' : 'Fail'
    return (
        <div>
            <h2>{ props.title }</h2>
            <p><strong>Name:</strong> { props.student }</p>
            <p><strong> Score:</strong> { props.score }</p>
            <p><strong> Status:</strong> { status }</p>
        </div>
    )
}