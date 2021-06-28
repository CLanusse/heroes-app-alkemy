import React, { useContext } from 'react'
import { TeamStats } from './TeamStats'
import { HeroList } from '../Heroes/HeroList'
import { TeamContext } from '../../team/TeamContext'
import { Link } from 'react-router-dom'


export const HomeScreen = () => {

    const {team} = useContext(TeamContext)

    return (
        <div className="container">
            <h1>My Super Team</h1>
            <hr/>
            <>
                {
                    !team.length 
                    ? 
                    <div>
                        <h4>No heroes on your team yet</h4>
                        <Link to="/search" className="btn btn-primary mt-3">¡Let's go find some!</Link>    
                    </div>
                    :
                    <>
                        <TeamStats />
                        <h2 className="mt-4">My heroes</h2>
                        <HeroList heroes={team}/>
                    </>
                }
            </>
            
        </div>
    )
}
