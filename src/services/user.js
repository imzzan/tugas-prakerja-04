const ApplicationError = require('../error/aplicationError.js')
const {create, findUser, getUser, updateUser, deleteUser} = require('../repository/user.js');
const { hashPassword } = require('./auth.js');


const createServices = async (requestBody) => {
    try {
        const {name, email, password} = requestBody;
        const hash = await hashPassword(password)
        const user = await create({name, email, password : hash});
        return user
    } catch (error) {
        console.log(error);
        throw new ApplicationError(`Faild: ${error.message}`, 500);
    }
}

const getUserServices = async () => {
    try {
        const user = await getUser();
        return user;
    } catch (error) {
        throw new ApplicationError(`Faild: ${error.message}`, 500);
    }
}

const detailUserService = async (id) => {
    try {
        const user = await findUser(id);
        return user
    } catch (error) {
        throw new ApplicationError(`Faild: ${error.message}`, 500);
    }
}

const updateUserServices = async (requestBody, id) => {
    try {
        const {name, email, password} = requestBody
        const user = await updateUser({name, email, password}, id);
        return user;
    } catch (error) {
        throw new ApplicationError(`Faild: ${error.message}`, 500);
    }
}

const deleteUserServices = async (id) => {
    try {
        const user = await deleteUser(id);
        return user
    } catch (error) {
        throw new ApplicationError(`Faild: ${error.message}`, 500);
    }
}


module.exports = {createServices, getUserServices, detailUserService, updateUserServices, deleteUserServices}