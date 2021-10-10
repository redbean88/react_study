import React from "react";

function User({user , onRemove}){
    const {username , email , id} = user;
    return (
    <div>{username}<span>({email})</span>
    <button onClick={() => onRemove(id)}>삭제</button>
    </div>
    
    )
}

function UesrList({users , onRemove}){
    
    return (
    <div>
        {
            users.map(
                (user, index) => (<User user={user} key={user.id} onRemove={onRemove}/>)
            )
        }
    </div>
    );
}

export default UesrList