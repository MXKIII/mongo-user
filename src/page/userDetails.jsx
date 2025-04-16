import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/users/${id}`);
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        };

        fetchUser();
    }, [id]);

    return (
        <div>
            {user ? (
                <div>
                    <h1>{user.first_name} {user.last_name}</h1>
                    <p>Email: {user.email}</p>
                    {user.image && (
                        <img
                            src={`http://localhost:8000/images/${user.image}`}
                            alt={`${user.first_name}'s profile`}
                            style={{ width: "150px", height: "150px", borderRadius: "50%" }}
                        />
                    )}
                </div>
            ) : (
                <p>Loading user details...</p>
            )}
        </div>
    );
};

export default UserDetails;