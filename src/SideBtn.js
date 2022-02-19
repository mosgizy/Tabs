import React from 'react'

const SideBtn = ({name,changeExpr,active,id}) => {
    return <button className={`link ${(active === id ? "active" : "")}`} onClick={changeExpr}>{name}</button>
}

export default SideBtn
