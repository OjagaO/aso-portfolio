import React from 'react';

const BlackLine = (props) => {
    return (
        <>
            <div className="black_sheet">
                <div className="extend_line">
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default BlackLine;