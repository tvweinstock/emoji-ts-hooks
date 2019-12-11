import React, { useState } from 'react';
import useAlgoliaQuery from '../algolia/useAlgoliaQuery';
import EmojiResult from './EmojiResult';

const App = ({}) => {
  const [query, setQuery] = useState('smile');

  const hits = useAlgoliaQuery(process.env.ALGOLIA_INDEX_NAME!, query);

  return (
    <div className="px-10">
      <h1 className="text-4xl font-bold">Baby how you feelin'?</h1>
      <input
        type="text"
        value={query}
        onChange={evt => setQuery(evt.target.value)}
        className="border-solid border-gray-500 border rounded-lg px-2 py-1"
      />
      <ul>
        {hits.map(emoji => (
          <li key={emoji.url}>
            <EmojiResult emoji={emoji} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
