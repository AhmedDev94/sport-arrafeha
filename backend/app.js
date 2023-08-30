// IMPORT EXPRESS MODULE
const express = require("express");

//IMPORT BODY PARSER MODULE
const bodyParser = require("body-parser");

//import mongoose module
const mongoose = require("mongoose");

// import bcrypt module
const bcrypt = require("bcrypt");

//import multer module
const multer = require("multer");

// import path module
const path = require("path");

// import axios module
const axios = require("axios");

// IMPORT JSON WEBTOKEN module
const jwt = require('jsonwebtoken');

// import express session module
const session = require('express-session');

// CONNECT EXPRESS APP WITH DB VIA MONGOOSE
mongoose.connect("mongodb://127.0.0.1:27017/arrafehaDB");

// CREATE EXPRESS APPLICATION ,
const app = express();

// CONFIRURATION DU BODY PARSER

//SEND JSON RESPONSES
app.use(bodyParser.json());

// GET OBJ FROM REQUEST
app.use(bodyParser.urlencoded({ extended: true }));

// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});
//path confiruration (shortcut for multer path to be used in data base)
app.use('/images', express.static(path.join('backend/images'))) ;


const MIME_TYPE = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
 }

 const storage = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
  const isValid = MIME_TYPE[file.mimetype];
  let error = new Error("Mime type is invalid");
  if (isValid) {
  error = null;
  }
  cb(null, 'backend/images')
  },
  filename: (req, file, cb) => {
  const name = file.originalname.toLowerCase().split(' ').join('-');
  const extension = MIME_TYPE[file.mimetype];
  const imgName = name + '-' + Date.now() + '-crococoder-' + '.' + 
 extension;
  cb(null, imgName);
  }
 });
const secretKey = 'Croco2023Venus';
app.use
(session({
secret: secretKey,
}));


//models importation

const Match = require("./models/match");
const Player = require("./models/player");
const Team = require("./models/team");
const Imc = require("./models/imc");
const User = require("./models/user");


//DB simulation

let matchesTab = [
  { id: 1, scoreOne: 3, scoreTwo: 2, teamOne: "FCB", teamTwo: "juv" },
  { id: 2, scoreOne: 0, scoreTwo: 1, teamOne: "FCB", teamTwo: "juv" },
  { id: 3, scoreOne: 2, scoreTwo: 2, teamOne: "FCB", teamTwo: "juv" },
  { id: 4, scoreOne: 2, scoreTwo: 2, teamOne: "test1", teamTwo: "test2" },
];
let teamsTab = [
  {
    id: 1,
    image: "assets/images/logo_1.png",
    name: "ba9lewa",
    stadium: "bardo",
    owner: "ali",
  },
  {
    id: 2,
    image: "assets/images/logo_2.png",
    name: "esperance",
    stadium: "rades",
    owner: "med",
  },
  {
    id: 3,
    image: "assets/images/logo_3.png",
    name: "barcelone",
    stadium: "camp now",
    owner: "salah",
  },
];

let playersTab = [
  { id: 1, name: "ahmed", age: 22, position: "midfilder" },
  { id: 2, name: "taha", age: 24, position: "goalkeeper" },
  { id: 3, name: "yassine", age: 26, position: "defender" },
  { id: 4, name: "abdo", age: 20, position: "attackant" },
];

function newId(T) {
  let max;
  if (T.length == 0) {
    max = 1;
  } else {
    max = T[0].id;

    for (let i = 1; i < T.length; i++) {
      if (T[i].id > max) {
        max = T[i].id;
      }
    }
  }
  return max + 1;
}

//buisness logic
//BUISNESS LOGIC : GET ALL MATCHES and players and teams

app.get("/matches", (req, res) => {
  //traitement de la request
  console.log("here into BL : get all matches");
  Match.find().then((data) => {
    res.json({ matches: data });
  });
});
app.get("/players", (req, res) => {
  console.log("here into BL : get all players");
  Player.find().then((data) => {
    res.json({ players: data });
  });
  //
  //traitement de la request
});
app.get("/teams", (req, res) => {
  console.log("here into BL : get all teams");
  Team.find().then((data) => {
    res.json({ teams: data });
  });

  // res.json({ teams: teamsTab });
  //traitement de la request
});

