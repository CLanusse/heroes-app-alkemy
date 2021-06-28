import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { TeamContext } from '../../team/TeamContext'

export const HeroCard = ({hero}) => {
    
    const {team, handleAddMember, handleRemoveMember} = useContext(TeamContext)

    const {image:{url}, name, id, powerstats} = hero

    return (
        <div className="card hero-card">
            <img className="card-img-top" src={url} alt={name}/>
            <div>
                <h5 className="card-title">{name}</h5>
                <ul className="list-group list-group-flush">
                    <li>Intelligence: {powerstats.intelligence}</li>
                    <li>Strength: {powerstats.strength}</li>
                    <li>Speed: {powerstats.speed}</li>
                    <li>Durability: {powerstats.durability}</li>
                    <li>Power: {powerstats.power}</li>
                    <li>Combat: {powerstats.combat}</li>
                </ul>
            </div>
            {   team.some( member => member.id === hero.id)
                    ?
                    <button onClick={()=> handleRemoveMember(hero)} className="btn btn-danger m-2">Remove from my team</button>
                    :
                    <button onClick={()=> handleAddMember(hero)} className="btn btn-success m-2">¡Add to my team!</button>
            }
            <Link to={`/hero-detail/${id}`} className="btn btn-outline-primary m-2">Details</Link>
        </div>
    )
}
