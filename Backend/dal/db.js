const { Sequelize, DataTypes } = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize('Movies-App', 'sa', '12345678', {
    host: 'localhost',
    dialect: 'mssql',
    dialectOptions: {
        instanceName: 'Ori-Nissim\SQLEXPRESS'
    }
});

async function checkConnection() {
    try {
        await sequelize.authenticate();
        // sequelize.sync({ force: true});
        console.log('Connection has been established successfully.');
        return Promise.resolve();

    } catch (error) {
        console.error('Unable to connect to the database:', error);
        return Promise.reject();
    }

}
module.exports = { sequelize, checkConnection };