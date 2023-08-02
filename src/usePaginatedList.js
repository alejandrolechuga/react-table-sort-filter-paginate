import { useEffect, useState } from "react";

export function usePaginatedList(list, paginationSize) {
  const [pageIndex, setPageIndex] = useState(0);
  const [paginatedList, setPaginatedList] = useState([]);

  useEffect(() => {
    let currentWindow = pageIndex * paginationSize;
    let slice = list.slice(currentWindow, currentWindow + paginationSize);
    setPaginatedList(slice);
  }, [pageIndex, list, paginationSize]);

  const nextPage = () => {
    // Calculate the last page and makes sure the pageIndex
    // doesn't go out of that boundary
    if (pageIndex === Math.ceil(list.length / paginationSize) - 1) {
      return;
    }
    setPageIndex((prev) => prev + 1);
  };
  const backPage = () => {
    if (pageIndex === 0) {
      return;
    }
    setPageIndex((prev) => prev - 1);
  };
  return [
    nextPage,
    backPage,
    pageIndex,
    Math.ceil(list.length / paginationSize),
    paginatedList
  ];
}
