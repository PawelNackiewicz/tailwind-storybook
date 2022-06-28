import type { NextPage } from 'next'
import { Button } from '../components/atoms/Button/Button'
import { Phonebook } from '../components/templates/Phonebook/Phonebook'
import { CONTACTS } from '../mocks'

const Home: NextPage = () => {
  return (
    <div className='w-screen h-screen bg-slate-200 flex items-center justify-center flex-col'>
      <h1 className=''>Hello</h1>
      <div className='border rounded-lg max-h-96 overflow-scroll bg-white my-10'>
        <Phonebook contacts={CONTACTS} />
      </div>
      <Button text='Siema' />
    </div>
  )
}

export default Home
