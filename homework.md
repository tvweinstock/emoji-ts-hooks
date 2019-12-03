~~- Update AlgoliaContainer so it can take two new props, the application id and the search api key
\_ I want those props to be typed!
See https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#function-components~~

~~- It must return create new instance of the search client one of those two props changes, otherwise it always returns the same instance
See https://reactjs.org/docs/hooks-reference.html#usememo
See https://reactjs.org/docs/hooks-custom.html#extracting-a-custom-hook~~

~~- Create a useAlgoliaClient custom hook. It uses the AlgoliaContext we created, and returns the searchClient
(see https://reactjs.org/docs/hooks-reference.html#usecontext)~~

~~- Create a useAlgoliaIndex custom hook (this will need useAlgoliaClient, hooks within hooks)~~

~~- It takes an indexName as a parameter

- It returns an algoliaClient.initIndex()
- use useMemo so that the same instance of the algolia index is returned unless the index Name changes~~

* Create a useQuery custom hook
  - It takes an indexName and a query string
  - It stores a list of hits (any[]) with useState. It’s initialised with an empty array
  - Everytime the query or the algoliaIndex changes, it triggers a search. The hits from that search are stored in the state (use useEffect! https://reactjs.org/docs/hooks-reference.html#useeffect)
  - It returns a list of hits
* Wrap your app with the AlgoliaContainer so that the algoliaClient is available everywhere in your app
* Create a SearchPage component
  _ It contains an input and a list of hits
  _ It stores the current query value with useState
  _ It uses the const hits = useQuery(indexName, query) hook created earlier
  _ The input is controlled, its value is the query stored thank to useState, and it updates the state with the onChange hook (you already have that boilerplate setup
  Expected result: https://emojis-search.netlify.com/ but ugly
