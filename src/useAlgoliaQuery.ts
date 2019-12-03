import React, { useState, useEffect } from 'react';
import useAlgoliaIndex from './useAlgoliaIndex';
import { any } from 'prop-types';

// Create a useQuery custom hook -- - It takes an indexName and a query string
const useAlgoliaQuery = (indexName: string, query: string) => {
  const AlgoliaIndex = useAlgoliaIndex(indexName);

  //   - It stores a list of hits (any[]) with useState. It’s initialised with an empty array
  const [hits, setHits] = useState(<any>[]);

  // Every time the query or the algoliaIndex changes, it triggers a search. The hits from that search are stored in the state (use useEffect! https://reactjs.org/docs/hooks-reference.html#useeffect)
  useEffect(() => {
    function handleQueryChange(query) {
      setHits(query);
    }

    AlgoliaIndex.search(
      {
        query: evt.target.value,
      },
      (err, { hits } = {}) => {
        if (err) throw err;

        console.log(hits);
      }
    );
    // It returns a list of hits
  });

  return AlgoliaQuery;
};

export default useAlgoliaQuery;
