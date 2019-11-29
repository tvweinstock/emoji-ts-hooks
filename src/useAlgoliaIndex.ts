import React, { useMemo } from 'react';
import useAlgoliaClient from './useAlgoliaClient';

const useAlgoliaIndex = (indexName: string) => {
  const AlgoliaClient = useAlgoliaClient();
  const AlgoliaIndex = useMemo(() => AlgoliaClient.initIndex(indexName), [
    indexName,
  ]);
  return AlgoliaIndex;
};

export default useAlgoliaIndex;
