import React, {useRef , useState } from "react";
import UesrList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const [inputs , setInputs] = useState({
    username: '',
    email: '',
  })
  const {username , email} = inputs;
  const onChange = e => {
    const {name , value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'tester',
        email: 'test@test.com',
    },
    {
        id: 2,
        username: 'tester1',
        email: 'test1@test.com',
    },
    {
        id: 3,
        username: 'tester2',
        email: 'test2@test.com',
    }
]);

const nextId = useRef(4)

const onCreate = () => {
  const user = {
    id: nextId.current,
    username,
    email,
  }
  // setUsers([...users, user]);
  setUsers(users.concat(user));
  setInputs({
    username:'',
    email:''
  });
  nextId.current += 1;
}

const onRemove = (id) => {
  setUsers(users.filter(user => user.id !== id));
};

  return (
    <>
      <CreateUser username={username} email = {email} onChange = {onChange} onCreate = {onCreate}/>
      <UesrList users={users} onRemove={onRemove}/>
    </>
  );
}

export default App;
