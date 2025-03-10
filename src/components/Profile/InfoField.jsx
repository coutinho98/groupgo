import Input from '../Input'

const InfoField = ({ label, value, name, isEditing, editedValue, onChange }) => {
    return (
        <div>
            <p className="text-sm text-gray-500">{label}</p>
            {isEditing ? (
                <Input
                    type="text"
                    name={name}
                    value={editedValue}
                    onChange={onChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                />
            ) : (
                <p className="font-medium">{value}</p>
            )}
        </div>
    );
};

export default InfoField;