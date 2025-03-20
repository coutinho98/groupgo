import { useEffect, useState } from "react";
import Sidebar from "../../components/Siderbar"
import AddressInfo from "../../components/Profile/AddressInfo"
import ProfileCard from "../../components/Profile/ProfileCard";
import ProfileInfo from "../../components/Profile/ProfileInfo";
import EditButton from "../../components/Profile/EditButton";

const Perfil = () => {
    const [profileData, setProfileData] = useState({
        firstName: 'Bruno',
        lastName: 'Di Paolo',
        location: 'Salvador, Bahia',
        email: 'brunaoguardiani@gmail.com',
        phone: '+157 171',
        country: 'BRA',
        cityState: 'Salvador',
    })

    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setIsEditedData] = useState({ ...profileData })

    const handleStartEditing = () => {
        setIsEditing(true)
        setIsEditedData({ ...profileData })
    }

    const handleSaveChanges = () => {
        setProfileData(editedData)
        setIsEditing(false)
        localStorage.setItem('profileData', JSON.stringify(editedData))
    }

    const handleCancelEditing = () => {
        setIsEditing(false)
        setIsEditedData({ ...profileData })
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setIsEditedData(prev => ({
            ...prev,
            [name]: value
        }))
    }

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
                        firstName={profileData.firstName}
                        lastName={profileData.lastName}
                        location={profileData.location}
                        isEditing={isEditing}
                        editedData={editedData}
                        onChange={handleInputChange}
                    />
                    <ProfileInfo
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
                    />
                </div>
            </div>
        </div>
    )
}

export default Perfil;