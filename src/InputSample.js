import React , { useState , useRef} from "react";

function InputSample(){
    const [inputs , setInputs ] = useState({
        name: '',
        nickname:'',
    });

    const nameInput = useRef();
    const {name , nickname} = inputs;

    const onChange = (e) => {
        const {name , value} = e.target;

        setInputs({
            ...inputs,
            [name]: value,
        })

    }
    const reset = () => {
        setInputs({
            name:'',
            nickname: '',
        })
        nameInput.current.focus();
    }
    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={reset}>초기화</button>
            <div>
                <b>값 : {name}({nickname})</b>
            </div>
        </div>
    )
}

export default InputSample;