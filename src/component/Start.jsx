import React from 'react'

const Start = () => {

    const style = {
        color : "white",
        backgroundColor : "black",
        fontSize : "40px",
        fontWeight : "bold",
        padding : "16px"
    }
    // 주석 사용 가능
    const name = "Amylo"

    // jsx : Javascript and XML / Javascript Extension
    // 자바스크립트 확장 문법
    return(
        <div className="start">
            <h2>Start.jsx 영역</h2>
            <h2 style={style}>Name : {name}</h2>
            {React.createElement('h2', null, `${name}님 반갑습니다`)}
        </div>
    )
}

export default Start;