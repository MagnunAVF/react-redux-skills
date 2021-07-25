import React from 'react'
import { If, Else } from './If'

export default props => {
    const user = props.user || {}
    return (
        <div>
            <If test={user && user.name}>
                <p>Welcome <strong>{ user.name }</strong>!</p>
                <Else>
                    <p>Welcome <strong> unknown User</strong>!</p>
                </Else>
            </If>
        </div>
    )
}