import { useEffect, useState } from "react";

export function useFilteredList(list, filterCallback) {
  const [filterText, setFilterText] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    let newList = list;
    if (filterText.length > 0) {
      newList = [...list];
      const filteringCallback = filterCallback(filterText.toLocaleLowerCase());
      newList = newList.filter(filteringCallback);
      console.log("new list", newList);
    }
    setFilteredList(newList);
  }, [list, filterText, filterCallback]);
  return [filterText, setFilterText, filteredList];
}
