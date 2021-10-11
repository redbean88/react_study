import React , {useEffect} from "react";

const User = React.memo(function User({user , onRemove, onToggle}){
    const {username , email , id, active} = user;
    useEffect(() => {

        return () => {
            
        }
    }, [])
    return (
    <div onClick={() => onToggle(id)} style={{color: active ? 'green' : 'black', cursor:'pointer'}}>{username}<span>({email})</span>
    <button onClick={() => onRemove(id)}>삭제</button>
    </div>
    
    )
})

function UesrList({users , onRemove, onToggle}){
    
    return (
    <div>
        {
            users.map(
                (user, index) => (<User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>)
            )
        }
    </div>
    );
}

export default React.memo(UesrList)