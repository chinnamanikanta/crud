import React from 'react'
import { useSelector } from 'react-redux'
const Dashboard = () => {
    const users = useSelector((state) => state.users)

    console.log(users)
    return (
        <div>
            This is dashBoard
        </div>
    )
}

export default Dashboard

export default Dashboard
