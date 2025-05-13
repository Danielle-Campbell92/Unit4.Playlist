import express from "express"
const app = express()
import playlist from "#db/playlist"

//localhost:3000
app.route('/').get((req, res) => {
    res.send("You've reached the Playlist API!")
})

//localhost:3000/playlist
app.route('/playlist').get((req, res) => {
    res.send(playlist)
})

//localhost:3000/playlist/:index
app.route('/playlist/:index').get((req, res) => {
    const idx = Number(req.params.index)
    const found = playlist[idx]
    if(found){
        res.send(found)
    }else{
        res.status(404).send("That song does not exist in the playlist.")
    }
})






export default app