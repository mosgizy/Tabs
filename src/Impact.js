import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'

const Impact = ({impact}) => {
    return <p className="para"><span className="arrow">
        <FontAwesomeIcon icon={faAnglesRight} />
    </span>{impact}
    </p>
}

export default Impact
