const {Sequelize ,DataTypes} = require('sequelize');
const sequelConnect = require('../dbConnect');

const Blog = sequelConnect.define('blogs',{
    id : {
        type: DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    title : {
        type : DataTypes.STRING,

    },
    description : {
        type : DataTypes.TEXT
    },
    author : {

        type : DataTypes.STRING 
    }

});

Blog.sync()

module.exports = Blog;
