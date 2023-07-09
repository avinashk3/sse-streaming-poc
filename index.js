const express = require("express")
const cors = require("cors")
const video = require("./routes/video")
const apps = require('./routes/app')

app = express()

app.use(cors())

app.use('/', apps)
app.use('/video', video)
app.get('/', (req, res)=>{
    res.sendFile('D:\\Learn\\video-streaming\\frontend.html')
})


app.listen(5001, ()=> {
    console.log("app is listening to port 5001")
})