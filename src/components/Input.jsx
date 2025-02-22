const Input = ({
    label,
    id,
    type = 'text',
    name,
    value,
    onChange,
    placeholder = '',
    required = false,
    rightElement = null,
    error = false,
    errorMessage = '',
}) => {
    return (
        <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-medium text-gray-600" htmlFor={id}>
                    {label}
                </label>
                {rightElement}
            </div>
            <input className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500`}
                id={id}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required} />
            {error && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
        </div>
    )
}

export default Input;