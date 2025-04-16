import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("http://localhost:8000/api/users");
                const data = await response.json();
                console.log(data)
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user._id}>
                        <Link to={`/users/${user._id}`}>{user.first_name} {user.last_name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;