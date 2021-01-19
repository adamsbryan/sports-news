import React from 'react';
import * as NBAIcons from 'react-nba-logos';

export default function NBALogos({team}) {
    switch(team){
        case "ATL":
            return <NBAIcons.ATL size={45}/>
        case "BKN":
            return <NBAIcons.BKN size={45}/>
        case "BOS":
            return <NBAIcons.BOS size={45}/>
        case "CHA":
            return <NBAIcons.CHA size={45}/>
        case "CHI":
            return <NBAIcons.CHI size={45}/>
        case "CLE":
            return <NBAIcons.CLE size={45}/>
        case "DAL":
            return <NBAIcons.DAL size={45}/>
        case "DEN":
            return <NBAIcons.DEN size={45}/>
        case "DET":
            return <NBAIcons.DET size={45}/>
        case "GSW":
            return <NBAIcons.GSW size={45}/>
        case "HOU":
            return <NBAIcons.HOU size={45}/>
        case "IND":
            return <NBAIcons.IND size={45}/>
        case "LAC":
            return <NBAIcons.LAC size={45}/>
        case "LAL":
            return <NBAIcons.LAL size={45}/>
        case "MEM":
            return <NBAIcons.MEM size={45}/>
        case "MIA":
            return <NBAIcons.MIA size={45}/>
        case "MIL":
            return <NBAIcons.MIL size={45}/>
        case "MIN":
            return <NBAIcons.MIN size={45}/>
        case "NOP":
            return <NBAIcons.NOP size={45}/>
        case "NYK":
            return <NBAIcons.NYK size={45}/>
        case "OKC":
            return <NBAIcons.OKC size={45}/>
        case "ORL":
            return <NBAIcons.ORL size={45}/>
        case "PHI":
            return <NBAIcons.PHI size={45}/>
        case "PHX":
            return <NBAIcons.PHX size={45}/>
        case "POR":
            return <NBAIcons.POR size={45}/>
        case "SAC":
            return <NBAIcons.SAC size={45}/>
        case "SAS":
            return <NBAIcons.SAS size={45}/>
        case "TOR":
            return <NBAIcons.TOR size={45}/>
        case "UTA":
            return <NBAIcons.UTA size={45}/>
        case "WAS":
            return <NBAIcons.WAS size={45}/>
        default:
            return <p>No Team Found</p>
    }
}
