import Section from './Section'
import InfoField from './InfoField';

const ProfileInfo = ({ firstName, lastName, email, phone }) => {
    return (
        <Section title="Personal Information">
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                <InfoField label="First Name" value={firstName} />
                <InfoField label="Last Name" value={lastName} />
                <InfoField label="Email address" value={email} />
                <InfoField label="Phone" value={phone} />
            </div>
        </Section>
    )
};

export default ProfileInfo;