import React, { useMemo } from 'react';
import algoliasearch from 'algoliasearch';
const AlgoliaContext = React.createContext<algoliasearch.Client | null>(null);

// function that will take children and return react stuff
const AlgoliaContainer: React.FC = ({ children }) => {
  const searchClient = useMemo(
    () => algoliasearch('J689A3Q3TB', '3b07b5c35ff7d6be9d6c9f4242f938d0'),
    []
  );
  return (
    <AlgoliaContext.Provider value={searchClient}>
      {children}
    </AlgoliaContext.Provider>
  );
};

//algolia transferindex -a KMUWMLWY8M -k 2705ba0564cf75e69c8a4f5d222fb2bf -n prod -d 2HQS2IU4JI -y beeba973eadcacd2014074c016909417 -i test_tp
