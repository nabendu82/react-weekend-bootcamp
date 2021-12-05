import React from 'react'
import { UserContext, ChannelContext } from '../App'

const Child = () => {
    return (
        <>
            <UserContext.Consumer>
                {user => {
                    return (
                        <ChannelContext.Consumer>
                            {channel => {
                                return (
                                    <>
                                        <h1>Child component -{user}</h1>
                                        <h2>Language is {channel}</h2>
                                    </>
                                )
                            }}
                        </ChannelContext.Consumer>
                    )
                }}
            </UserContext.Consumer>
        </>
    )
}

export default Child
