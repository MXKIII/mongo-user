import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/authContext"

const Profile = ()=>{
    const {tokenStorage} = useContext(AuthContext)
    const [user, setUser] = useState(null);
    console.log(tokenStorage)

    const fetchUserProfile = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/profile", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${tokenStorage}`, 
                },
            });

            if (response.status === 403) {
                console.error("Access denied: Invalid or expired token.");
                return;
            }

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log("User data:", data);
            setUser(data); 
        } catch (error) {
            console.error("Error fetching user profile:", error);
        }
    }

    useEffect(() => {
        fetchUserProfile(); 
    }, []);

    return(
        <div>
            {user ? (
                <div>
                    <h1>Hello, my name is {user.first_name} {user.last_name}</h1>
                    {user.image ? (
                        <img
                            src={`http://localhost:8000/images/${user.image}`}
                            alt={`${user.first_name}'s profile`}
                            style={{ width: "150px", height: "150px", borderRadius: "50%" }}
                        />
                    ) : (
                        <p>{`${user.first_name}'s profile image is not available`}</p>
                    )}
                </div>
            ) : (
                <p>Loading profile...</p>
            )}
        </div>
    )
}

export default Profile