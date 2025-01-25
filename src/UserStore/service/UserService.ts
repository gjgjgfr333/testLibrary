export class UserService {
    async getUser() {
        const response: Promise<Response> = fetch('https://jsonplaceholder.typicode.com/users')

        if ((await response).ok) {
            return (await response).json()
        } else {
            console.error('error')
        }
    }
}