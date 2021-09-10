import { useState,useEffect } from 'react';
import SingleNoter from '../components/SingleNoter';
import { uniqueString } from '@naseelniyas/unique_id';

const Home = () => {
  const [noters, setNoters] = useState([])
  const [name, setName] = useState('')
  
  const updateNoters = () => {
    setNoters(JSON.parse(localStorage.getItem('noters')) ?? [])
  }
  useEffect(() => {
    updateNoters()
  }, [])

  const newNoter = (e) => {
    e.preventDefault();
    const id = uniqueString();
    const newNoterData = {
      id, name, data: ''
    }
    noters.push(newNoterData)
    setName('')
    localStorage.setItem('noters', JSON.stringify(noters))
    updateNoters()
  };

  return (
    <div className='home'>
    <div className="center">
      <div className='card main-card'>
        <h1>Welcome to Noter!</h1>
        {noters.length === 0 && <h2>You Dont have any Noters ❗  Create one! 👇 </h2>}
        {
          noters.map(noter => <SingleNoter key={noter.id} noter={noter}/>)
        }
        <form onSubmit={newNoter}>
          <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Enter name for new Noter'/><br />
          <button className='btn-new' type='submit'>
            Create New Noter
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Home;