import { create } from "zustand";

type UserType = {
    id: number;
    name: string;
    email: string;
}

type State = {
    users: UserType[];
    addUser: (user: UserType) => void;
    removeUser: (id: number) => void;
}

const useUserStore = create<State>((set) => ({
    users: [],

    addUser(user: UserType) {
        set(state => ({ users: [...state.users, user] }))
    },

    removeUser(id: Number) {
        set((state) => ({
            users: state.users.filter((user) => user.id !== id),
        }));
    },
}));


export default useUserStore;