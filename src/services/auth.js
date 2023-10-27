const bcrypt = require('bcrypt');
const ApplicationError = require('../error/aplicationError.js');

const hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt()
        const hashPassword = await bcrypt.hash(password, salt);
        return hashPassword;
    } catch (error) {
        throw new ApplicationError(`Faild: ${error.message}`, 500);
    }
}

module.exports = {hashPassword}