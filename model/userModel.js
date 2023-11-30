const mongoose = require('mongoose');
const validate = require('validator');

const authSchema = new mongoose.Schema({
    email: {
        type: 'string',
        required: true,
    },
    password: {
        type: 'string',
        required: true,
    },
    confirmPassword: {
        type: 'string',
        required: true,
        validate:{
            validators: function(el){
                return el === this.password
            },
            message: 'password must be the same',
        }
    },
})

const UserAuth = mongoose.model('UserAuth', authSchema);
module.exports = UserAuth;