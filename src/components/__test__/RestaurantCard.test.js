/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import resCardMocks from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("should load props", () => {
  render(<RestaurantCard resObj={resCardMocks} />);

  const name = screen.getByText("Relax Tea Corner & Restaurant");

  expect(name).toBeInTheDocument();
});
