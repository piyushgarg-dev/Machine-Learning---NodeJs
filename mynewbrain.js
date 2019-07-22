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
        {
            entry:'invested capital in business',
            journal:'cashtocapital'
        },
        {
            entry:'purchased goods',
            journal:'purchasestocash'
        },
        {
            entry:'purchased goods on credit',
            journal:'purchasestocreditor'
        },
        {
            entry:'sold goods for cash',
            journal:'cashtosales'
        },
        {
            entry:'sold goods on credit',
            journal:'debtortosales'
        },
       {
           entry:'deposited money in bank’',
           journal:'banktocash'
       },
       {
        entry:'introduced additional capital',
        journal:'cashtocapital'
    },
    {
        entry:'purchased furniture ',
        journal:'furnituretocash'
    },
    {
        entry:'withdrawn money for personal use',
        journal:'drawingstocash'
    },
    {
        entry:'payment made by debtor',
        journal:'cashtodebtor'
    },
    {
        entry:'payment made to creditor',
        journal:'payment made to creditor'
    },
    {
        entry:'issued bills of exchange to debtor',
        journal:'billreceivablestodebtor'
    },
    {
        entry:'endorsed bills receiveable to creditor',
        journal:'creditortobillsreceivable'
    },
    {
        entry:'discounting bills receivables ',
        journal:'banktobillsreceivable'
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

