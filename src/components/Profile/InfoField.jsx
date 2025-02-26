const InfoField = ({ label, value, spanFull }) => {
    return (
        <div className={spanFull ? "col-span-2" : ""}>
            <label className="block text-sm text-gray-500 mb-1">{label}</label>
            <div className="text-black font-semibold">{value}</div>
        </div>
    )
}

export default InfoField;