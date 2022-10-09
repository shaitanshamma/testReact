import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../store/reducers/usersReducer";


const Users = () => {

    const users = useSelector(state => state.usersReducer.users);
    const loader = useSelector(state => state.usersReducer.loading);
    const error = useSelector(state => state.usersReducer.error);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    if (loader) {
        return (
            <div>
                Loading....
            </div>
        )
    }

    if (error) {
        return (
            <div>
                Что-то пошло не так
            </div>
        )
    } else {
        return (
            <div>
                {users.map((user) => {
                    return (
                        <div key={user.id}>
                            <h2>{user.name}</h2>
                            <h3>{user.username}</h3>
                            <p>{user.phone}</p>
                        </div>)
                })}
            </div>
        );
    }
};

export default Users;