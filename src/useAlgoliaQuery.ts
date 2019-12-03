import React, { useState, useEffect } from 'react';
import useAlgoliaIndex from './useAlgoliaIndex';
import { any } from 'prop-types';

// useQuery custom hook, It takes an indexName and a query string
const useAlgoliaQuery = (indexName: string, query: string) => {
  const AlgoliaIndex = useAlgoliaIndex(indexName);
  //   - It stores a list of hits (any[]) with useState. It’s initialised with an empty array
  const [results, setResults] = useState(<any>[]);

  useEffect(() => {
    AlgoliaIndex.search({ query })
      .then(({ hits } = {}) => {
        console.log(hits);
        setResults(hits);
      })
      .catch(err => {
        console.log(err);
        console.log(err.debugData);
      });
  }, [indexName, query]); // Only re-run if query or indexname changes

  return results;
};

export default useAlgoliaQuery;
