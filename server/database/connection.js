const mongoose = require('mongoose')
const databaseUrl =
  // process.env.DATABASE_URL || 'mongodb://localhost/argentBankDB'
  process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/argentBankDB'

module.exports = async () => {
  try {
    // await mongoose.connect(databaseUrl, { useNewUrlParser: true})
    await mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('Database successfully connected, Mongo connected !')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
