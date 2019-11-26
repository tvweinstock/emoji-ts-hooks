import { useContext } from 'react';
import AlgoliaClientContext from './AlgoliaClientContext';

const useAlgoliaClient = () => {
  // useContext hook is using the value provided by the Algolia Client Context
  const algoliaClient = useContext(AlgoliaClientContext);
  if (!algoliaClient) {
    throw new Error('This hook should be called in an Algolia container');
  }
  return algoliaClient;
};

export default useAlgoliaClient;
