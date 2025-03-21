const Checkbox = ({ id, name, checked, onChange, label }) => (
    <div className="flex items-center">
        <input
            id={id}
            type="checkbox"
            className="h-4 w-4 text-teal-600 border-gray-300 rounded"
            name={name}
            checked={checked}
            onChange={onChange}>
        </input>
        <label htmlFor={id} className="ml-2 block text-sm font-medium text-gray-500">
            {label}
        </label>
    </div >
)

export default Checkbox;