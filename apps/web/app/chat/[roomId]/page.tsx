import { Button } from "@repo/ui/button";
import { TextInput } from "@repo/ui/text-input";

export default function Chat(){
    return(
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#020024", backgroundImage: "linear-gradient(0deg,rgb(5, 0, 22) 0%, rgba(0, 0, 0, 1) 100%)", height: "100vh", width: "100vw", alignItems: "center", letterSpacing: "2px", gap: "2vh", color: "white", fontFamily: "monospace", paddingTop: "5px"}}>
            <h1>Welcome you can start chatting</h1>
            <div style={{display: "flex", flexDirection: "column",justifyContent: "flex-end", height: "100vh"}}>
                <div style={{marginBottom: "15px", display: "flex", justifyContent: "space-between", alignItems: "center", width: "90vw"}}>
                    <TextInput placeholder="Enter your message:  " style={{width: "90vh",padding: "9px", borderRadius: "5px", backgroundColor: "#010108", fontSize: "18px", border: "1px solid #494949"}}></TextInput>
                    <Button hover="#161422" style={{backgroundColor: "transparent", border: "none", fontSize: "clamp(18px, 3vw, 32px)", padding: "5px", borderRadius: "50px"}}>➤</Button>
                </div>
            </div>
        </div>
    )
}