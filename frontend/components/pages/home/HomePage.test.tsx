import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import HomePage from "./HomePage";

describe("HomePage", () => {
  it("should have no basic accessibility issues", async () => {
    const { container } = render(<HomePage />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
