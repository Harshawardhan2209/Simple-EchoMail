const SMTPServer = require("smtp-server").SMTPServer;
const server = new SMTPServer({
    onConnect(session, cb)
    {
        // to reject -->  cb(new Error('Cannot Accept'));
        console.log(`onConnect`,session.id);
        cb(); // accept the connection
    }, 
    onMailFrom(address,id)
    {
        
    },
    onRcptTo(address,id)
    {

    },
    
    
});

server.listen(25,() => console.log('Server Running on port 25'));