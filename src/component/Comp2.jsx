import { useState } from "react";

const Comp2 = () => {

// state : 일반 자바 객체로 component에서 변할 수 있는 값


// lifeCycle(생명주기)
// 마운트 : 컴포넌트가 생성되고 브라우저에 출력될 때
// constructor : 컴포넌트가 새로 만들어 질 때마다 호출 되는 클래스 생성자 메소드
// render : 랜더링 메소드
// componentDidMount : 처음 랜더링 될 때 호출

// 업데이트 : props나 state가 바뀔 때 부모컴포넌트가 재랜더링 될때
// shouldComponentUpdate : props나 state가 변경됐을 때 재랜더링을 할지 결정하는 메소드
// render : 재랜더링 
// componentDidUpdate : 컴포넌트의 업데이트 작업이 끝난 후 호출 

// 언마운트 : 마운트의 반대, 컴포넌트가 제거 될 때
// componentWillUnmount : 컴포넌트가 브라우저에서 사라지기 전에 호출하는 메소드

// state를 바꾸기 위해서 set함수를 실행해야 useState가 감지해서
// 자식 컴포넌트까지 재랜더링이 발생한다.

// Hook은 함수형 컴포넌트에서 리액트의 state와 
// 생명주기 기능을 연동(hook) 할 수 있게 해주는 함수

// useState()
// const [ 변수명, 함수명 ] = useState(초기값);

    const [ param1, setParam1 ]= useState("초기값")

    const func1 = () => {
        setParam1("안녕하세요")    
    }

    const [count, setCount] = useState(100);
    const onIncrease = () => {
        setCount(count+1);
    }
    const onDecrease = () => {
        setCount(count-1);
    }

    const [param2, setParam2] = useState("");
    const textInput = (e) => {
        console.log(e.target.value);
        console.log(e.target.name);
        setParam2(e.target.value);
    }

    const [color, setColor] = useState("red")
    const style = {
        color : color,
        backgroundColor : "black"
    }


    return (
        <div className="comp2 comp">
            <p>{param1}</p>
            <button onClick={func1}>버튼</button>
            <h2>Comp2.jsx</h2>
            <p>count : {count}</p>
            <button onClick={onDecrease}>--</button>
            <button onClick={onIncrease}>++</button>
            <br/>
            <input type="text" onChange={textInput} name="param2" />
            <p> 입력값: {param2}</p>
            <br/>
            <p style={style}>안녕하세요</p>
            <button onClick={()=>setColor("red")}>빨강</button>
            <button onClick={()=>setColor("green")}>초록</button>
            <button onClick={()=>setColor("blue")}>파랑</button>

        </div>
    )
}

export default Comp2;