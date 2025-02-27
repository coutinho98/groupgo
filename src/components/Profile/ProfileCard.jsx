import EditButton from './EditButton'
import { useEffect, useState, useRef } from 'react';
import Section from './Section';


const ProfileCard = ({ firstName, lastName, location }) => {
    const [imageUrl, setImageUrl] = useState(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        const storedImage = localStorage.getItem('profileImage');
        if (storedImage) {
            setImageUrl(storedImage);
        }
    }, []);

    const toBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    const handleImageChange = async (event) => {
        if (event.target.files && event.target.files[0]) {
            const base64Image = await toBase64(event.target.files[0]);
            setImageUrl(base64Image);
            localStorage.setItem('profileImage', base64Image);
        }
    };

    const handleEditClick = () => {
        fileInputRef.current.click();
    }

    return (
        <Section title="My Profile" fontSize="text-xl" onClick={handleEditClick}>
            <div className="flex items-start gap-4 py-2">
                <div className="w-20 h-20 bg-purple-500 rounded-full overflow-hidden flex-shrink-0 border-4 border-teal-600">
                    <img
                        src={imageUrl || 'https://pt.vecteezy.com/arte-vetorial/7226475-user-account-circle-glyph-color-icon-user-profile-picture-userpic-silhuette-symbol-on-white-background-with-no-outline-negative-space-vector-illustration'}
                        alt={`${firstName} ${lastName}`}
                        className="w-full h-full object-cover "
                    />
                    <input
                        type='file'
                        ref={fileInputRef}
                        onChange={handleImageChange}
                        accept='image/*'
                        className='hidden'
                    />
                </div>
                <div className="flex-grow">
                    <h2 className="text-lg font-medium">{firstName} {lastName}</h2>
                    <p className="text-gray-600 text-sm">{location}</p>
                </div>
            </div>
        </Section>
    );
};

export default ProfileCard;