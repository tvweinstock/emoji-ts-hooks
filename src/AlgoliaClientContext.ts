import { createContext } from 'react';

const AlgoliaContext = createContext<algoliasearch.Client | null>(null);

export default AlgoliaContext;
