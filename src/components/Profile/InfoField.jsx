const InfoField = ({ label, value, spanFull, name, isEditing, editedValue, onChange }) => {
    return (
        <div className={spanFull ? "col-span-2" : ""}>
            <label className="block text-sm text-gray-500 mb-1">{label}</label>
            {isEditing ? (
                <input
                    type="text"
                    name={name}
                    value={editedValue || value}
                    onChange={onChange}
                    className="w-full p-2 border border-gray-300 rounded text-black"
                />
            ) : (
                <div className="truncate text-black font-semibold">{value}</div>
            )}
        </div>
    )
}

export default InfoField;