import React from 'react';

function Hello(props){
    return <div>
        {props.isSpecial && <b>*</b>}
        안녕하세요 {props.name}</div>;
}

Hello.defaultProps ={
    name : 'noname'
}
export default Hello;