// tiene estas verificaciones porque algunos valores de la api retornan como NULL


export const powerstats = (team) => {

    const stats = [
        {
            stat: "Intelligence",
            value: team.reduce((acc, member) => parseInt(member.powerstats.intelligence)+ acc || acc, 0)
        },
        {
            stat: "Strength",
            value: team.reduce((acc, member) => parseInt(member.powerstats.strength)+ acc || acc, 0)
        },
        {
            stat: "Speed",
            value: team.reduce((acc, member) => parseInt(member.powerstats.speed)+ acc || acc, 0)
        },
        {
            stat: "Durability",
            value: team.reduce((acc, member) => parseInt(member.powerstats.durability)+ acc || acc, 0)
        },
        {
            stat: "Power",
            value: team.reduce((acc, member) => parseInt(member.powerstats.power)+ acc || acc, 0)
        },
        {
            stat: "Combat",
            value: team.reduce((acc, member) => parseInt(member.powerstats.combat)+ acc || acc, 0)
        },
    ]

    return stats.sort((a, b) => b.value - a.value)
}