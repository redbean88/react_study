import React , {useContext} from "react";
import { UserDispatch } from "./App"

const User = React.memo(function User({user }){
    const {username , email , id, active} = user;
    const dispatch = useContext(UserDispatch);

    return (
    <div 
        style={{
            color: active ? 'green' : 'black',
            cursor:'pointer'
        }}
        onClick={() => dispatch({
            type: 'TOGGLE_USER',
            id
        })}
    >{username}<span>({email})</span>
    <button 
        onClick={() => dispatch({
            type: 'REMOVE_USER' ,
            id
        })}
    >삭제</button>
    </div>
    
    )
})

function UesrList({users }){
    
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

export default React.memo(UesrList)