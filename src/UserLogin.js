import React, { useContext, createContext, useState, useEffect } from "react";

// create context
const UserContext = createContext();

const UserLogin = () => {
    // state management
    const [user, setUser] = useState(null);

    // fetch user from fake api
    // https://randomuser.me/api
    useEffect(() => {
        const fetchUser = () => {
            fetch(`https://randomuser.me/api/`)
            .then((response) => response.json())
            .then((result) => setUser(result.results[0]))
            .catch((error) => console.error("Server side issue."))
        };

        fetchUser();
    }, []);

    return(
        <UserContext.Provider value={user}>
            <h1>User Login</h1>
            <Page />               
        </UserContext.Provider>
    )
}

const Page = () => {
    const user = useContext(UserContext);
    if (user?.login?.username) {
        return <p>You are logged in as {user.login.username}</p>
    } else {
        return <p>You are not loggedIn.</p>
    }
}

export default UserLogin;