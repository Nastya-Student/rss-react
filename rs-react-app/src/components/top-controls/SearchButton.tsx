import React, { type ReactNode } from "react";

type SearchButtonProps = {
  children: ReactNode;
}

type SearchButtonState = {
  count: number;
}

export class SearchButton extends React.Component <SearchButtonProps, SearchButtonState> {
  constructor (props: SearchButtonProps) {
    super (props);
    this.state = {
      count:0,
    }
  }

  onClickBtn = () =>{
    this.setState({
      count: this.state.count + 1,
    })
  }

  render () {
    return <button onClick={this.onClickBtn}>{this.state.count}{this.props.children}</button>
  }
}