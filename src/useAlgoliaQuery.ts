import React, { useState, useEffect } from 'react';
import useAlgoliaIndex from './useAlgoliaIndex';
import { any } from 'prop-types';

// useQuery custom hook, It takes an indexName and a query string
const useAlgoliaQuery = (indexName: string, query: string) => {
  const AlgoliaIndex = useAlgoliaIndex(indexName);
  //   - It stores a list of hits (any[]) with useState. It’s initialised with an empty array
  const [results, setResults] = useState(<any>[]);

  useEffect(() => {
    AlgoliaIndex.search(
      {
        query,
        hitsPerPage: 50,
      },
      (err, { hits } = {}) => {
        if (err) throw err;
        setResults(hits);
      }
    );
  }, [indexName, query]); // Only re-run if query or indexname changes

  return results;
};

export default useAlgoliaQuery;
