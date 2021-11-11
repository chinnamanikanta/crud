import React from 'react'
import { useSelector } from 'react-redux'
const Dashboard = () => {
    const users = useSelector((state) => state.users)

    console.log(users)
    return (
        <div>
          <table>
              <tbody>
                  
                  mani
              </tbody>
          </table>
        </div>
    )
}

export default Dashboard


