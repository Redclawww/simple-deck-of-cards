import { data } from './data'
import './App.css'
import Card from './components/Card'


function App() {
  
  return (
    <main className='flex md:px-24 px-5 md:py-16 py-7 flex-col gap-16 '>
      <h1 className='text-9xl text-[#f2f2f2] text-center'>Deck Of Cards</h1>
      <div className='flex flex-row flex-wrap gap-10 items-center justify-center'>
      {
        data && data.map((item) => {
          return <Card 
          title={item.title}
          subtitle={item.subtitle}
          description={item.description}
          imgUrl={item.imageUrl} />
        }
      )}

      </div>
      
    </main>
  )
}

export default App
