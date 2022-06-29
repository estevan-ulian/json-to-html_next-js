import { useEffect, useState } from "react"
import Ul from "./Ul"

const Currency = () => {
    const currencyEndPoint = '/api/currency'
    const [currency, setcurrency] = useState([])

    useEffect(() => {
      fetch(currencyEndPoint)
        .then(response => response.json())
        .then(data => {
          setcurrency(data)
        })
    }, [])

    return (
      <Ul>
      {currency.map((currency, i) => {
        return(
          <li key={i} className='border-b pb-1 mb-1 border-gray-200'>{currency.name} ({currency.symbol}) | {currency.code}</li>
        )
      })}
      </Ul>
    )
    
}
export default Currency