import React, { useState } from 'react';

const PopupLoginForm: React.FC = () => {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = async (): Promise<void> => {

        try {


            const response = await fetch('http://localhost:3000/user/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                    username:"ali"
                }),
            });
            // Handle response as needed
            console.log(response)
        } catch (error) {
            // Handle error
        }
    };

    return (
        <div>
            <button onClick={() => setShowPopup(true)}>Edit</button>
            {showPopup && (
                <div className="popup">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleLogin();
                        }}
                    >
                        <label>
                            Email:
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Password:
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </label>
                        <button type="submit">Signin</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default PopupLoginForm;
