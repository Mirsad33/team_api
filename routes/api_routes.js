const router = require('express').Router()
// Import the Team and Player models

const { Team, Player } = require('../models')



// Helper function to handle errors
const handleError = (res, err) => {
    console.log('Error', err)
    res.json({ error: 'Internal Server Error' })
}

// Middleware to handle include options
const includeOptions = {
    include: {
        model: Player,
        attributes: {
            exclude: 'password'
        }
    }
}

// Create a GET route to get all teams and attach their associated players

router.get('/team', async (req, res) => {
    try {
        const teams = await Team.findAll({ include: Player });
        res.json(teams);
    } catch (error) {
        handleError(res, error);
    }
});

// Create a GET route to get all players and attach their associated teams
router.get('/players', async (req, res) => {
    try {
        const players = await Player.findAll(includeOptions);
        res.json(players);
    } catch (error) {
        handleError(res, error);
    }
});


// Create a GET route to get a single team by ID and attach their associated players 
router.get('/team/:teamId', async (req, res) => {
    const { teamId } = req.params;
    try {
        const team = await Team.findByPk(teamId, { include: Player });
        if (!team) {
            return res.json({ error: 'Team not found' });
        }
        res.json(team);
    } catch (error) {
        handleError(res, error);
    }
});


// Create a GET route to get a single player by ID and attach their associated teams
router.get('/players/:playerId', async (req, res) => {
    const { playerId } = req.params;
    try {
        const player = await Player.findByPk(playerId, { include: Team });
        if (!player) {
            return res.json({ error: 'Player not found' });
        }
        res.json(player);
    } catch (error) {
        handleError(res, error);
    }
});


// Create a POST route to create a team - receive req.body data with the required fields/columns
router.post('/team', async (req, res) => {
    const { name, type, coach } = req.body;
    try {
        const newTeam = await Team.create({ name, type, coach });
        res.json(newTeam);
    } catch (error) {
        handleError(res, error);
    }
});


router.post('/players', async (req, res) => {
    const { email, password, first_name, last_name, age } = req.body;
    try {
        const newPlayer = await Player.create({ email, password, first_name, last_name, age });
        res.json(newPlayer);
    } catch (error) {
        handleError(res, error);
    }
});

// Create a PUT route to update a players information - (ie. they send an object that looks like {first_name 'Billy} and you need to update that players row in the table to now have a first name of Billy

router.put('/players/:playerId', async (req, res) => {
    const { playerId } = req.params;
    const updatedInfo = req.body;
    try {
        const player = await Player.findByPk(playerId);
        if (!player) {
            return res.json({ error: 'Player not found' });
        }
        await player.update(updatedInfo);
        res.json(player);
    } catch (error) {
        handleError(res, error);
    }
});

// Create a PUT route to update a teams information 
router.put('/team/:teamId', async (req, res) => {
    const { teamId } = req.params;
    const updatedInfo = req.body;
    try {
        const team = await Team.findByPk(teamId);
        if (!team) {
            return res.json({ error: 'Team not found' });
        }
        await team.update(updatedInfo);
        res.json(team);
    } catch (error) {
        handleError(res, error);
    }
});

// Create a DELETE route to remove a player from the table 
router.delete('/players/:playerId', async (req, res) => {
    const { playerId } = req.params;
    try {
        const player = await Player.findByPk(playerId);
        if (!player) {
            return res.json({ error: 'Player not found' });
        }
        await player.destroy();
        res.sendStatus(204);
    } catch (error) {
        handleError(res, error);
    }
});

// Create a DELETE route to remove a team from the table 
router.delete('/team/:teamId', async (req, res) => {
    const { teamId } = req.params;
    try {
        const team = await Team.findByPk(teamId);
        if (!team) {
            return res.json({ error: 'Team not found' });
        }
        await team.destroy();
        res.sendStatus(204);
    } catch (error) {
        handleError(res, error);
    }
});

// Create a POST route to connect a player with a team
router.post('/team/:teamId/players/:playerId', async (req, res) => {
    const { teamId, playerId } = req.params;
    try {
        const team = await Team.findByPk(teamId);
        if (!team) {
            return res.json({ error: 'Team not found' });
        }

        const player = await Player.findByPk(playerId);
        if (!player) {
            return res.json({ error: 'Player not found' });
        }

        await team.addPlayer(player);

        res.json({ message: 'Player connected to team successfully' });
    } catch (error) {
        handleError(res, error);
    }
});


module.exports = router; 
