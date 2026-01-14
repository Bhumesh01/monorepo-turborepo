import WebSocket, {WebSocketServer} from 'ws';
const wss = new WebSocketServer({port: 8000});
wss.on("connection", (ws)=>{
    ws.on("error", (error)=>console.log(error));
    ws.on("message", (data, isBinary)=>{
        wss.clients.forEach((client)=>{
            if(client.readyState === WebSocket.OPEN){
                client.send(data, {"binary": isBinary})
            }
        })
    })
})