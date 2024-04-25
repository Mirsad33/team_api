const { Sequelize, DataTypes, Model } = require('sequelize')
const { hash, compare } = require('bcrypt');


const client = new Sequelize(
    'teams_db', 
    'postgres', 
    'Struga3387', 
    {
    host: 'localhost',
    dialect: 'postgres',
    // logging: false
  });

class Team extends Model {}

Team.init(
    {
        team_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,//Similar to VARCHAR(255)
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        coach: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize: client,
        modelName: 'team',
        timestamps: false
    }
             
)


class Player extends Model {
    async validatePass(formPassword) {
        const is_valid = await compare(formPassword, this.password)
        
        return is_valid
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
            validate : {
                isEmail: true
            },
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                len: 10
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
        },
        
    },
    {
        sequelize: client,
        modelName: 'player',
        hooks: {
            async beforeCreate(user) {
                user.password = await hash(user.password, 10)
            }
        },
        timestamps: false
    }
    
)

Team.belongsToMany(Player, { through: 'team_player' })
Player.belongsToMany(Team, { through: 'team_player' })

client.sync({ force: false })
    .then(async () => {
        // const braves = await Team.findByPk(1, {
        //     include: Player
        // })

        // console.log(braves.get({ plain: true }))

        const julie = await Player.findByPk(1, {
            include: Team
        })

        console.log(julie.get({ plain: true }))

        // julie.addTeam(braves)

        // await braves.addPlayer(john)

        // console.log('Player has been added!')

        // const braves = await Team.create({
        //     name: 'Braves',
        //     type: 'baseball',
        //     coach: 'Brian Snitker'
        // })

        // console.log(braves)

    //     const julie = await Player.create({
    //         email: 'julie@test.com',
    //         password: '1234567899',
    //         first_name: 'Julie',
    //         last_name: 'Stan',
    //         age: 15
        
    //     }) 

    //     console.log(julie)

    //     const john = await Player.create({
    //         email: 'john@test.com',
    //         password: '1234567890',
    //         first_name: 'John',
    //         last_name: 'Smith',
    //         age: 18
        
    //     }) 

    //     console.log(john)
    })
    