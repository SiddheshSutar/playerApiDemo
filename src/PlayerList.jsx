import React, { useEffect, useState } from 'react';
import PlayerCard from './atoms/PlayerCard';
import { getData } from './services';
// import ReactSearchBox from 'react-search-box'

const PlayerList = () => {
    
    const [data, setData] = useState({});
    const [viewFlag, setViewFlag] = useState(false);

    useEffect(() => {
        getData('https://api.jsonbin.io/b/5fbd01094f12502c21d7ecef').then(res => {
            setData(res)
            setViewFlag(true)
        }).catch(err => console.log(`Error in fn: getData of: PlayerList: ${err}`));

    }, []);

    return ( <div className="player-list-container">
        
        {viewFlag ? 
        <React.Fragment>
            {/* <ReactSearchBox
                placeholder="Search player"
                value="player"
                data={this.data}
                callback={record => console.log(record)}
            /> */}
            <PlayerCard 
                playerlistProp = {data.playerList}
            />
            </React.Fragment>
         : <div>No data</div>}
    </div> );
}
 
export default PlayerList;