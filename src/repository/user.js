const {User} = require('../../models');

const create = (requestBody) => {
    return User.create(requestBody)
}

const getUser = () => {
    return User.findAll()
}

const findUser = (id) => {
    return User.findByPk(id);
}

const updateUser = (requestBody, id) => {
    return User.update(requestBody, {
        where : {
            id : id
        },
        returning: true,
    })
}

const deleteUser = (id) => {
    return User.destroy({
        where : {
            id : id
        }
    })
}

module.exports = {create, getUser, findUser, updateUser, deleteUser}