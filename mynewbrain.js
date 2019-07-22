const brain = require("brain.js");
const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.use(express.json());
app.use(bodyparser.urlencoded());
app.use(bodyparser.json());

module.exports = function(string) {
  this.string = string;
  console.log("Class2", string);
  const network = new brain.recurrent.LSTM();
  const trainingdata = [
    {
      entry: "sold furniture on cash",
      journal: "cash,furniture"
    },
    {
      entry: "paid salary",
      journal: "salary,cash"
    },
    {
      entry: "paid salaries",
      journal: "salary,cash"
    },
    {
      entry: "invested capital in business",
      journal: "cash,capital"
    },
    {
      entry: "purchased goods",
      journal: "purchases,cash"
    },
    {
      entry: "purchased goods on credit",
      journal: "purchases,creditor"
    },
    {
      entry: "sold goods for cash",
      journal: "cash,sales"
    },
    {
      entry: "sold goods on credit",
      journal: "debtor,sales"
    },
    {
      entry: "deposited money in bank’",
      journal: "bank,cash"
    },
    {
      entry: "introduced additional capital",
      journal: "cash,capital"
    },
    {
      entry: "purchased furniture ",
      journal: "furniture,cash"
    },
    {
      entry: "withdrawn money for personal use",
      journal: "drawings,cash"
    },
    {
      entry: "payment made by debtor",
      journal: "cash,debtor"
    },
    {
      entry: "eceived money from debtors",
      journal: "cash,debtors"
    },
    {
      entry: "payment made to creditor",
      journal: "creditor,cash"
    },
    {
        entry: "paid money to creditors",
        journal: "creditor,cash"
    },
    {
      entry: "issued bills of exchange to debtor",
      journal: "billreceivables,debtor"
    },
    {
      entry: "endorsed bills receiveable to creditor",
      journal: "creditor,billsreceivable"
    },
    {
      entry: "discounting bills receivables ",
      journal: "bank,billsreceivable"
    }
  ];

  const train = trainingdata.map(item => ({
    input: item.entry,
    output: item.journal
  }));
  network.train(train, {
    iterations: 210,
    log: err => console.log(err)
  });

  return network.run(string);
};
