const mongoose =require('mongoose');

const usersSchema = ({
    name: String,
    surname: String,
    savs: []
})

const User = mongoose.model('User', usersSchema);

module.exports = User;