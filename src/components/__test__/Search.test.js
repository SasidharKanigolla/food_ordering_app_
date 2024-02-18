/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResList.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should render the body using search", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeClick = screen.getAllByTestId("resCard");

  expect(cardsBeforeClick.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "Hai" } });

  fireEvent.click(searchBtn);

  const cardsAfterClick = screen.getAllByTestId("resCard");

  expect(cardsAfterClick.length).toBe(2);
});
