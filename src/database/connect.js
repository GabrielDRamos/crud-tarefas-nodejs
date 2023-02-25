const mongoose = require('mongoose')

mongoose.set('strictQuery', false);

const connectToDatabase = async () => {
  await mongoose.connect(`mongodb+srv://${process.env.MONGODB__USERNAME}:${process.env.MONGODB__PASSWORD}@cluster0.hv5ukhj.mongodb.net/database?retryWrites=true&w=majority`, (error) => {
    if (error) {
      console.log('Error ao tentar conectar ao banco de dados: ', error)
    }
    return console.log('Conexão estabelecida com o banco de dados!')
  })
} 

module.exports = connectToDatabase