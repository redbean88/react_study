import React from "react";

function User({user}){
    return (<div>{user.username}<span>({user.email})</span>
    </div>)
}

function UesrList(){
    const users = [
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
    ]
    return (
    <div>
        {
            users.map(
                (user, index) => (<User user={user} key={user.id}/>)
            )
        }
    </div>
    );
}

export default UesrList