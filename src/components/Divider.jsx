const Divider = ({ text }) => {
    return (
        <div className="my-6 relative">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
            </div>
            {text && (
                <div className="relative flex justify-center text-sx">
                    <span className="bg-gray-50 px-2 text-gray-400">{text}</span>
                </div>
            )}
        </div>
    )
}

export default Divider;