import React, {useRef , useReducer, useMemo, useCallback} from "react";
import UesrList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users){
  console.log('사용자 카운팅 중')
  return users.filter(user => user.active).length;
}

const initailState = {
  inputs : {
    username: '',
    email: '',
  },
  users : [
    {
        id: 1,
        username: 'tester',
        email: 'test@test.com',
        active: true,
      },
      {
        id: 2,
        username: 'tester1',
        email: 'test1@test.com',
        active: false,
      },
      {
        id: 3,
        username: 'tester2',
        email: 'test2@test.com',
        active: false,
    }
  ]
};

function reducer(state, action){
  switch(action.type){
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs:{
          ...state.inputs,
          [action.name]: action.value
        }
      }
    case 'CREATE_USER':
      return {
        inputs : initailState.inputs,
        users : state.users.concat(action.user)
      }
    case 'TOGGLE_USER':
      return{
        ...state,
        users: state.users.map(
          user => user.id === action.id ? 
          {...user, active: !user.active} 
          : user
        )
      }
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
    default:
      throw new Error();
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer , initailState);
  const nextId = useRef(4)
  const {users} = state;
  const {username , email} = state.inputs;

  const onChange = useCallback(e => {
    const {name , value} = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    })
  }, [])

  const onCreate = useCallback(e => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    });
    nextId.current += 1;
  }, [username, email])

  const onToggle = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id,
    })
  },[])

  const onRemove = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    })
  },[])

  const count = useMemo(() => countActiveUsers(users) , [users])

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UesrList users={users} onToggle={onToggle} onRemove={onRemove}/>
      <div>활성 사용자수 : {count}</div>
    </>
  );
}

export default App;
