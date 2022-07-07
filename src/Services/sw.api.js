const baseUrl = 'https://swapi.dev/api/'

export async function getStartShips() {
    const res = await fetch(`${baseUrl}starships`)
    return res.json()
}

export async function getStarshipPage(apiUrl) {
    const res = await fetch(`${baseUrl}${apiUrl}`)
    return res.json()
}
