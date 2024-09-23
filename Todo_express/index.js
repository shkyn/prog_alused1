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

const writeFile = (filename,data) => {
    return new Promise((resolve,reject) => {
        fs.writeFile(filename, data, "utf-8 ", err => {
            if (err) {
                console.error(err);
                return;
            }
            resolve(true)
        });
    })
}

app.get("/", (req, res) => {
    // tasks list data
   readFile("./tasks.json")
        .then(tasks => {
            res.render("index", {
                tasks: tasks,
                error: null
            })
        })
    });


app.use(express.urlencoded({ extended: true}));


app.post("/", (req, res) => {
    // controll data form
    let error = null
    if(req.bodyˇ.task.trim().length == 0){
        error ="Please insert correct task data"
        readFile("./tasks.json")
        .then(tasks => {
            res.render("index", {
                tasks: tasks,
                error: error
            })
        })

    }else{

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
        // adds form sent task
        tasks.push(newTask)
        data = JSON.stringify(tasks, null, 2)
        writeFile("tasks.json", data)
        res.redirect("/")
        })
     }
    })
    

app.get("/delete-task/:taskId", (req,   res) => {
    let deletedTaskId = parseInt(req.params.taskId)
    readFile("./tasks.json")
    .then(tasks => {
        tasks.forEach((task, index) => {
            if(task.id === deletedTaskId){
                tasks.splice(index, 1)
            }
        })
        data = JSON.stringify(tasks, null, 2)

        writeFile("tasks.json", data)
        res.redirect("/")
        })
    })



app.listen(3001, () => {
    console.log("Example app is started at http://localhost:3001")
})
