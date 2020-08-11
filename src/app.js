const fastify = require('fastify')()

fastify.register(require('fastify-cors'),{
})

fastify.register(require('fastify-mysql'), {
    promise:true,
    connectionString: 'mysql://root@localhost/todolist'
})

fastify.register(require('./routes/todolists'),{prefix:'/todo'})

fastify.get('/', async (req,res) => {
    res.send('Hello world')
})

//Port at which server will be listening
fastify.listen(3000, (err) => {
    if(err){
        console.log(err);
        process.exit(1);
    }
    else{
        console.log('Server listening at port 3000')
    }
})