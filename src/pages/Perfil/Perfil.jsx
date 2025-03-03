import { useState } from "react";
import Sidebar from "../../components/Siderbar"
import AddressInfo from "../../components/Profile/AddressInfo"
import ProfileCard from "../../components/Profile/ProfileCard";
import ProfileInfo from "../../components/Profile/ProfileInfo";

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

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <div className="max-w-3xl mx-auto bg-white shadow-sm rounded-lg p-8">
                    <ProfileCard
                        firstName={profileData.firstName}
                        lastName={profileData.lastName}
                        location={profileData.location}
                    />
                    <ProfileInfo
                        firstName={profileData.firstName}
                        lastName={profileData.lastName}
                        email={profileData.email}
                        phone={profileData.phone}
                    />
                    <AddressInfo
                        country={profileData.country}
                        cityState={profileData.cityState}
                    />
                </div>
            </div>
        </div>
    )
}

export default Perfil;