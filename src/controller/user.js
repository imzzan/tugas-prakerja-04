const {createServices, getUserServices, detailUserService, updateUserServices, deleteUserServices} = require('../services/user.js')

const createUser = async (req, res) => {
    try {
        const response = await createServices(req.body);
        res.json({status : "OK", message : "Success", data : response})
    } catch (error) {
        res.json({status : "Faild", message : error.message})
    }
}


const getAllUsers = async (req, res) => {
    try {
        const response = await getUserServices();
        res.json({status : "OK", message : "Success", data : response})
    } catch (error) {
        res.json({status : "Faild", message : error.message})
    }
}


const getAllUserById = async (req, res) => {
    try {
        const id = req.params.id
        const response = await detailUserService(id);
        res.json({status : "OK", message : "Success", data : response})
    } catch (error) {
        res.json({status : "Faild", message : error.message})
    }
}

const updateUser = async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        const [_, response] = await updateUserServices(body, id);
        res.json({status : "OK", message : "Success", data : response})
    } catch (error) {
        res.json({status : "Faild", message : error.message})
    }
}


const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        await deleteUserServices(id);
        res.json({status : "OK", message : "Success deleted user"})
    } catch (error) {
        res.json({status : "Faild", message : error.message})
    }
}

module.exports = {createUser, getAllUsers, getAllUserById, updateUser, deleteUser}