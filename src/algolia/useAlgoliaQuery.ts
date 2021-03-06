import React, { useState, useEffect } from 'react';
import useAlgoliaIndex from './useAlgoliaIndex';
import makeCancelable from '../Utils/makeCancellable';

const useAlgoliaQuery = (indexName: string, query: string) => {
  const AlgoliaIndex = useAlgoliaIndex(indexName);

  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const searchPromise = makeCancelable(
      AlgoliaIndex.search({ query, hitsPerPage: 100 })
    );
    searchPromise.then(result => setResults(result.hits));

    return () => {
      searchPromise.cancel();
    };
  }, [indexName, query]); // Only re-run if query or indexname changes

  return results;
};

export default useAlgoliaQuery;
