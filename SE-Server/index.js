const express = require("express");
const app = express();
const http = require('http').createServer(app);
const path = require("path");
const bodyParser = require('body-parser');
const fs = require('fs');

const port = 8080;

const accounts = JSON.parse(fs.readFileSync('Accounts.json'));
const forum = JSON.parse(fs.readFileSync('Forum.json'));
const articles = JSON.parse(fs.readFileSync('News.json'));
const chatlog = JSON.parse(fs.readFileSync('chatlog.json'));
const Policy = JSON.parse(fs.readFileSync('policy.json'));
const holiday = JSON.parse(fs.readFileSync('holidays.json'));
const sections = ["employees", "HR", "admins"]

app.use(express.static(path.join(__dirname, '/../build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/../improved/build', 'index.html'));
});

app.get('/api/getArticles', async function(req, res) {
  res.send(articles["News"]);
});

app.get('/api/getQuestions', async function(req, res) {
  res.send(forum);
});

app.post('/api/addQuestion', async function(req, res) {
  forum['Q'].push({
    "question": req.body.q
  });
  fs.writeFileSync('Forum.json', JSON.stringify(forum, null, 2));
  res.send(200);
});

app.post('/api/addArticle', async function(req, res) {
  articles["News"].push({
    "title": req.body.title,
    "description": req.body.description
  });
  fs.writeFileSync('News.json', JSON.stringify(articles, null, 2));
  res.send(200);
});

app.post('/api/update-details', async function(req, res) {
  for (let i = 0; i < sections.length; i++) {
    const currentSection = sections[i];
    const tempUserID = userExistIn(accounts[currentSection], req.body);
    if (tempUserID >= 0) {
      accounts[currentSection][tempUserID] = {
        "username": req.body.username,
        "password": req.body.password,
        "userType": req.body.userType,
        "firstname": req.body.firstname,
        "surname": req.body.surname,
        "email": req.body.email,
        "address": req.body.address,
        "city": req.body.city,
        "postcode": req.body.postcode,
        "dob": req.body.dob
      };
      fs.writeFileSync('Accounts.json', JSON.stringify(accounts, null, 2));
    }
  }
  res.send(200);
});

app.post('/api/login', async function(req, res) {
  for (let i = 0; i < sections.length; i++) {
    const currentSection = sections[i];
    const tempUserID = userExistIn(accounts[currentSection], req.body);
    if (tempUserID >= 0) {
      res.send({
        username: accounts[currentSection][tempUserID].username,
        password: accounts[currentSection][tempUserID].password,
        email: accounts[currentSection][tempUserID].email,
        userType: accounts[currentSection][tempUserID].userType,
        firstname: accounts[currentSection][tempUserID].firstname,
        surname: accounts[currentSection][tempUserID].surname,
        dob: accounts[currentSection][tempUserID].dob,
        city: accounts[currentSection][tempUserID].city,
        address: accounts[currentSection][tempUserID].address,
        postcode: accounts[currentSection][tempUserID].postcode
      });
    }
  }
});

app.post("/api/sendMessage", async function(req, res) {
  const author = req.body.author;
  const sender = req.body.messageTO;

  if (chatlog[`${author}-${sender}`] != undefined) {
    chatlog[`${author}-${sender}`].push({
      "message": req.body.message,
      "author": author,
      "datetime": req.body.timedate
    })
    res.send(chatlog[`${author}-${sender}`])
    fs.writeFileSync('chatlog.json', JSON.stringify(chatlog, null, 2));
  }
  if (chatlog[`${sender}-${author}`] != undefined) {
    chatlog[`${sender}-${author}`].push({
      "message": req.body.message,
      "author": author,
      "datetime": req.body.timedate
    })
    res.send(chatlog[`${sender}-${author}`])
    fs.writeFileSync('chatlog.json', JSON.stringify(chatlog, null, 2));
  }
  res.send("failed");
});

app.post("/api/updatePolicy", async function(req, res) {
  const time = new Date();
  const currentTime = `${time.getHours()}:${time.getMinutes()}`;

  if (Policy["time-end"] == currentTime) {
    Policy.message = "";
    Policy["time-end"] = ""
    fs.writeFileSync('policy.json', JSON.stringify(Policy, null, 2));
  };

  if (Policy.message == "") {
    Policy.message = req.body.policy;
    Policy["time-end"] = `${time.getHours()}:${time.getMinutes()+1}`;
    fs.writeFileSync('policy.json', JSON.stringify(Policy, null, 2));
  };
  res.send(200);
})

app.get("/api/getPolicy", async function(req, res) {
  const time = new Date();
  const currentTime = `${time.getHours()}:${time.getMinutes()}`;
  if (Policy["time-end"] == currentTime) {
    Policy.message = "";
    Policy["time-end"] = ""
    fs.writeFileSync('policy.json', JSON.stringify(Policy, null, 2));
    res.send("");
  } else {
    res.send(Policy.message);
  }
})

app.get("/api/getChat", async function(req, res) {
  const dms = req.query.currentDMS;
  if (chatlog[dms] != undefined) {
    res.send(chatlog[`${dms}`])
  } else {
    const users = dms.split("-")
    if (chatlog[`${users[1]}-${users[0]}`] != undefined) {
      res.send(chatlog[`${users[1]}-${users[0]}`])
    } else {
      res.send("failed")
    }
  }
});

app.get("/api/getUserRequestedHoliday", async function(req, res) {
  const user = req.query.user;
  if (holiday[user] != undefined) {
    res.send(holiday[user])
  } else {
    res.send({})
  }
})

app.get("/api/getAllRequestedHolidays", async function(req, res) {
  const data = [];

  for (const [key, value] of Object.entries(holiday)) {
    for (let i = 0; i < value.length; i++) {
      if (value[i].date != undefined) {
        data.push({
          "date": value[i].date,
          "status": value[i].status,
          "name": value[i].name
        })
      }
    }
  }
  res.send(data);
})

app.post("/api/requestHoliday", async function(req, res) {
  holiday[req.body.user].push({
      "date": req.body.date,
      "status": "pending",
      "name": req.body.user
    })
  fs.writeFileSync('holidays.json', JSON.stringify(holiday, null, 2));
  res.send(holiday[req.body.user]);
})

app.post("/api/handleHoliday", async function(req, res) {
  for (let i=0; i < holiday[req.body.name].length; i++) {
    if (holiday[req.body.name][i] != undefined) {
      if (holiday[req.body.name][i].date == req.body.date) {
        holiday[req.body.name][i].status = req.body.status;
      }
    }
  }
  fs.writeFileSync('holidays.json', JSON.stringify(holiday, null, 2));
  res.send("200");
})

app.post("/api/questionAnswered", async function(req, res) {
  let index = -1
  const question = req.body.question;
  const answer = req.body.answer;
  for (let i = 0; i < forum["Q"].length; i++) {
    if (question == forum["Q"][i].question) {
      index = i
    }
  }

  forum["answered_Q"].push({
    "question": question,
    "answer": answer
  })

  if (index != -1) {
    forum["Q"].splice(index, 1)
  }
  fs.writeFileSync('Forum.json', JSON.stringify(forum, null, 2));
  res.send(forum);
})

app.use((req, res) => res.sendFile(path.join(__dirname, '/../build', 'index.html')))


http.listen(port, () => {
  console.log(`listening on *:${port}`)
})

function userExistIn(array, data) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].email == data.email && array[i].password == data.password) {
      return i;
    }
  }
  return -1
}