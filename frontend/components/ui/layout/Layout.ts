import styled from "styled-components";
import { breakpoints, getSpacing } from "config/stylesheet";

export const FluidContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: ${getSpacing(2)};
  padding-right: ${getSpacing(2)};

  @media (min-width: ${breakpoints.sm}) {
    width: ${breakpoints.sm};
  }
  @media (min-width: ${breakpoints.md}) {
    width: ${breakpoints.md};
  }
`;
