const express = require('express');
const app = express();
const router = require('./router.js')
const cors = require('cors')

app.use('/api', router)
app.use(cors())

app.listen(5566, () => {
    console.log('服务器运行在5566端口')
})