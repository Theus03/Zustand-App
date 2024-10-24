import useUserStore from "../../store/user";

const Home = () => {
    const users = useUserStore(state => state.users);
    const removeUser = useUserStore(state => state.removeUser);

    const onRemoveUser = (id: number) => removeUser(id);
    
    return(
        <div>
            {users?.map(user => (
                <div>
                    <p key={Math.random()}>{user.name} | {user.email}</p>
                    <button type="button" name="button" onClick={() => onRemoveUser(user.id)}>Remover</button>
                </div>
            ))}
        </div>
    )
}

export default Home;