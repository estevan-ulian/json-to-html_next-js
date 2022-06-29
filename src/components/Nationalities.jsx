import { useEffect, useState } from "react"
import Ul from "./Ul"

const Nationalities = () => {
    const nationalityEndpoint = 'https://api.sellead.com/nationality'
    const [nationality, setNationality] = useState([])

    useEffect(() => {
      fetch(nationalityEndpoint)
        .then(response => response.json())
        .then(data => {
          setNationality(data)
        })
    }, [])

    return (
      <Ul>
      {nationality.map((nationality, i) => {
        return(
          <li 
          className='border-b pb-1 mb-1 border-gray-200' 
          key={i}>
          {nationality.nationality} ({nationality.country}) | {nationality.nationality}</li>
        )
      })}
      </Ul>
    )
    
}
export default Nationalities