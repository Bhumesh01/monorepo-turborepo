import { Button } from "@repo/ui/button";
import { TextInput } from "@repo/ui/text-input";
import {ChatBubble} from "@repo/ui/chat-bubble"
export default function Chat(){
    return(
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#020024", backgroundImage: "linear-gradient(0deg,rgb(5, 0, 22) 0%, rgba(0, 0, 0, 1) 100%)", height: "100vh", width: "100vw", alignItems: "center", letterSpacing: "2px", gap: "2vh", color: "white", fontFamily: "monospace", paddingTop: "5px"}}>
            <div>
                <h1>Welcome! You can start chatting</h1>
            </div>
            <div style={{display: "flex", flexDirection: "column",justifyContent: "space-between", height: "100vh", border: "1px solid white", padding: "12px", borderRadius: "15px"}}>
                <div style={{display: "flex", overflow: "auto", gap: "5px", flexDirection: "column", alignItems:"end"}}>
                    <ChatBubble></ChatBubble>
                    <ChatBubble></ChatBubble>
                </div>
                <div style={{marginBottom: "5px", display: "flex", justifyContent: "space-around", alignItems: "center", width: "90vh"}}>
                    <TextInput placeholder="Enter your message:  " style={{width: "100vh",padding: "9px", borderRadius: "5px", backgroundColor: "#010108", fontSize: "18px", border: "1px solid #494949"}}></TextInput>
                    <Button hover="#161422" style={{backgroundColor: "transparent", border: "none", fontSize: "clamp(18px, 3vw, 32px)", padding: "5px", borderRadius: "50px"}}>➤</Button>
                </div>
            </div>
        </div>
    )
}