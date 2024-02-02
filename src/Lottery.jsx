import { useState } from "react";
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";
import "./lottery.css";

export default function lottery({n=3, winCondition}) {
    let [ticket,setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);
    let buyTicket = () =>{
        setTicket(genTicket(n));
    }
    return (
        <div>
        <h1>Lottery-Game!</h1>
        <Ticket ticket={ticket}/>
        
        <button onClick={buyTicket}className="buy">Buy New Ticket</button>
        <h3>{isWinning && "congratulations,you won!"}</h3>
        </div>
    );
}