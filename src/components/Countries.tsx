import Ul from "./Ul"
import { useFetch } from '../hooks/useFetch'

type Country = {
  name: string
  name_ptbr: string
  code: string
}

const Countries = () => {

    const { data: countries, isFetching } = useFetch<Country[]>('https://api.sellead.com/country')

    return (
      <Ul>
      {isFetching && <p>Carregando!!</p>}
      {countries?.map((data, i) => {
        return(
          <li className='border-b pb-1 mb-1 border-gray-200' key={i}>{data.name_ptbr} | {data.code}</li>
        )
      })}
      </Ul>
    )
    
}
export default Countries