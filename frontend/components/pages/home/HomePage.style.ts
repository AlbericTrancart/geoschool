import styled from "styled-components";
import {
  borderRadius,
  breakpoints,
  colors,
  getSpacing,
  typography,
} from "config/stylesheet";

export const Header = styled.header`
  color: ${colors.lighterGrey};
  background-color: ${colors.darkGrey};
  padding-top: ${getSpacing(1)};
  padding-bottom: ${getSpacing(1)};
  box-shadow: 0 0 5px ${colors.darkerGrey};
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLogo = styled.img`
  max-height: ${getSpacing(6)};
  max-width: 100%;
`;

export const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${getSpacing(2)};
`;

export const Link = styled.a`
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }
`;

export const Section = styled.section`
  padding-top: ${getSpacing(4)};
  padding-bottom: ${getSpacing(4)};
  text-align: center;
`;

export const FirstSection = styled(Section)`
  padding-top: ${getSpacing(14)};
  padding-bottom: ${getSpacing(14)};
  background: url("images/blurry-background.png") no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  ${typography.big}
`;

export const FirstSectionGrid = styled.div`
  display: grid;
  gap: ${getSpacing(4)};
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FirstCallout = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getSpacing(2)};
`;

export const MainTitle = styled.h1`
  ${typography.huge};
`;

export const Subtitle = styled.h2`
  ${typography.bigger};
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  margin: 0 auto;
  object-fit: cover;
  width: 100%;
  max-height: 100%;
`;

export const SecondSection = styled(Section)`
  color: ${colors.white};
  background-color: ${colors.blue};
  ${typography.bigger};
`;

export const ThirdSectionGrid = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  gap: ${getSpacing(2)};
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

export const Callout = styled.div`
  @media (min-width: ${breakpoints.sm}) {
    grid-column: span 5;
  }

  ${typography.big};
  ${Subtitle} {
    font-weight: bold;
  }
`;

export const Pictogram = styled(Image)`
  max-height: ${getSpacing(12)};
  width: auto;
`;

export const Thumbnail = styled(Image)`
  @media (min-width: ${breakpoints.sm}) {
    grid-column: span 6;
  }

  padding: ${getSpacing(0.5)};
  border: 1px solid ${colors.lightGrey};
  border-radius: ${borderRadius};
`;

export const FourthSection = styled(Section)`
  background-color: ${colors.lighterGrey};
`;

export const FourthSectionGrid = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  gap: ${getSpacing(2)};
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Footer = styled.footer`
  color: ${colors.lighterGrey};
  background-color: ${colors.darkGrey};
  padding: ${getSpacing(6)} 0;
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: ${getSpacing(2)};
`;

export const Footmark = styled.div`
  margin-top: ${getSpacing(2)};
  color: ${colors.lightGrey};
  ${typography.small};
`;

export const Button = styled.button`
  background-color: ${colors.blue};
  color: ${colors.white};
  border-radius: ${borderRadius};
  border: none;
  cursor: pointer;
  width: 100%;
  padding: ${getSpacing(1)} ${getSpacing(2)};
  ${typography.big};

  &:hover,
  &:focus,
  &:active {
    background-color: ${colors.darkBlue};
  }
`;
