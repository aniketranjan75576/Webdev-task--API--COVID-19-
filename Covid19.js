import React, {useState, useEffect} from 'react'
import axios from 'axios'
function Covid19()
{
    const [Country, setCountry]=useState({})
    const [country, setcountry] = useState(' ')
    useEffect(() => {
        axios.get(`https://corona.lmao.ninja/v2/countries/${country}`)
        .then(  res => {
            console.log(res)
            setCountry(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [country])
    return (
        <div>
            <input type="text" value={country} onChange={e => setcountry(e.target.value)} />
            <h3 className="Output">The Total Cases are:{Country.cases}</h3>
            <h3 className="Output">The Total Deaths are:{Country.deaths}</h3>
            <h3 className="Output">The Total New Cases are:{Country.todayCases}</h3>
        </div>

    )
}
export default Covid19