import { Context } from '../contexts/Context';
import SingleNoter from '../components/SingleNoter';
import { uniqueString } from '@naseelniyas/unique_id';
import { useState, useEffect, useContext } from 'react';

const Home = () => {
  const { noters, setNoters } = useContext(Context);
  const [name, setName] = useState('');

  const updateNoters = () => {
    setNoters(JSON.parse(localStorage.getItem('noters')) ?? []);
  };

  useEffect(() => {
    updateNoters();
  }, []);

  const newNoter = (e) => {
    e.preventDefault();
    const id = uniqueString();
    const newNoterData = {
      id,
      name,
      data: '',
    };
    noters.push(newNoterData);
    setName('');
    localStorage.setItem('noters', JSON.stringify(noters));
    updateNoters();
  };

  return (
    <div className="home">
      <div className="center">
        <div className="card main-card">
          <h1>Welcome to Noter!</h1>
          {!noters && 'Loading...'}
          {noters.length === 0 ? (
            <h2>You Dont have any Noters ❗ Create one! 👇 </h2>
          ) : (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Actions</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {noters.map((noter) => (
                  <SingleNoter key={noter.id} noter={noter} />
                ))}
              </tbody>
            </table>
          )}
          <form onSubmit={newNoter}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name for new Noter"
            />
            <br />
            <button className="btn-new" type="submit">
              Create New Noter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
