const express = require('express')
const app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Hey, I\'m a Node.js app!')
})
app.post('/callback1', function(req, res) {
    var user_id = req.body.number;
  

    res.send(user_id);
});
app.listen(3000, () => {
    console.log('Server is up on 3000')
})