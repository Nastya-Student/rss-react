import React from "react";
import { SearchButton } from "./SearchButton";
import { SearchInput } from "./SearchInput";

type TopControlsProps = {
  
}

export class TopControls extends React.Component {
  render () {
    return <div>
      <SearchInput></SearchInput>
      <SearchButton  class={"button"}>hello</SearchButton>
    </div>
  }
}