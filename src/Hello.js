import { render } from '@testing-library/react';
import React , {Component} from 'react';

class Hello extends Component{
    static defaultProps = {
        name: '이름없음'
    }
    render(){
        const {color, isSpecial, name} = this.props;
        return (
            <div style={{color}}>
                {isSpecial && <b>*</b>}
                안녕하세요 {name}
            </div>
        )
    }
}

// function Hello(props){
//     return <div style={{color}}>
//         {props.isSpecial && <b>*</b>}
//         안녕하세요 {props.name}</div>;
// }

// Hello.defaultProps ={
//     name : 'noname'
// }
export default Hello;