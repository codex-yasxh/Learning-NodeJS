
// Building a custom HTTP task 


const http = require('http')
const fs = require('fs');
const { error } = require('console');


const tweets = ['html', 'css', 'js', 'ts']
const server = http.createServer((req, res)=>{

    switch (req.url) {
        case '/':
                //GET '/' : send simple hello message 
                if (req.method === "GET") {
                    res.writeHead(200, { "Content-Type": "text/plain" });
                    res.end("Hello from Home!");
                }
                break;
        case '/contact-us' : 
                //GET '/contact-us' send your contact and email to the user
                if(req.method === 'GET'){
                    res.writeHead(200, { "Content-Type": "text/plain" });
                    res.end("Contact is : 12345 and email is : xyz@abc.com")
                }
                break;
        case '/tweet' : 
                //POST /tweet Do a fake DB operation and send ack that it's done
                if(req.method === 'POST'){
                    tweets.push('New fake tweet')
                    res.writeHead(201,'success')
                    res.end('Tweet posted successfully')
                    break;
                }
                else if(req.method === 'GET'){
                    //GET /tweet send all the tweets from the fake DB to the user
                    res.writeHead(200, { "Content-Type": "application/json" });
                    res.end(JSON.stringify(tweets));
                    break;
                }
                else{
                    res.writeHead(405, { "Content-Type": "text/plain" });
                    res.end("Method not allowed on /tweet");
                    break;
                }
            default :
                    res.writeHead(404,"Not Found")
                    res.end("homepage")
                    break;
    }

    //also you need to log the incoming requests withe the timestamps in the file named log.txt
    const logTime = new Date().toISOString();
    const logMessage = `${logTime} - ${req.method} ${req.url}\n`;
        fs.appendFile(`${__dirname}/log.txt`, logMessage, (err) => {
        if (err) console.error("Failed to write log:", err);
        });

    
})

server.listen(3000,()=>{
    console.log("server started in 3000 port");
})