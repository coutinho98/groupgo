const ProfileCard = ({ imageUrl, name }) => {
    return (
        <div className="flex flex-col items-center">
            <img
                src={imageUrl}
                alt="foto do perfil"
                className="rounded-ful w-32 h-32 mb-4"
            />
            <h2 className="text-2xl font-semibold">{name}</h2>
        </div>
    )
}

export default ProfileCard;