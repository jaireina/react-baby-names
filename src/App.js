import React from "react";
import { NamePicker } from "./components/name-picker";
import ResetSearch from "./components/reset-search";
import Search from "./components/search";
import ShortList from "./components/short-list";

function App() {
  return (
    <>
      <Search />
      <ShortList />
      <NamePicker />
      <ResetSearch></ResetSearch>
    </>
  );
}

export default App;
