import EditButton from "./EditButton"

const Section = ({ title, children, onClick, fontSize = 'font-medium' }) => {
    return (
        <div className="mb-5 rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className={`${fontSize}`}>{title}</h3>
                <EditButton onClick={onClick} />
            </div>
            {children}
        </div>
    )
}

export default Section;