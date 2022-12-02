const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send(`<h1 99 bottles of beer on the wall, 99 bottles of beer.</h1>  
    
               <h2> <a href = "./98> Take one down, pass it around. </a></h2>`);
});

app.get('/:numsOfBeers', (req, res) => {
if (req.params.numsOfBeers > 0) {
    res.send(`<h1> ${req.params.numsOfBeers} bottles on the wall, ${req.params.numsOfBeers} bottles of beer. </br> <a href = " ./${req.params.numsOfBeers - 1}> Take one down, pass it around</a> </h1>`); }
    

else {
    res.send(`<h1> No more beer on the wall. <a href = "/"> Start Over. </a> </h1>`)
}
})

app.listen(port,() => {
    console.log('listening on port' , port);
});