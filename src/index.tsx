import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  'J689A3Q3TB',
  '3b07b5c35ff7d6be9d6c9f4242f938d0'
);
const index = searchClient.initIndex('emojipedia');

const App = () => {
  const [value, setValue] = useState('foo');

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setValue('toto');
  //   }, 2000);

  //   return () => clearTimeout(timeoutId);
  // }, [value]);

  const handleSearch = evt => {
    setValue(evt.target.value);
    index.search(
      {
        query: evt.target.value,
      },
      (err, { hits } = {}) => {
        if (err) throw err;

        console.log(hits);
      }
    );
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

// uncontrolled => defaultValue
// controlled => value

ReactDom.render(<App />, document.getElementById('app'));
