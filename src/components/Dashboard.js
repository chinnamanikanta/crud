import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { loadUsers } from '../redux/Actions'


const Dashboard = () => {
    const users = useSelector((state) => state.users)
const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadUsers())




    })

    console.log(users)
    return (
        <div>
          <table>
              <tbody>
                  
                {
                    users.map((user) => {
                        return (
                            <tr key = {user.id}>
                                <td>{user.name}</td>
                                <td>{user.gmail}</td>
                                <td>{user.contact}</td>
                                <td>{user.address}</td>
                            </tr>
                            
                            )

                    })
                }
              </tbody>
          </table>
        </div>
    )
}

export default Dashboard


