import React from 'react'

const Info = ({title,name,period}) => {
    return (
        <>
            <h2 className='title'>{title}</h2>
            <p className="name">{name}</p>
            <p className="period">{period}</p>
        </>
    )
}

export default Info
