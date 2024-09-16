import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../../routes/Home";

test("Renders home route", () => {
  render(<Home />);

  expect(screen.getByText(/Welcome/i)).toBeDefined();
});
