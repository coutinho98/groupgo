const Section = ({ title, children, onClick, fontSize = 'font-medium' }) => (
    <div className="mb-5  p-6">
        <div className="flex justify-between items-center mb-4">
            <h3 className={`${fontSize}`}>{title}</h3>
        </div>
        {children}
    </div>
)


export default Section;