const Player = require('../models/Player');

exports.home = (req, res, next) => {
    res.render('index', {
       title: 'Mid Term',
      });
};

exports.getPlayers = (req, res) => {
    //Use the Game model to query our mongodb for the game data and assign it to games
  
    Player.find((err, players) => {
      if (err) {
        res.render('error');
      } else {
        res.render('players', { 
          title: 'Players',
          players,
        }); 
      }
    });
  };