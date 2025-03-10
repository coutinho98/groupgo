import Section from './Section'
import InfoField from './InfoField';

const ProfileInfo = ({ firstName, lastName, email, phone, isEditing, editedData, onChange }) => {
    return (
        <Section title="Personal Information">
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                <InfoField label="First Name" value={firstName} />
                <InfoField label="Last Name" value={lastName} />
                <InfoField label="Email address" value={email} name="email" isEditing={isEditing} editedValue={editedData?.email} onChange={onChange} />
                <InfoField label="Phone" value={phone} name="phone" isEditing={isEditing} editedValue={editedData?.phone} onChange={onChange} />
            </div>
        </Section>
    )
};

export default ProfileInfo;