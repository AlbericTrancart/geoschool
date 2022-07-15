import React from "react";
import { useIntl } from "react-intl";
import { NextPage } from "next";
import { FluidContainer } from "components/ui/layout/Layout";
import {
  Button,
  Callout,
  FirstCallout,
  FirstSection,
  FirstSectionGrid,
  Footer,
  FooterLinks,
  Footmark,
  FourthSection,
  FourthSectionGrid,
  Header,
  HeaderLinks,
  HeaderLogo,
  HeaderRow,
  Image,
  ImageContainer,
  Link,
  MainTitle,
  Pictogram,
  SecondSection,
  Section,
  Subtitle,
  ThirdSectionGrid,
  Thumbnail,
} from "./HomePage.style";

const HomePage: NextPage = () => {
  const intl = useIntl();

  return (
    <>
      <Header>
        <FluidContainer>
          <HeaderRow>
            <HeaderLogo
              src="images/logo-name.png"
              alt={intl.formatMessage({ id: "layout.header.logoAlt" })}
            />
            <HeaderLinks>
              <Link>{intl.formatMessage({ id: "pages.home.signUp" })}</Link>
              <Link>{intl.formatMessage({ id: "pages.home.signIn" })}</Link>
            </HeaderLinks>
          </HeaderRow>
        </FluidContainer>
      </Header>
      <FirstSection>
        <FluidContainer>
          <FirstSectionGrid>
            <FirstCallout>
              <MainTitle>
                {intl.formatMessage({ id: "pages.home.title" }, { br: <br /> })}
              </MainTitle>
              <Subtitle>
                {intl.formatMessage({ id: "pages.home.onlyYouLeft" })}
              </Subtitle>

              <Button>
                {intl.formatMessage({ id: "pages.home.signUpCallout" })}
              </Button>
              <div>
                <Link>
                  {intl.formatMessage({ id: "pages.home.signInCallout" })}
                </Link>
              </div>
            </FirstCallout>

            <ImageContainer>
              <Image
                src="images/laptop.png"
                alt={intl.formatMessage({ id: "pages.home.titleImageAlt" })}
              />
            </ImageContainer>
          </FirstSectionGrid>
        </FluidContainer>
      </FirstSection>

      <SecondSection>
        <FluidContainer>
          {intl.formatMessage({ id: "pages.home.secondSectionTagline1" })}
          <br />
          {intl.formatMessage({ id: "pages.home.secondSectionTagline2" })}
          <br />
          {intl.formatMessage({ id: "pages.home.secondSectionTagline3" })}
        </FluidContainer>
      </SecondSection>

      <Section>
        <FluidContainer>
          <ThirdSectionGrid>
            <Pictogram src="images/pin.svg" alt="" />
            <Callout>
              <Subtitle>
                {intl.formatMessage({
                  id: "pages.home.thirdSectionTaglineTitle1",
                })}
              </Subtitle>

              {intl.formatMessage({ id: "pages.home.thirdSectionTagline1" })}
            </Callout>
            <Thumbnail src="images/search.png" alt="" />

            <Thumbnail src="images/filters.png" alt="" />
            <Callout>
              <Subtitle>
                {intl.formatMessage({
                  id: "pages.home.thirdSectionTaglineTitle2",
                })}
              </Subtitle>

              {intl.formatMessage({ id: "pages.home.thirdSectionTagline2" })}
            </Callout>
            <Pictogram src="images/loupe.png" alt="" />
          </ThirdSectionGrid>
        </FluidContainer>
      </Section>

      <FourthSection>
        <FluidContainer>
          <FourthSectionGrid>
            <div>
              <Pictogram src="images/enveloppe.svg" alt="" />
              <Callout>
                <Subtitle>
                  {intl.formatMessage({
                    id: "pages.home.fourthSectionTaglineTitle1",
                  })}
                </Subtitle>
                {intl.formatMessage({ id: "pages.home.fourthSectionTagline1" })}
              </Callout>
            </div>
            <div>
              <Pictogram src="images/bulle.svg" alt="" />
              <Callout>
                <Subtitle>
                  {intl.formatMessage({
                    id: "pages.home.fourthSectionTaglineTitle2",
                  })}
                </Subtitle>
                {intl.formatMessage({ id: "pages.home.fourthSectionTagline2" })}
              </Callout>
            </div>
            <div>
              <Pictogram src="images/logo.svg" alt="" />
              <Callout>
                <Subtitle>
                  {intl.formatMessage({
                    id: "pages.home.fourthSectionTaglineTitle3",
                  })}
                </Subtitle>
                {intl.formatMessage({ id: "pages.home.fourthSectionTagline3" })}
              </Callout>
            </div>
          </FourthSectionGrid>
        </FluidContainer>
      </FourthSection>

      <Footer>
        <FluidContainer>
          <FooterLinks>
            <Link>{intl.formatMessage({ id: "pages.home.signUp" })}</Link>
            <Link>{intl.formatMessage({ id: "pages.home.signIn" })}</Link>
          </FooterLinks>
          <Footmark>
            {intl.formatMessage({ id: "layout.footer.copyright" })}
          </Footmark>
        </FluidContainer>
      </Footer>
    </>
  );
};

export default HomePage;
