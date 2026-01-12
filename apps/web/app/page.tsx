
export default function Home() {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#020024", backgroundImage: "linear-gradient(0deg,rgb(5, 0, 22) 0%, rgba(0, 0, 0, 1) 100%)", height: "100vh", width: "100vw", alignItems: "center", letterSpacing: "2px", gap: "2vh", alignContent: "center"}}>
      <div style={{margin: "2px", fontFamily: "monospace", fontSize: "clamp(28px, 5vw, 48px)", fontWeight: "bolder", textAlign: "center", marginBottom: "5vh", color: "white", width: "80vw",}}>
        <h1>WELCOME TO CHATVERSE</h1>
      </div>
      <div style={{ width: "80vw",padding: "auto", display: "flex", justifyContent: "center"}}>
        <input style={{width: "50vh",padding: "9px", borderRadius: "5px", backgroundColor: "#010108", fontSize: "18px", border: "1px solid #494949"}} type="text" placeholder="Enter the code"></input>
      </div>
      <div style={{display: "flex", gap: "10px", width: "80vw", justifyContent: "center"}}>
        <button style={{ width: "25vh",padding: "15px", fontSize: "18px", borderRadius: "10px", border: "1px solid #363636",backgroundColor: "#0a0a0f", color: "white"}}>Join Room</button>
        <button style={{ width: "25vh",padding: "15px", fontSize: "18px", borderRadius: "10px", border: "1px solid #363636",backgroundColor: "#0a0a0f",color: "white"}}>Join Room</button>
      </div>
    </div>
  );
}
