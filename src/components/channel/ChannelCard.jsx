/* eslint-disable react/prop-types */

const imageUrl = "https://static-00.iconduck.com/assets.00/avatar-default-icon-2048x2048-h6w375ur.png";

const ChannelAvatar = ({url}) => {
    return(
        <div className="channels-avatar-container">
            <img src={url ? url : imageUrl} width='100%' height='100%' alt="Default avatar" />
        </div>
    )
}

export const ChannelCard = ({
    title,
    id,
    username,
    isOnline,
    avatarUrl,
    navigateToChannelHandler
}) => {
    const handleNavigate = () => {
        navigateToChannelHandler(id)
    }

    return(
        <div className="channels-card" onClick={handleNavigate}>
            <ChannelAvatar url={avatarUrl}/>
            <span className="channels-card-title">{title}</span>
            <span className="channels-card-title">{username}</span>
            <span className="channels-card-title" style={{color: isOnline ? 'green' : 'red'}}>
                {isOnline ? 'Online' : 'Offline'}
            </span>
        </div>
    )
}