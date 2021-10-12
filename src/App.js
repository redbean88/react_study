import React, {useRef , useReducer, useMemo, useCallback , createContext} from "react";
import UesrList from "./UserList";
import produce from "immer"
import CreateUser from "./CreateUser";
import useInputs from "./useInputs";

function countActiveUsers(users){
  console.log('사용자 카운팅 중')
  return users.filter(user => user.active).length;
}

const initailState = {
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
    case 'CREATE_USER':
      return produce(state , draft => {
        draft.users.push(action.user)
      })
      // return {
      //   inputs : initailState.inputs,
      //   users : state.users.concat(action.user)
      // }
    case 'TOGGLE_USER':
      return produce(state , draft => {
        const user = draft.users.find(user => user.id === action.id);
        console.log(user)
        user.active = !user.active;
      });
      // return{
      //   ...state,
      //   users: state.users.map(
      //     user => user.id === action.id ? 
      //     {...user, active: !user.active} 
      //     : user
      //   )
      // }
    case 'REMOVE_USER':
      return produce(state , draft => {
        const index = draft.users.findIndex(user => user.id === action.id)
        draft.users.splice(index, 1)
      });
      // return {
      //   ...state,
      //   users: state.users.filter(user => user.id !== action.id)
      // }
    default:
      throw new Error();
  }
}

export const UserDispatch = createContext(null)

function App() {
  const [state, dispatch] = useReducer(reducer , initailState);

  const [form, onChange , reset] = useInputs({
    username:'',
    email:  '',
  })
  
  const {username , email} = form;
  const nextId = useRef(4)
  const {users} = state;

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
    reset()
  }, [username, email, reset])

  const count = useMemo(() => countActiveUsers(users) , [users])

  return (
    <>
      <UserDispatch.Provider value={dispatch}>
        <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
        <UesrList users={users}/>
      </UserDispatch.Provider>
      <div>활성 사용자수 : {count}</div>
    </>
  );
}

export default App;
