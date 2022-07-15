import React, { ReactNode } from "react";
import { render } from "@testing-library/react";
import { IntlProvider } from "react-intl";

interface Props {
  children: ReactNode;
}

export const TestProvider: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <IntlProvider locale="en" messages={{}} onError={() => ""}>
      {children}
    </IntlProvider>
  );
};

export const renderWithTestProvider = (children: React.ReactNode) =>
  render(<TestProvider>{children}</TestProvider>);
