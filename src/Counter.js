import React , { Component} from "react";


class Counter extends Component{

    constructor(props){
        super(props);
        this.state = {
            counter : 0
        }
    }

    onIncrease = () => {    //함수형
        this.setState(state => ({
            counter: this. state.counter + 1
        }));
    }
    
    onDecraese = () => {    //일반형
        this.setState({
            counter: this. state.counter - 1
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.onIncrease}>+1</button>
                <button onClick={this.onDecraese}>-1</button>
            </div>
        )
    }
}

// function reducer(state, action){
//     switch(action.type){
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         default:
//             throw new Error('no action')
//     }

// }

// function Counter(){

//     const [number, dispatch] = useReducer(reducer , 0);

//     const onIncrease = () => {
//        dispatch({
//            type: 'INCREMENT'
//        })
//     }
//     const onDecraese = () => {
//         dispatch({
//             type: 'DECREMENT'
//         })
//     }

//     return (
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onIncrease}>+1</button>
//             <button onClick={onDecraese}>-1</button>
//         </div>
//     )
// }

export default Counter;