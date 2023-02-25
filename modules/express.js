const express = require('express')
const taskModel = require('../src/model/task.model')

const app = express()
app.use(express.json())
const port = 8080


//criar tarefas
app.post("/tasks", async (req, res) => {
  try{
    const {name} = req.body
    const existingTask = await taskModel.findOne({name})
    if (existingTask){return res.status(400).send('A task já existe')}
    const task = await taskModel.create(req.body)
    res.status(201).json(task)
  }catch (error) {
    res.status(500).send(error.message)
  }
})


//buscar tarefas
app.get("/tasks", async (req,res) => {
  try {
    const tasks = await taskModel.find({})
  res.status(200).json(tasks)
  }catch (error) {
    res.status(500).send(error.message)
  }
})


app.listen(port, () => {
  console.log('ta runfando!')
})