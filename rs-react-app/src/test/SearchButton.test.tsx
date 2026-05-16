import { describe, expect, it } from "vitest";
import {render, screen} from "@testing-library/react"
import { SearchButton } from "../components/top-controls/SearchButton";
import type { ResponseItem } from "../api/interfaces/Response";

describe("SearchButton", ()=>{
  it("renders a search button", () => {
    render(
      <SearchButton children={'Search'} searchKey={""} 
        onGetItems = {
          function (items: ResponseItem[]): void {
            throw new Error("Function not implemented.");
          } 
        }/>
    );
    expect(screen.getByText('Search')).toBeInTheDocument();
  })
  }
);