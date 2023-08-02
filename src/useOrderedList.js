import { useEffect, useState } from "react";
export function useOrderedList(list, sortingCallback) {
  const [sortingField, setSortingFiled] = useState("");
  const [sortedList, setSortedList] = useState([]);
  useEffect(() => {
    let newList = list;
    if (sortingField.length > 0) {
      newList = [...list];
      newList = newList.sort(sortingCallback(sortingField));
    }
    setSortedList(newList);
  }, [sortingField, list, sortingCallback]);
  return [sortingField, setSortingFiled, sortedList];
}
