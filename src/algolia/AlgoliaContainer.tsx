import React, { useMemo } from 'react';
import algoliasearch from 'algoliasearch';
import AlgoliaClientContext from './AlgoliaClientContext';

type AppContainerProps = { appID: string; apiKey: string };

// function that will take children and return react stuff
export const AlgoliaContainer: React.FC<AppContainerProps> = ({
  appID,
  apiKey,
  children,
}) => {
  const searchClient = useMemo(() => algoliasearch(appID, apiKey), [
    appID,
    apiKey,
  ]);
  return (
    <AlgoliaClientContext.Provider value={searchClient}>
      {children}
    </AlgoliaClientContext.Provider>
  );
};

// export default AlgoliaContext;
