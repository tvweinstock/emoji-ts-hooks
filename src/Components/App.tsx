import React, { useState } from 'react';
import useAlgoliaQuery from '../algolia/useAlgoliaQuery';
import EmojiResult from './EmojiResult';

const App = ({}) => {
  const [query, setQuery] = useState('smile');

  const hits = useAlgoliaQuery(process.env.ALGOLIA_INDEX_NAME!, query);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={evt => setQuery(evt.target.value)}
      />
      <ul>
        {hits.map(hit => (
          <li key={hit.url}>{hit.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
