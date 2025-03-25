import React from 'react'
import SearchBar from './features/search/SearchBar'
import SearchList from './features/search/SearchList'
import Loading from './loading'
import { Suspense } from 'react';

const Dashboard = async ({
    searchParams,
}: {
    searchParams?: {
        query?:string; //question mark implies optional!!!
    };
}) => {
    const query = await (searchParams?.query) || '';
    console.log("query: ", query);
  return (
    <div>
    <Suspense fallback={Loading()}>
        <SearchBar />
        <SearchList query={query} />
    </Suspense>
    
    </div>
  )
}

export default Dashboard