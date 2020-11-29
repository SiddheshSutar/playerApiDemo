import React, { useEffect, useState } from 'react';
import { formatDate, sortAscending } from '../helpers';
import '../style/playerCard.css';

const PlayerCard = ({playerlistProp}) => {
    const [playerlist, setPlayerList] = useState([]);

    useEffect(() => {
        setInterval(() => {
            if(playerlist){
                let sortedPlayerList = sortAscending(playerlistProp, 'Value');

                
                setPlayerList(sortedPlayerList)
            }
        }, 50);
    },[playerlist])

    return ( <div className="player-card-container">
            {playerlistProp ? playerlistProp.map((player, index) => (
                <div className="player" key = {index}>
                    {/* <div className = 'player-img' style={{
                        backgroundImage: `url(``https://api.jsonbin.io/b/5fbd01094f12502c21d7ecef/playerimages/${player.Id}.jpg``)`
                    }}></div> */}
                    <div className="player-name">{player.PFName}</div>
                    <div className="player-skill">{player.SkillDesc}</div> 
                    <div className="player-value">{`$ ${player.Value}`}</div>
                    {player.UpComingMatchesList.map(match => (
                        <div>{formatDate(match.MDate)}</div>
                    ))}
                </div>
            )) : <div>No player present</div>}
        
    </div> );
}
 
export default PlayerCard;