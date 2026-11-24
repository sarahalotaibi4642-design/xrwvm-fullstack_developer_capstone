import React, { useState } from "react";

const Register = () => {
    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const register = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("/djangoapp/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userName,
                    firstName,
                    lastName,
                    email,
                    password
                })
            });

            const data = await response.json();

            if (response.ok && data.userName) {
                setMessage("Registration successful!");
                window.location.href = "/";
            } else {
                setMessage("Registration failed.");
            }
        } catch (error) {
            setMessage("Unable to register.");
        }
    };

    return (
        <div className="container mt-5">
            <h1>Sign-up</h1>

            <form onSubmit={register}>

                <div className="form-group mb-3">
                    <label>Username</label>
                    <input
                        type="text"
                        className="form-control"
                        value={userName}
                        onChange={(e) =>
                            setUserName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group mb-3">
                    <label>First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={firstName}
                        onChange={(e) =>
                            setFirstName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group mb-3">
                    <label>Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={lastName}
                        onChange={(e) =>
                            setLastName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary">
                    Register
                </button>

                <p>{message}</p>

            </form>
        </div>
    );
};

export default Register;
