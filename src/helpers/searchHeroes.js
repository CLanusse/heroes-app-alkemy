import axios from "axios";

export const searchHeroes = (search) => {

    return new Promise((resolve, reject) => {
        axios.get(`https://superheroapi.com/api.php/10224223741477887/search/${search}`)
            .then( ({data}) => {
                data.response === "success" ? resolve(data.results) : reject(data.error)
            })
            .catch(e => console.log(e))

    })
}