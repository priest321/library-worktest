import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../../routes/Home";

test("Renders home route", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(screen.getByText(/Welcome/i)).toBeDefined();

  const button = screen.getByRole('button', { name: /View Books/i });
  expect(button).toBeInTheDocument();

  expect(button).toBeEnabled();
});
