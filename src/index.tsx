import React from 'react';
import ReactDom from 'react-dom';

import { AlgoliaContainer } from './AlgoliaContainer';
import App from './App';

const Root = () => {
  if (!process.env.ALGOLIA_APP_ID || !process.env.ALGOLIA_SEARCH_API_KEY) {
    return null;
  }

  return (
    <AlgoliaContainer
      appID={process.env.ALGOLIA_APP_ID}
      apiKey={process.env.ALGOLIA_SEARCH_API_KEY}
    >
      <App />
    </AlgoliaContainer>
  );
};

ReactDom.render(<Root />, document.getElementById('app'));
