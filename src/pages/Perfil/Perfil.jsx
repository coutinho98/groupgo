import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router";

const Perfil = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPerfil = async () => {
            try {
                const response = await fetch('https://groupgo.onrender.com/user/profile', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include'
                });

                if (response.ok) {
                    const data = await response.json();
                    setUser(data);
                } else {
                    setError('falha');
                    navigate('/');
                }
            } catch (error) {
                setError('error server');
                navigate('/')
            }
        };
        fetchPerfil();
    }, [navigate]);

    if (!user) return <div>loading</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Perfil</h1>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}

export default Perfil;