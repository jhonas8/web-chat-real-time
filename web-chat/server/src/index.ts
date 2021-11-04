import server from './app'

const PORT: number | string = process.env.PORT || 5000

server.listen(PORT, (err?: Error):void =>{
    if(err) throw err
    return console.log(`Server is running on port ${PORT}`)
})