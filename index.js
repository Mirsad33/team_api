const { Sequelize, DataTypes, Model } = require('sequelize')
const { hash, compare } = require('bcrypt')

const client = new Sequelize(
    'sequelize_practice_db', 
    'postgres', 
    'Struga3387', 
    {
    host: 'localhost',
    dialect: 'postgres',
    // logging: false
  });

class Note extends Model {}

Note.init(
    {
        text: {
            type: DataTypes.STRING,//Similar to VARCHAR(255)
            allowNull: false
        }
    },
    {
        sequelize: client
    }
             
)

class User extends Model {
    async validatePass(formPassword) {
        const is_valid = await compare(formPassword, this.password)

        return is_valid
    }
}

User.init(
    {
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
        }
        
    },
    {
        sequelize: client,
        hooks: {
            async beforeCreate(user) {
                user.password = await hash(user.password, 10)
            }
        }
        //timestamps: false
    }
             
)
// One to Many Relationship - Setting up the foreign key association
User.hasMany(Note) //userId on each note
Note.belongsTo(User) //userId on each note

client.sync({ force: false })
    .then(async () => {

        try {
            const user = await User.findByPk(3)
            const formPassword = '1234567890'

            const valid = await user.validatePass(formPassword)

            if (valid) {
                console.log('Password is correct. Logging you in...')
            } else {
                console.log('Your password is incorrect. Please try again.')
            }

            // const user = await User.create({
            //     email: 'jd@test.com',
            //     password: '1234567890'
            // })
            // await User.destroy({
            //     where: {},
            // })

            // await Note.destroy({
            //     where: {},
            // })

            // console.log('users and notes gone')

            // const users = await User.findAll({
            //     include: Note
            // })

            // console.log(users[0])

            // const user = await User.findOne({
            //     where: {
            //         email: 'jd@test.com'
            //     },
            //     include: Note
            // })

            //Show text only

            // const user = await User.findOne({
            //     where: {
            //         email: 'jd@test.com'
            //     },
            //     include: {
            //         model: Note,
            //         attributes: ['text']
            //     }
            // })

            // console.log(user.Notes)

            // const note = await Note.create({
            //     text: 'Random Note',
            //     UserId: user.id
            // })

            // console.log(note)

            // const jd = await User.findByPk(1)

            
            
            // const jd = await User.create({
            //     email: 'jd@test.com',
            //     password: '1234567890'
            // })
            
            //     const note = await jd.createNote({
            //         text: 'Note one for jd'
            //     })

            
        } catch (err) {
            console.log(err)
        }
            

        

     
        


        // Create a new row in a table
        // const note = await Note.create({
        //     text: 'Text for note five'
        // })

        
        
        // Find all notes
        // const notes = await Note.findAll({
            //     attributes: ['text'],
        //     where: {
        //         id: 1
        //     }
        // })

        // Find one
        
        // const note = await Note.findOne({
            //     where: {
                //         id: 1
                //     }
                // })
                
                
        //         // Find by primary key(id)
        // const note = await Note.findByPk(3)
          
        // console.log(note)

        

        // Note.findAll()
        //     .then(notes => {
        //         console.log(notes[1].text)
        //     })
        
        
        // `
        // DELETE FROM Notes WHERE id = 1 
        // `
        // Delete a row from Notes
        // const result = await Note.destroy({
        //     where: {
        //         id: 5
        //     }
        // })

        // console.log(result)
        // // const results = await Note.update(
        // //     {
        // //         text: 'New text for note 1'
        // //     },
        // //     {
        // //         where: {
        // //             id: 1
        // //         },
        // //         returning: true
        // //     }
        // )

        // console.log(results[1][0])
    })
    