//BUISNESS LOGIC : get match and player and team by id
// ID IS A PARAM

app.get("/matches/:id", (req, res) => {
  //traitement de la request
  console.log("here into BL : get match by id ");
  let id = req.params.id;
  //   let findedMatch = matchesTab.find((elt) => {
  //     return elt.id == id;
  //   });
  //   console.log("here finded match ", findedMatch);
  //   findedMatch
  //     ? res.json({ match: findedMatch })
  //     : res.json({ msg: "not found" });
  Match.findOne({ _id: id }).then((data) => {
    res.json({ match: data });
  });
});

app.get("/players/:id", (req, res) => {
  //traitement de la request
  console.log("here into BL : get player by id ");
  let id = req.params.id;
  // let findedPlayer = playersTab.find((elt) => {
  //   return elt.id == id;
  // });
  // console.log("here finded player ", findedPlayer);
  // findedPlayer
  //   ? res.json({ player: findedPlayer })
  //   : res.json({ msg: "not found" });
  Player.findOne({ _id: id }).then((data) => {
    res.json({ player: data });
  });
});
app.get("/teams/:id", (req, res) => {
  //traitement de la request
  console.log("here into BL : get team by id ");
  let id = req.params.id;
  // let findedTeam = teamsTab.find((elt) => {
  //   return elt.id == id;
  // });
  // console.log("here finded team ", findedTeam);
  // findedTeam ? res.json({ team: findedTeam }) : res.json({ msg: "not found" });
  Team.findOne({ _id: id }).then((data) => {
    res.json({ team: data });
  });
});

// BUISNESS LOGIC : delete match and player and team
// ID IS A PARAM

app.delete("/matches/:id", (req, res) => {
  //traitement de la request
  let id = req.params.id;
  //   x = false;
  //   for (let i = 0; i < matchesTab.length; i++) {
  //     if (matchesTab[i].id == id) {
  //       matchesTab.splice(i, 1);
  //       x = true;
  //       break;
  //     }
  //   }
  //   x
  //     ? res.json({ msg: "deleted with success", id: id })
  //     : res.json({ msg: "not found" });
  Match.deleteOne({ _id: id }).then((data) => {
    console.log("here data after delete ", data);
    data.deletedCount == 1
      ? res.json({ msg: "deleted with success" })
      : res.json({ msg: "Not deleted" });
  });
});

// ID IS A PARAM

app.delete("/players/:id", (req, res) => {
  //traitement de la request
  let id = req.params.id;
  // x = false;
  // for (let i = 0; i < playersTab.length; i++) {
  //   if (playersTab[i].id == id) {
  //     playersTab.splice(i, 1);
  //     x = true;
  //     break;
  //   }
  // }
  // x
  //   ? res.json({ msg: "deleted with success", id: id })
  //   : res.json({ msg: "not found" });
  Player.deleteOne({ _id: id }).then((data) => {
    console.log("here data after delete ", data);
    data.deletedCount == 1
      ? res.json({ msg: "deleted with success" })
      : res.json({ msg: "Not deleted" });
  });
});

app.delete("/teams/:id", (req, res) => {
  //traitement de la request
  let id = req.params.id;
  // x = false;
  // for (let i = 0; i < teamsTab.length; i++) {
  //   if (teamsTab[i].id == id) {
  //     teamsTab.splice(i, 1);
  //     x = true;
  //     break;
  //   }
  // }
  // x
  //   ? res.json({ msg: "deleted with success", id: id })
  //   : res.json({ msg: "not found" });
  Team.deleteOne({ _id: id }).then((data) => {
    console.log("here data after delete ", data);
    data.deletedCount == 1
      ? res.json({ msg: "deleted with success" })
      : res.json({ msg: "Not deleted" });
  });
});

//BUISNESS LOGIC : update match , player and team

app.put("/matches", (req, res) => {
  //traitement de la request
  console.log("here in BL : update match");
  let newMatch = req.body;
  //   for (let i = 0; i < matchesTab.length; i++) {
  //     if (matchesTab[i].id == newMatch.id) {
  //       matchesTab[i] = newMatch;
  //       break;
  //     }
  //   }
  //   res.json({ msg: "updtated with success" });
  Match.updateOne({ _id: newMatch._id }, newMatch).then((data) => {
    console.log("here data after update", data);
    data.nModified == 1
      ? res.json({ msg: "updated with success" })
      : res.json({ msg: "Not updated" });
  });
});

