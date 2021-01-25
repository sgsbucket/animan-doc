import React from 'react';

export const Screenshot = ({ children, image }) => (
    <div className="screenshot">
        <img style={{ maxWidth: '100%' }} src={image} />
        {children}
    </div>
);

export const ScreenshotMark = ({ children, x, y, width, height, textPosition, focusDim, borderRadius }) => {
    let className = ['screenshot-mark'];
    if (focusDim) {
        className.push('focus-dim');
    }
    return (
        <div
            className={className.join(' ')}
            style={{
                left: x,
                top: y,
                width: width,
                height: height,
                borderRadius: borderRadius || '50%',
            }}>
            {children && children.length && <div className={'screenshot-marktext ' + textPosition}>{children}</div>}
        </div>
    )
};
