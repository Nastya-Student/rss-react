import React, { type ChangeEvent } from "react";

type SearchInputProps = {
  id: string;
  type: "string";
  placeholder: string;
  initialValue: string;
  onChange: (value:string)=>void;
}

type SearchInputState = {
  value: string;
}

export class SearchInput extends React.Component<SearchInputProps, SearchInputState> {

  constructor(props:SearchInputProps){
    super(props);
    this.state = {
      value: props.initialValue
    }
  }

  handleInput = (event: ChangeEvent<HTMLInputElement>):void => {
    this.setState({value: event.target.value});
    localStorage.setItem("last-search", event.target.value);
    this.props.onChange(event.target.value);
  }

  render () {
    return <input 
    id={this.props.id} 
    type={this.props.type}
    placeholder={this.props.placeholder} 
    value={this.state.value} 
    onChange={this.handleInput}>
    </input>
  }
}