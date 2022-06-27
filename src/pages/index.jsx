import Header from "../components/Header"
import { renderJson } from "../functions"

const BASE_URL = 'https://api.sellead.com'

export async function getServerSideProps() {
  const res = await fetch(`${BASE_URL}/country`)
    const data = await res.json()
    return {
        props: { data }, // will be passed to the page component as props
    }
}

export default function Home( { data }) {
  
  return (
    <div className='grid gap-2 p-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      <div className="flex flex-col">
        <Header title='Países' />
        <ul className="h-96 overflow-y-scroll p-2 bg-gradient-to-b from-gray-100 to-gray-300">
          {renderJson(data)}
        </ul>        
      </div>
    </div>
  )
}
