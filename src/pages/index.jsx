import Container from "../components/Container"
import Footer from "../components/Footer"
import Header from "../components/Header"
import TitleSection from "../components/TitleSection"
import Ul from "../components/Ul"
import Wrapper from "../components/Wrapper"
import { renderJsonCountries, renderLocalJson } from "../functions"
import ddi from '../pages/api/ddi'

const BASE_URL = 'https://api.sellead.com'
const BASE_LOCAL = '/api'

export async function getServerSideProps() {
  const res = await fetch(`${BASE_URL}/country`)
    const data = await res.json()
    return {
        props: { data }, // will be passed to the page component as props
    }
}

async function renderDDI(endpoint) {
  const resp = await fetch(`${BASE_LOCAL}/${endpoint}`) 
  const data = await resp.json();
  const dataMap = data.map((value, index) => {
    (
        <li key={index} className='flex p-2'>
            <span className="">{value.name}({value.code}) | {value.code}</span>
        </li>)
  })
  return dataMap
}

export default function Home( { data }) {

  return (
    <div className="h-screen flex flex-col">
      <Header title='JSON to HTML' 
        desc='Insert values into select, input and select fields in Gravity Forms to autopopulate a list of choices.' 
      />

      <Container>        
        <Wrapper>
          <TitleSection title='Countries API' name='name' code='code' />
          <Ul>
            {renderJsonCountries(data)}
          </Ul>        
        </Wrapper>
       
        <Wrapper>
          <TitleSection title='Global DDI' name='name (dial_code)' code='dial_code' />
          <Ul>
            {}
          </Ul>        
        </Wrapper>
      </Container>
    
      <Footer href='https://github.com/estevan-ulian' desc='Estevan Ulian' />

    </div>
  )
}
