import React, { useState } from 'react';
import useAlgoliaQuery from '../algolia/useAlgoliaQuery';
import EmojiResult from './EmojiResult';
import { Emoji } from '../../types';

const App = ({}) => {
  const [query, setQuery] = useState('');
  const [selectedVendor, setSelectedVendor] = useState('Apple');

  const hits: Emoji[] = useAlgoliaQuery(process.env.ALGOLIA_INDEX_NAME!, query);

  const vendors = Array.from(
    new Set(hits.flatMap(hit => hit.vendors).map(vendor => vendor.name))
  );

  return (
    <React.Fragment>
      <header className="mb-5">
        <h1 className="text-3xl mb-3">Baby how you feelin?</h1>
        <input
          type="text"
          value={query}
          onChange={evt => setQuery(evt.target.value)}
          className="border-solid border-gray-500 border rounded-lg px-2 py-1"
        />
      </header>
      <div className="sidebar">
        <h3 className="text-2xl">Vendors</h3>
        <ul>
          {vendors.map(vendor => (
            <li key={vendor}>
              <label>
                {vendor}
                <input
                  type="radio"
                  value={vendor}
                  name="vendor"
                  checked={vendor === selectedVendor}
                  onChange={evt => setSelectedVendor(evt.target.value)}
                />
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="search">
        <ul>
          {hits.map(emoji => (
            <li key={emoji.url}>
              <EmojiResult emoji={emoji} vendor={selectedVendor} />
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default App;
