import React, { useContext, useState, useEffect } from "react";
import SearchResultHeader from "./SearchResultHeader";
import Footer from "./Footer";
import { fetchDataFromApi } from "../utils/Api";
import SearchItemTemplate from "./SearchItemTemplate";
import SearchImageItemTemplate from "./SearchImageItemTemplate";
import Pagination from "./Pagination";

import { Context } from "../utils/ContextApi";
import { useParams } from "react-router-dom";

export default function SearchResult() {
  const [result, setResult] = useState();
  const { query, startIndex } = useParams();
  const { imageSearch } = useContext(Context);

  useEffect(() => {
    fetchSearchResult();
  }, [query, startIndex, imageSearch]);

  const fetchSearchResult = () => {
    let payload = { q: query, start: startIndex };
    if (imageSearch) {
      payload.searchType = "Image";
    }

    fetchDataFromApi(payload).then((res) => {
      console.log(res);
      setResult(res);
    });
  };

  if (!result) return;

  const { items, queries, searchInformation } = result;

  return (
    <div className="flex flex-col min-h-[100vh]">
      <SearchResultHeader />
      <main className="grow p-[12px] pb-0 md:pr-5 md:pl-20">
        <div className="flex text-sm text-[#70757a] mb-3">
          {`About ${searchInformation.formattedTotalResults} results in (${searchInformation.formattedSearchTime}) `}
        </div>

        {!imageSearch ? (
          <>
            {items.map((item, index) => (
              <SearchItemTemplate key={index} data={item} />
            ))}
          </>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
            {items.map((item, index) => (
              <SearchImageItemTemplate key={index} data={item} />
            ))}
          </div>
        )}

        <Pagination queries = {queries}/>
      </main>
      <Footer />
    </div>
  );
}
