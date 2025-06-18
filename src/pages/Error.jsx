import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

const Error = () => {

    const userInfo = useSelector((state) => state.userData.user)

    if (userInfo) {
        return <Navigate to="/" />
    } else {
        return <Navigate to="/" />
    }

    return (
        <>
        </>
    )
}

export default Error