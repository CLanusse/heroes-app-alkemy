import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getHeroById } from '../../helpers/getHeroById'
import { TeamContext } from '../../team/TeamContext'
import { Loader } from '../Loader/Loader'

export const HeroDetail = () => {

    const {team, handleAddMember, handleRemoveMember} = useContext(TeamContext)

    const [hero, setHero] = useState({})
    const [loading, setLoading] = useState(true)

    const {heroId}= useParams()

    const {image, name, appearance, work, biography} = hero

    useEffect(()=>{
        getHeroById(heroId)
            .then(res => {
                setHero(res)
            })
            .finally(()=> setLoading(false))
    }, [heroId])

    
    return (
        <>
            {loading ? <Loader/>

                :
                <div className="container">
                    <h2>Hero Detail</h2>
                    <hr/>
                    <div className="row">
                        <div className="col-md-5 col-sm-12 detail-img mb-4">
                            <img src={image.url} alt={name}/>
                        </div>
                        <div className="col-md-7 col-sm-12">
                            <h5>Name: <span>{name}</span></h5>
                            <h5>Full name: <span>{biography["full-name"]}</span></h5>
                            <h5>{biography.aliases.length === 1 ? "Alias" : "Aliases"}</h5>
                            <ul>
                                {biography.aliases.map((alias, i) => (
                                    <li key={i}>{alias}</li>
                                ))}
                            </ul>
                            <h5>Appearance</h5>
                            <ul>
                                <li>Gender: {appearance.gender}</li>
                                <li>Height: {appearance.height.join(', ')}</li>
                                <li>Weight: {appearance.weight.join(', ')}</li>
                                <li>Eye color: {appearance["eye-color"]}</li>
                                <li>Hair color: {appearance["hair-color"]}</li>
                            </ul>
                            <h5>Work: <span>{work.occupation}</span></h5>
                        </div>
                    </div>
                    {   team.some( member => member.id === hero.id)
                        ?
                        <button onClick={()=> handleRemoveMember(hero)} className="btn btn-danger mt-4">Remove from my team</button>
                        :
                        <button onClick={()=> handleAddMember(hero)} className="btn btn-success mt-4">¡Add to my team!</button>
                    }
                </div>
            }
        </>
    )
}
