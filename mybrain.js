const brain = require('brain.js');

module.exports = function(string){
    this.string = string.toLowerCase();
    console.log('Class',string)
    const network = new brain.recurrent.LSTM();
    const trainingdata = [
    
        {
            text:'hello',
            output:'Hi There'
        },
        {
            text:'',
            output:''
        }
        
        
        
    ];
     
    
    const train = trainingdata.map(item=>({
        input:item.text,
        output:item.output
    }));
    network.train(train,{
        iterations:2000
    });

    
    return network.run(string);
    
   
   
    
    
}

