/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should load login button ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button");

  expect(loginButton).toBeInTheDocument();
});

test("Should load header with cart 0 items  ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartLength = screen.getByText("cart - 0 items");

  expect(cartLength).toBeInTheDocument();
});

test("Should load header with cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartLength = screen.getByText(/cart/);

  expect(cartLength).toBeInTheDocument();
});

test("Should load logout button after a click on login button ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  
  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });
  
  expect(logoutButton).toBeInTheDocument();
});
