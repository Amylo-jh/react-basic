import React from 'react';

const Student = (props) => {
    // properties
    // 부모(상위) 컴포넌트에서 자식(하위) 컴포넌트로 파라미터를 전달
    const { name, age, addr } = props.stu;
    return (
        <div className='student'>
            <p>이름 : {name}</p>
            <p>나이 : {age}</p>
            <p>주소 : {addr} </p>

        </div>

    );
};

export default Student;