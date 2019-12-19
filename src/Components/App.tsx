import React, { useState, useEffect } from 'react';
import useAlgoliaQuery from '../algolia/useAlgoliaQuery';
import EmojiResult from './EmojiResult';
import { Emoji } from '../../types';
import { useSearchParam } from 'react-use';

const App = ({}) => {
  const queryParam = useSearchParam('query');
  const [query, setQuery] = useState(queryParam || '');
  const [selectedVendor, setSelectedVendor] = useState('Apple');

  const hits: Emoji[] = useAlgoliaQuery(process.env.ALGOLIA_INDEX_NAME!, query);

  const vendors = Array.from(
    new Set(hits.flatMap(hit => hit.vendors).map(vendor => vendor.name))
  );

  useEffect(() => {
    history.pushState(
      {},
      '',
      location.pathname + `?query=${encodeURIComponent(query)}`
    );
  }, [query]);

  return (
    <React.Fragment>
      <header className="mb-5 w-9/12">
        <h1 className="text-3xl mb-3">Baby how you feelin?</h1>
        <input
          type="text"
          value={query}
          onChange={evt => setQuery(evt.target.value)}
          placeholder="An emoji is worth a thousands words..."
          className="border-solid border-gray-500 border rounded-lg px-2 py-1 w-full hover:bg-white hover:border-gray-300 focus:outline-none focus:bg-white focus:shadow-outline focus:border-gray-300"
        />
      </header>
      <div className="sidebar">
        <h3 className="text-2xl">Vendors</h3>
        <ul>
          {vendors.map(vendor => (
            <li key={vendor}>
              <input
                type="radio"
                value={vendor}
                id={vendor}
                name="vendor"
                checked={vendor === selectedVendor}
                onChange={evt => setSelectedVendor(evt.target.value)}
              />
              <label for={vendor}>{vendor}</label>
            </li>
          ))}
        </ul>
      </div>
      <div className="search">
        {hits.length > 0 ? (
          <ul>
            {hits.map(emoji => (
              <li key={emoji.url}>
                <EmojiResult emoji={emoji} vendor={selectedVendor} />
              </li>
            ))}
          </ul>
        ) : (
          <div>empty state</div>
        )}
      </div>
    </React.Fragment>
  );
};

export default App;
