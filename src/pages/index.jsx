import Container from "../components/Container"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Countries from "../components/Countries"
import TitleSection from "../components/TitleSection"
import Currency from "../components/Currency"
import Wrapper from "../components/Wrapper"
import DDI from "../components/DDI"
import DDD from "../components/DDD"
import Head from "next/head"
import Nationalities from "../components/Nationalities"

export default function Home() {  
  return (
    <div className="h-screen flex flex-col">
      <Head>
      <meta name="author" content="Estevan Ulian"/>
      <title>JSON to TXT</title>
      </Head>

      <Header title='JSON to TXT' 
        desc='' 
      />

      <Container>        
        <Wrapper>
          <TitleSection title='Countries API' name='name' code='code' />
            <Countries />       
        </Wrapper>

        <Wrapper>
          <TitleSection title='Nationality API' name='nationality (country)' code='nationality' />
            <Nationalities />
        </Wrapper>
       
        <Wrapper>
          <TitleSection title='Global DDI' name='name (dial_code)' code='dial_code' />
            <DDI />
        </Wrapper>

        <Wrapper>
          <TitleSection title='Currency' name='name (symbol)' code='code' />
            <Currency />
        </Wrapper>       

        <Wrapper>
          <TitleSection title='Brazil DDD' name='ddd' code='ddd' />
            <DDD />
        </Wrapper>       

      </Container>
    
      <Footer href='https://github.com/estevan-ulian' desc='Estevan Ulian' />

    </div>
  )
}
