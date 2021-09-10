const SingleNoter = ({ noter }) => {
  return (
    <div className='noter'>
      {noter.name} <a href={`/edit?noter=${noter.id}`} >
        Edit/View
      </a>
    </div>
  );
};

export default SingleNoter;
