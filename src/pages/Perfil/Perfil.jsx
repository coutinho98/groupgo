import { useEffect, useState } from "react";
import Sidebar from "../../components/Siderbar"
import AddressInfo from "../../components/Profile/AddressInfo"
import ProfileCard from "../../components/Profile/ProfileCard";
import ProfileInfo from "../../components/Profile/ProfileInfo";
import EditButton from "../../components/Profile/EditButton";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";

const Perfil = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { token } = useAuth();

    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState(null)

    useEffect(() => {
        const fetchPerfil = async () => {

            try {
                const response = await fetch('https://groupgo.onrender.com/user/profile', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setUser(data);
                    setEditedData(data);
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
    }, [token, navigate]);

    const handleStartEditing = () => {
        setIsEditing(true)
        setIsEditedData({ ...user })
    }

    const handleSaveChanges = () => {
        setUser(editedData)
        setIsEditing(false)
        localStorage.setItem('user', JSON.stringify(editedData))
    }

    const handleCancelEditing = () => {
        setIsEditing(false)
        setIsEditedData({ ...user })
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setIsEditedData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    if (!user && !error) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <div className="max-w-3xl mx-auto bg-white shadow-sm rounded-lg p-8">
                    <div className="flex justify-end mb-4">
                        {/* botões de edição principal */}
                        {!isEditing ? (
                            <EditButton onClick={handleStartEditing} />
                        ) : (
                            <div className="flex gap-2">
                                <button
                                    onClick={handleCancelEditing}
                                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSaveChanges}
                                    className="bg-teal-700 text-white px-4 py-2 rounded-full text-sm hover:bg-teal-800"
                                >
                                    Save
                                </button>
                            </div>
                        )}
                    </div>
                    <ProfileCard
                        firstName={user.username}
                        lastName={user.lastName || ''}
                        location={user.location || ''}
                        isEditing={isEditing}
                        editedData={editedData}
                        onChange={handleInputChange}
                    />
                    {/*  <ProfileInfo
                        firstName={profileData.firstName}
                        lastName={profileData.lastName}
                        email={profileData.email}
                        phone={profileData.phone}
                        isEditing={isEditing}
                        editedData={editedData}
                        onChange={handleInputChange}
                    />
                    <AddressInfo
                        country={profileData.country}
                        cityState={profileData.cityState}
                        isEditing={isEditing}
                        editedData={editedData}
                        onChange={handleInputChange}
                    /> */}
                </div>
            </div>
        </div>
    )
}

export default Perfil;