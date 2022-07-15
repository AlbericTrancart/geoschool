import React from "react";
import { axe } from "jest-axe";
import { renderWithTestProvider } from "services/test/TestProvider";
import HomePage from "./HomePage";

describe("HomePage", () => {
  it("should have no basic accessibility issues", async () => {
    const { container } = renderWithTestProvider(<HomePage />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
