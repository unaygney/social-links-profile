import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "./index";

describe("Button", () => {
  it("should render the button without crashing", () => {
    render(<Button />);

    const element = screen.getByText(/This is a button/i);
    expect(element).toBeInTheDocument();
  });
});
