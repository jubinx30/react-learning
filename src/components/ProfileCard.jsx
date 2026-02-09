

function ProfileCard({name,age,greeting,children}){
    
    return (
        
            <>
            <h2> name: {name}</h2>
            <p>age: {age}</p>
            <p>{greeting}</p>
            {children}
            </>
            )   
}

export default ProfileCard;