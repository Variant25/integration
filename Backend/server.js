require(`dotenv`).config()

const express = require(`express`)

const mongoose = require(`mongoose`)
const router = require(`./routes/router`)

// express app
const app = express()




app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

// routes
app.use(`/api/router`, router)


// connect to the mongodb
mongoose.connect(process.env.MONG_URL)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`coonected to db and server is running`, process.env.PORT);
    })
    
})
.catch((error) => {
    console.log(error);
})

//listen for requests
// const PORT = 4000

