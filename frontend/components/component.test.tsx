import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { Container } from "./component";

describe("Component", () => {
  it("should have no basic accessibility issues", async () => {
    const { container } = render(<Container>Test</Container>);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
