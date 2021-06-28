import React, { useContext } from 'react'
import { averageWH } from '../../helpers/averageWH'
import { powerstats } from '../../helpers/powerstats'
import { TeamContext } from '../../team/TeamContext'

export const TeamStats = () => {
    const {team} = useContext(TeamContext)

    const stats = powerstats(team)
    const {avHeight, avWeight} = averageWH(team)
    return (
        <section>
            <h2>Team Info</h2>
            <p>Average Height: {avHeight} cm</p>
            <p>Average Weight: {avWeight} kg</p>

            <h3>Powerstats</h3>
            <div>
                {stats.map((stat,i) => (
                    <div key={i}>
                        <h5>{stat.stat}: {stat.value}</h5>
                        <progress max={(100*team.length)} value={stat.value}></progress>
                    </div>
                ))}
            </div>
        </section>
    )
}
