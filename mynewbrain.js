const brain = require('brain.js');
const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(express.json());
app.use(bodyparser.urlencoded());
app.use(bodyparser.json());

module.exports = function(string){
    this.string = string;
    console.log('Class2',string)
    const network = new brain.recurrent.LSTM();
    const trainingdata = [
        {
            entry:'sold furniture on cash',
            journal:'cashtofurniture'
        },
        {
            entry:'paid salary',
            journal:'salarytocash'
        },
        {
            entry:'paid salaries',
            journal:'salarytocash'
        },
        
        
    ];
     
    
    const train = trainingdata.map(item=>({
        input:item.entry,
        output:item.journal
    }));
    network.train(train,{
        iterations:2000
    });

    
    return network.run(string);
    
   
   
    
    
}

