import React from 'react';

export const VideoPlayer = ({ children, video }) => {
    return (
        <div className="video-player">
            <video width="100%" controls>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {children}
        </div>
    )
};