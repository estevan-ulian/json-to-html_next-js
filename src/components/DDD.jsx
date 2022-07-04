import { useEffect, useState } from "react"
import Ul from "./Ul"

const DDD = () => {
    const dddEndPoint = '/api/ddd'
    const [ddd, setDDD] = useState({})

    useEffect(() => {
      fetch(dddEndPoint)
        .then(response => response.json())
        .then(data => {
            setDDD(data)
        })
    }, [])

    function renderDDDs(ddd) {
        const obj = Object.keys(ddd)

        return obj.map((v, i) => {
            return (
                <li key={i}>({v}) | {v}</li>
                )
            }
        )
    }

    return (
      <Ul>
        {renderDDDs(ddd)}
      </Ul>
    )
}

export default DDD