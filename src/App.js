import React, {useRef , useState, useMemo, useCallback} from "react";
import UesrList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users){
  console.log('사용자 카운팅 중')
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs , setInputs] = useState({
    username: '',
    email: '',
  })
  const {username , email} = inputs;
  
  const onChange = useCallback(e => {
    const {name , value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }, [inputs]);

  const [users, setUsers] = useState([
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
]);

const nextId = useRef(4)

const onCreate = useCallback(() => {
  const user = {
    id: nextId.current,
    username,
    email,
  }
  // setUsers([...users, user]);
  setUsers(users => users.concat(user));
  setInputs({
    username:'',
    email:''
  });
  nextId.current += 1;
}, [username, email]);

const onRemove = useCallback((id) => {
  setUsers(users => users.filter(user => user.id !== id));
},[]);

const onToggle = useCallback(id => {
  setUsers(users => users.map(user => user.id === id ? {...user, active: !user.active} : user))
},[])

const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser username={username} email = {email} onChange = {onChange} onCreate = {onCreate}/>
      <UesrList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성 사용자수 : {count}</div>
    </>
  );
}

export default App;