app.put("/players", (req, res) => {
  //traitement de la request
  console.log("here in BL : update player");
  let newPlayer = req.body;
  // for (let i = 0; i < playersTab.length; i++) {
  //   if (playersTab[i].id == newPlayer.id) {
  //     playersTab[i] = newPlayer;
  //     break;
  //   }
  // }
  // res.json({ msg: "updtated with success" });
  Player.updateOne({ _id: newPlayer._id }, newPlayer).then((data) => {
    console.log("here data after update", data);
    data.nModified == 1
      ? res.json({ msg: "updated with success" })
      : res.json({ msg: "Not updated" });
  });
});

app.put("/teams", (req, res) => {
  //traitement de la request
  console.log("here in BL : update team");
  let newTeam = req.body;
  // for (let i = 0; i < teamsTab.length; i++) {
  //   if (teamsTab[i].id == newTeam.id) {
  //     teamsTab[i] = newTeam;
  //     break;
  //   }
  // }
  // res.json({ msg: "updtated with success" });
  Team.updateOne({ _id: newTeam._id }, newTeam).then((data) => {
    console.log("here data after update", data);
    data.nModified == 1
      ? res.json({ msg: "updated with success" })
      : res.json({ msg: "Not updated" });
  });
});

//BUISNESS LOGIC : add match , player and team

app.post("/matches", (req, res) => {
  //traitement de la request
  console.log("here into BL : add match", req.body);
  // let obj = req.body;
  // match=> instance de type Match
  let match = new Match(req.body);
  //  save => methode predefinie mongoose
  match.save((err, doc) => {
    console.log("here err", err);
    console.log("here doc", doc);
    err ? res.json({ msg: "error" }) : res.json({ msg: "added successfully" });
  });
  // obj.id = newId(matchesTab);
  // matchesTab.push(obj) ;
});

app.post("/players", (req, res) => {
  //traitement de la request
  console.log("here into BL : add player", req.body);
  let obj = req.body;
  // obj.id = newId(playersTab);
  // playersTab.push(obj);
  // player=> instance de type player
  let player = new Player(req.body);
  //  save => methode predefinie mongoose
  player.save((err, doc) => {
    console.log("here err", err);
    console.log("here doc", doc);
    err ? res.json({ msg: "error" }) : res.json({ msg: "added successfully" });
  });
});

app.post("/teams", (req, res) => {
  //traitement de la request
  console.log("here into BL : add team", req.body);
  let obj = req.body;
  // obj.id = newId(teamsTab);
  // teamsTab.push(obj);
  let team = new Team(req.body);
  team.save((err, doc) => {
    console.log("here err", err);
    console.log("here doc", doc);
    err ? res.json({ msg: "error" }) : res.json({ msg: "added successfully" });
  });
});

// buisness logic search matcches ny score one or score two
app.get("/matches/:scoreOne/:scoreTwo", (req, res) => {
  let findedMatchs = Match.find({
    $or: [{ scoreOne: req.params.scoreOne }, { scoreTwo: req.params.scoreTwo }],
  }).then((data) => {
    res.json({ match: data });
  });
  console.log("here finded matchS ", findedMatchs);
});

//SECOND METHOD

app.post("/matches/search", (req, res) => {
  console.log("here into BL : search ");
  let obj = req.body;
  console.log("here obj", obj);
  let findedMatchs = matchesTab.filter((elt) => {
    return elt.scoreOne == obj.scoreOne || elt.scoreTwo == obj.scoreTwo;
  });
  res.json({ tab: findedMatchs });
});
// app.post("/search", (req, res) => {
//   let obj = req.body;
//   let findedPlayers = playersTab.filter((elt) => {
//     return elt.name == obj.name || elt.age == obj.age;
//   });
//   console.log("here finded players ", findedPlayers);

