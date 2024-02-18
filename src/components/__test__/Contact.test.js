/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test case", () => {
  test("should load Contact us heading component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("should load Contact us button component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("should load Contact us inputname component", () => {
    render(<Contact />);

    const inputname = screen.getByPlaceholderText("name");

    expect(inputname).toBeInTheDocument();
  });

  test("should load Contact us 2 input boxes components", () => {
    render(<Contact />);

    const inputbox = screen.getAllByRole("textbox");

    expect(inputbox.length).toBe(2);
  });
});
