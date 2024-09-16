const express = require("express")
const app = express()
const fs = require("fs");

// use ejs files to prep temp for views
const path = require("path")
app.set("view engine", "ejs")
apps.et("views", path.join(_dirname, "views"))


const readFile = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, "utf8", (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            const tasks = JSON.parse(data)
            resolve(tasks)
        })
    })
}

app.get("/", (req, res) => {
    // tasks list data
   readFile("./tasks.json")
        .then(tasks => {
            console.log(tasks)
            res.render("index", {tasks: tasks})
        })
    });


app.use(express.urlencoded({ extended: true}));


app.post("/", (req, res) => {
    // tasks list data
    readFile("./tasks")
     .then(tasks => {
        let index
        if(tasks.length === 0)
        {
            index = 0
        } else {
            index = tasks[tasks.length-1].id + 1;
        }
        // create task
        const newTask = {
            "id" : index,
            "task" : req.body.task
        }
        console.log(newTask)
        // adds form sent task
        tasks.push(newTask)
        console.log(tasks)
        data = JSON.stringify(tasks, null, 2)
        console.log(data)
        fs.writeFile("./tasks", data, err => {
            if (err) {
                console.error(err);
                return;
            }
            res.redirect("/")
        })
     }
     )
    })

app.listen(3001, () => {
    console.log("Example app is started at http://localhost:3001")
})