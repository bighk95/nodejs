const express = require('express');
require('dotenv').config();
const app = express();

// sendFile로 경로에 해당되는 html의 내용을 응답함.
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

// send로 직접적으로 내용을 작성하여 응답함.
app.get('/', (request, response) => {
    response.send('Almost done!')
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
