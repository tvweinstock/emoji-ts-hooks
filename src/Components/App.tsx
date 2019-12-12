import React, { useState } from 'react';
import useAlgoliaQuery from '../algolia/useAlgoliaQuery';
import EmojiResult from './EmojiResult';
import { Emoji } from '../../types';

const App = ({}) => {
  const [query, setQuery] = useState('xmas');
  const [selectedVendor, setSelectedVendor] = useState('Apple');

  const hits: Emoji[] = useAlgoliaQuery(process.env.ALGOLIA_INDEX_NAME!, query);

  const vendors = Array.from(
    new Set(hits.flatMap(hit => hit.vendors).map(vendor => vendor.name))
  );

  return (
    <div className="px-10">
      <h1 className="text-4xl font-bold">Baby how you feelin'?</h1>
      <h1>Vendors</h1>
      <ul>
        {vendors.map(vendor => (
          <li>
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
      <input
        type="text"
        value={query}
        onChange={evt => setQuery(evt.target.value)}
        className="border-solid border-gray-500 border rounded-lg px-2 py-1"
      />
      <ul>
        {hits.map(emoji => (
          <li key={emoji.url}>
            <EmojiResult emoji={emoji} vendor={selectedVendor} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
