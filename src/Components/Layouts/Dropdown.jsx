import React from 'react';

const Dropdown = ({ className, children,refer }) => {
    return (
        <div className={` cursor-pointer ${className}`} ref={refer}>{children}</div>
    )
}

export default Dropdown