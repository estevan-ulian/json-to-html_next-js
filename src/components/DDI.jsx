import { useEffect, useState } from "react"
import Ul from "./Ul"

const DDI = () => {
    const ddiEndPoint = '/api/ddi'
    const [ddi, setDDI] = useState([])

    useEffect(() => {
      fetch(ddiEndPoint)
        .then(response => response.json())
        .then(data => {
          setDDI(data)
        })
    }, [])

    return (
      <Ul>
      {ddi.map((ddi, i) => {
        return(
          <li key={i} className='border-b pb-1 mb-1 border-gray-200'>{ddi.name} ({ddi.dial_code}) | {ddi.dial_code}</li>
        )
      })}
      </Ul>
    )
    
}
export default DDI