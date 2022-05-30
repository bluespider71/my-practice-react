import React from 'react';

function App() {
  const [displayBio, setdisplayBio] = React.useState(false);

  const toggleDisplayBio = () => {
    setdisplayBio(!displayBio);
  }

  const bio = displayBio ? <div>
    <h3>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</h3>
    <button onClick={toggleDisplayBio}> Show Less </button>
  </div> : (
    <div>
      <button onClick={toggleDisplayBio}> Read More </button>
    </div>
  );
  return (
    <>
      <h1> Welcome to JavaTpoint!! </h1>
      {bio}
    </>
  );
}

export default App;
