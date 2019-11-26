import React, { useState } from 'react';
import useAlgoliaClient from './useAlgoliaClient';

const App = ({}) => {
  const [value, setValue] = useState('foo');
  const AlgoliaClient = useAlgoliaClient();
  console.log(AlgoliaClient);

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setValue('toto');
  //   }, 2000);

  //   return () => clearTimeout(timeoutId);
  // }, [value]);

  const handleSearch = evt => {
    setValue(evt.target.value);
    // index.search(
    //   {
    //     query: evt.target.value,
    //   },
    //   (err, { hits } = {}) => {
    //     if (err) throw err;

    //     console.log(hits);
    //   }
    // );
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        // onChange={handleSearch}
        onChange={evt => setValue(evt.target.value)}
      />
    </div>
  );
};

export default App;
