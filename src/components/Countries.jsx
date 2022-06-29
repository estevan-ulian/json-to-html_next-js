import { useEffect, useState } from "react"
import Ul from "./Ul"

const Countries = () => {
    const countryEndpoint = 'https://api.sellead.com/country'
    const [country, setCountry] = useState([])

    useEffect(() => {
      fetch(countryEndpoint)
        .then(response => response.json())
        .then(data => {
          setCountry(data)
        })
    }, [])

    return (
      <Ul>
      {country.map((country, i) => {
        return(
          <li className='border-b pb-1 mb-1 border-gray-200' key={i}>{country.name_ptbr} | {country.code}</li>
        )
      })}
      </Ul>
    )
    
}
export default Countries