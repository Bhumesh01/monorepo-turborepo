import { Button } from "@repo/ui/button";
import { TextInput } from "@repo/ui/text-input";
import {ChatBubble} from "@repo/ui/chat-bubble"
export default function Chat(){
    return(
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#020024", backgroundImage: "linear-gradient(0deg,rgb(5, 0, 22) 0%, rgba(0, 0, 0, 1) 100%)", height: "100vh", width: "100vw", alignItems: "center", letterSpacing: "2px", gap: "2vh", color: "white", fontFamily: "monospace", paddingTop: "5px", textAlign:"center"}}>
            <div>
                <h1>Welcome! You can start chatting</h1>
            </div>
            <div style={{width: "100%", display: "flex", justifyContent: "flex-end", paddingRight: "20px"}}>
                <Button hover="#ff5050" style={{backgroundColor: "red", border: "none", fontSize: "18px", padding: "8px", borderRadius: "5px", fontWeight: "700", color: "white"}}>Leave Room</Button>
            </div>
            <div style={{display: "flex", flexDirection: "column",justifyContent: "space-between", height: "100vh", border: "1px solid white", padding: "12px", borderRadius: "15px", width: "75%"}}>
                <div style={{display: "flex", overflow: "auto", gap: "5px", flexDirection: "column", alignItems:"end"}}>
                    <ChatBubble></ChatBubble>
                    <ChatBubble></ChatBubble>
                </div>
                <div style={{marginBottom: "5px", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", gap: "5px"}}>
                    <TextInput placeholder="Enter your message:  " style={{width: "94%",padding: "9px", borderRadius: "5px", backgroundColor: "#010108", fontSize: "18px", border: "1px solid #494949", color: "white"}}></TextInput>
                    <Button hover="#202022" style={{backgroundColor: "transparent", border: "none", fontSize: "clamp(18px, 3vw, 32px)", padding: "5px 10px", width: "fit-content", borderRadius: "50px", color: "white", marginRight: "2px"}}>➤</Button>
                </div>
            </div>
        </div>
    )
}