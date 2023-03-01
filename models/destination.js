const {DataTypes} = require('sequelize')

const {sequelize} = require('../util/database')

module.exports = {
    Destination: sequelize.define('destination', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: DataTypes.STRING,
        imageURL: DataTypes.TEXT,
        international: DataTypes.BOOLEAN,
        notes: DataTypes.STRING(1000)
    })
}