const dataFetcher = async function (url=null){
    const res = await fetch(url)
    const jsonData = await res.json()
    return jsonData
}

export default dataFetcher