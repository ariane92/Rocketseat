
interface CreateUserData {
    name?: string;
    email: string;
    password: string;
}

export default function createuser({name, email, password}: CreateUserData) {
    const user = {
        name,
        email,
        password
    }

    return user;
}