import { useContext, useState } from 'react';
import Modal from 'react-modal';
import { MdDelete } from 'react-icons/md';
import { Context } from '../contexts/Context';

Modal.setAppElement('#root');
const SingleNoter = ({ noter }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { noters, setNoters } = useContext(Context);
  const deleteNoter = (noterId) => {
    const newNoters = noters?.filter((not) => not.id !== noterId);
    localStorage.setItem('noters', JSON.stringify(newNoters));
    setNoters(newNoters);
  };

  const showModal = () => {
    setModalIsOpen(true);
  };

  return (
    <>
      <div className="modal-container">
        <Modal
          isOpen={modalIsOpen}
          style={{ content: { width: '60vw', height: '60vh', marginLeft: '20vw'} }}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <center>
            <h1>Are you Sure?</h1>
            <h2>
              <button onClick={(e) => deleteNoter(noter.id)} className="delete">
                <MdDelete />
                Yes
              </button>
            </h2>
            <h2>
              <button onClick={() => setModalIsOpen(false)} className="no">
                No
              </button>
            </h2>
          </center>
        </Modal>
      </div>
      <tr className="noter">
        <th>{noter.name}</th>
        <th>
          <a href={`/edit?noter=${noter.id}`}>Edit/View</a>{' '}
        </th>
        <th>
          <button onClick={showModal} className="delete">
            <MdDelete />
            Delete
          </button>
        </th>
      </tr>
    </>
  );
};

export default SingleNoter;
