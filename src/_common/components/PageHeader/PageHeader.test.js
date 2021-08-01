import React from "react";
import { render } from "@testing-library/react";
import PageHeader from "./PageHeader";

describe("Tests for <PageHeader />", () => {
  it("Should mount component", () => {
    const { container } = render(<PageHeader />);
    expect(container.firstChild).toBeDefined();
  });
});
