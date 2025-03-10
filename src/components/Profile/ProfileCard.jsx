import EditButton from './EditButton'
import { useEffect, useState, useRef } from 'react';
import Section from './Section';
import Input from '../Input'


const ProfileCard = ({ firstName, lastName, location, isEditing, editedData, onChange }) => {
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
        <Section title="My Profile" fontSize="text-xl" >
            <div className="flex items-start gap-4 py-2">
                <div className="w-20 h-20 bg-purple-500 rounded-full overflow-hidden flex-shrink-0 border-4 border-teal-600">
                    <img
                        src={imageUrl}
                        alt={`${firstName} ${lastName}`}
                        className="w-full h-full object-cover cursor-pointer"
                        onClick={handleEditClick}
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
                    {isEditing ? (
                        <div className="space-y-2">
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">firstName</label>
                                <Input
                                    type="text"
                                    name="firstName"
                                    value={editedData.firstName}
                                    onChange={onChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">lastName</label>
                                <Input
                                    type="text"
                                    name="lastName"
                                    value={editedData.lastName}
                                    onChange={onChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">location</label>
                                <Input
                                    type="text"
                                    name="location"
                                    value={editedData.location}
                                    onChange={onChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                        </div>
                    ) : (
                        <>
                            <h2 className="text-lg font-medium">{firstName} {lastName}</h2>
                            <p className="text-gray-600 text-sm">{location}</p>
                        </>
                    )}
                </div>
            </div>
        </Section>
    );
};

export default ProfileCard;