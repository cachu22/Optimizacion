import UserDto from "../dtos/users.dto.js"

export default class UserRepository {
    constructor(userDao) {
        this.userDao = userDao;
    }

    getUsers = async () => {
        const users = await this.userDao.getAll();
        return users.map(user => new UserDto(user));
    }

    getUser = async (filter) => {
        const user = await this.userDao.getOne(filter);
        console.log('user en getUser-user.repository', user);
        return user
    }

    getUserInfo = async (filter) => {
        const user = await this.userDao.getOneInfo(filter);
        return user ? new UserDto(user) : null;
    }

    createUser = async (user) => {
        const newUser = new UserDto(user);
        return await this.userDao.create(newUser);
    }

    updateUser = async (uid, userToUpdate) => {
        if (userToUpdate.first_name || userToUpdate.last_name) {
            userToUpdate.fullname = `${userToUpdate.first_name || ''} ${userToUpdate.last_name || ''}`.trim();
        }
        const updatedUser = await this.userDao.update(uid, userToUpdate);
        return updatedUser ? new UserDto(updatedUser) : null;
    }

    deleteUser = async (uid) => {
        const deletedUser = await this.userDao.delete(uid);
        return deletedUser ? new UserDto(deletedUser) : null;
    }
}