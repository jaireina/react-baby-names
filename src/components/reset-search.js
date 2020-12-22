import React from "react";
import { useAppState } from "../providers/app-state";

export default function ResetSearch() {
  const { searchValue, updateSearchValue } = useAppState();
  if (!searchValue) {
    return null;
  }

  return (
    <button className="reset-search" onClick={() => updateSearchValue("")}>
      reset search
    </button>
  );
}
