const Sequelize = require('sequelize');
const config = require('../config');

const Djpackages = config.define('djpackages', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    type: {
        type: Sequelize.STRING,
        allowNull: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    base_price: {
        type: Sequelize.STRING,
        allowNull: true
    },
    duration_hours: {
        type: Sequelize.STRING,
        allowNull: true
    },
    sound: {
        type: Sequelize.STRING,
        allowNull: true
    },
    microphone: {
        type: Sequelize.STRING,
        allowNull: true
    },
    music: {
        type: Sequelize.STRING,
        allowNull: true
    },
    lights: {
        type: Sequelize.STRING,
        allowNull: true
    },
    emcee: {
        type: Sequelize.STRING,
        allowNull: true
    },
    details1: {
        type: Sequelize.STRING,
        allowNull: true
    },
    details2: {
        type: Sequelize.STRING,
        allowNull: true
    },
    details3: {
        type: Sequelize.STRING,
        allowNull: true
    },
    details4: {
        type: Sequelize.STRING,
        allowNull: true
    },
    recommended_for: {
        type: Sequelize.STRING,
        allowNull: true
    },
    cost_per_hour: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    created_at: {
        type: Sequelize.STRING,
        allowNull: true
    },
    updatedAt: {
        type: Sequelize.STRING,
        allowNull: true
    },

},
 {timestamps: true, updatedAt: false}
);

module.exports = Djpackages; 