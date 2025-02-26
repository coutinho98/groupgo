const EditButton = ({ onClick }) => {
    return (
        <button onClick={onClick} className="text-black border border-gray-300 hover:text-teal-600 transition px-4 py-2 rounded-full text-sm flex items-center">
            Edit
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
        </button>
    )
}

export default EditButton