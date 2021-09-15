import { MdDelete } from 'react-icons/md';
import { useContext } from 'react';
import { Context } from '../contexts/Context';

const SingleNoter = ({ noter }) => {
  const { noters, setNoters } = useContext(Context);
  const deleteNoter = (noterId) => {
    const noters = JSON.parse(localStorage.getItem('noters'));
    const newNoters = noters?.filter((not) => not.id !== noterId);
    localStorage.setItem('noters', JSON.stringify(newNoters));
    setNoters(newNoters)
  };
  return (
    <div className="noter">
      {noter.name} <a href={`/edit?noter=${noter.id}`}>Edit/View</a>{' '}
      <button onClick={(e) => deleteNoter(noter.id)} className='delete'>
        <MdDelete />
        Delete
      </button>
    </div>
  );
};

export default SingleNoter;
