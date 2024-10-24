import useUserStore from "../../store/user";

const UserForm = () => {
    const addUser = useUserStore(state => state.addUser);


    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const id = Math.random();
        const name = (e.target as any).name.value;
        const email = (e.target as any).email.value;

        addUser({ id, name, email });
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" id="" placeholder="Nome" />
                <input type="email" name="email" id="" placeholder="Email" />
                <button type="submit">Create User</button>
            </form>
        </div>
    )
}

export default UserForm;