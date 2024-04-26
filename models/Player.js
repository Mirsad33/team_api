const { DataTypes, Model } = require('sequelize');
const client = require('../db/client'); 
const { hash, compare } = require('bcrypt');

class Player extends Model {
    async validatePass(formPassword) {
        const is_valid = await compare(formPassword, this.password);
        return is_valid;
    }

    toJSON() {
        const player = Object.assign({}, this.get())

        delete player.password

        return player
    }
}

Player.init(
    {
        player_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            unique: {
                args: true,
                msg: 'That email address is already in use'
            },
            validate: {
                isEmail: true
            },
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: 10,
                    mssg: 'Your password must be at least 10 characters in length'
                }
            },
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize: client,
        modelName: 'player',
        hooks: {
            async beforeCreate(user) {
                user.password = await hash(user.password, 10);
            }
        },
        timestamps: false
    }
);

module.exports = Player;