//   res.json({ players: findedPlayers });
//   if (findedPlayers.length == 0) {
//     res.json({ msg: "not found" });
//   }
// });
app.post("/search", (req, res) => {
  //traitement de la request
  console.log("here into BL : add team", req.body);
  let imc = new Imc(req.body);
  let taille = req.body.taille;
  let poids = req.body.poids;
  let result = poids / (taille * taille * 0.0001);
  imc.imc = result;
  let msg;
  if (imc.imc <= 18.5) {
    msg = "maigre";
  } else if (imc.imc > 18.5 && imc.imc <= 25) {
    msg = "normale";
  } else if (imc.imc > 25 && imc.imc < 30) {
    msg = "surpoids";
  } else msg = "obese";
  imc.save((err, doc) => {
    console.log("here err", err);
    console.log("here doc", doc);
    err
      ? res.json({ msg: "error" })
      : res.json({ imc: imc.imc, msg: msg, name: imc.name });
  });
});

app.post("/users/signup", multer({ storage: storage }).single('img'), (req, res) => {
  console.log("here into BL : signup", req.body);
  bcrypt.hash(req.body.pwd, 10).then((cryptedPwd) => {
    console.log("here crypted pwd", cryptedPwd);
    req.body.pwd = cryptedPwd;
    req.body.avatar = "http://localhost:3000/images/" + req.file.filename;
    let user = new User(req.body);
    user.save((err, doc) => {
      console.log("here error", err);
      console.log("here doc", doc);
      if (err) {
        if (err.errors.email) {
          // msg = 0 c a d email exist
          res.json({ msg: "0" });
        }
      }
      else {
        res.json({ msg: "success" });
      }
    });
  });
});
app.post("/users/login", (req, res) => {
  let user ;
  console.log("here into BL : login", req.body);
  User.findOne({ email: req.body.email }).then((doc) => {
    console.log("here doc after searching by email" , doc);
    if (!doc) {
      res.json({msg :"please check your email"})
    }
    else {
      user=doc ;
      return bcrypt.compare(req.body.pwd , doc.pwd)
    }
  }).then((pwdResult)=> {console.log("here pwdResult" , pwdResult)
  if (!pwdResult) {
    res.json({msg :"please check your password"})
  }
  else{
    let userToSend = {
       id : user._id ,
       fName : user.firstName , 
       lName : user.lastName,
       role : user.role};
    const token = jwt.sign(userToSend, secretKey, { expiresIn:
        '1h' });
    res.json({result : token , msg : "success"})
  }})

});
 app.post("/weather" , (req,res)=>{
  console.log(req.body)
  const key ="346c7756068c38835ee31a9fdc210059";
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${key}`;
  axios.get(weatherURL).then((apiResponse)=>{
    console.log("api response" , apiResponse.data);
    let obj ={};
    obj.temp = apiResponse.data.main.temp
    obj.humidity = apiResponse.data.main.humidity
    obj.windSpeed = apiResponse.data.wind.speed
    obj.pressure = apiResponse.data.main.pressure
    obj.icone = apiResponse.data.weather[0].icon
    console.log("here " ,obj)
    res.json({
      result:obj
      })
  })
  
 });
 app.post('/standings', async (req, res) => {
  const formData = req.body;
  console.log("here object" , formData)

  const options = {
    method: 'GET',
    url: 'https://api-football-beta.p.rapidapi.com/standings',
    params: {
      season: formData.season, // Use season from formData
      league: formData.league, // Use league from formData
    },
    headers: {
      'X-RapidAPI-Key': '4b8c1b7ef9msh1b1ab42b630ae75p1dbdb2jsnce94121e2bef',
      'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
    }
  };
  try {
    const footballResponse = await axios.request(options);
    const footballData = footballResponse.data.response[0].league.standings[0];
    var pointsTab = [];
    var teamsTab = [];
    var teamsLogo;

   for (let i = 0; i < footballData.length; i++) {
     pointsTab.push(footballData[i].points)  ;
     teamsTab.push(footballData[i].team.name); 
   }
    // Process the football standings data if needed
    // For example, you can extract relevant information from footballData
    console.log("here " ,footballData , pointsTab , teamsTab)
    res.json({
      result: footballData,
      points : pointsTab,
      teams : teamsTab,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Make app importable from another files
module.exports = app;
