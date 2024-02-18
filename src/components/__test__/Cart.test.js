/* eslint-disable no-undef */
import RestaurantMenu from "../RestaurantMenu";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../redux/appStore.js";
import { Provider } from "react-redux";
import Header from "../Header.jsx";
import Cart from "../Cart.jsx";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should load Restaurant Menu component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />;
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const AccordianHeader = screen.getByText("Recommended (20)");
  fireEvent.click(AccordianHeader);

  const addbtns = screen.getAllByText("Add +");

  expect(screen.getByText("cart - 0 items")).toBeInTheDocument();

  fireEvent.click(addbtns[0]);

  expect(screen.getByText("cart - 1 items")).toBeInTheDocument();

  fireEvent.click(addbtns[0]);

  expect(screen.getByText("cart - 2 items")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(22);
  
  fireEvent.click(screen.getByRole("button", { name: "Clear cart" }));
  
  expect(screen.getAllByTestId("foodItems").length).toBe(20);

});
