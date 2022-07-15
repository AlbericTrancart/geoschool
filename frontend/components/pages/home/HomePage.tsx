import React from "react";
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

const HomePage: NextPage = () => (
  <>
    <Header>
      <FluidContainer>
        <HeaderRow>
          <HeaderLogo src="images/logo-name.png" alt="Logo de GéoSchool" />
          <HeaderLinks>
            <Link>Inscription</Link>
            <Link>Connexion</Link>
          </HeaderLinks>
        </HeaderRow>
      </FluidContainer>
    </Header>
    <FirstSection>
      <FluidContainer>
        <FirstSectionGrid>
          <FirstCallout>
            <MainTitle>
              Tous les Ponts
              <br />
              sont ici&nbsp;📍
            </MainTitle>
            <Subtitle>Il ne manque plus que toi !</Subtitle>

            <Button>Inscris-toi pour accéder à la carte</Button>
            <div>
              <Link>Déjà inscrit ? Connecte-toi</Link>
            </div>
          </FirstCallout>

          <ImageContainer>
            <Image
              src="images/laptop.png"
              alt="GéoPonts - la carte des étudiants et diplômés des Ponts !"
            />
          </ImageContainer>
        </FirstSectionGrid>
      </FluidContainer>
      {/* TODO landing lower part */}
    </FirstSection>

    <SecondSection>
      <FluidContainer>
        Où est parti le reste de ta <strong>promo</strong>&nbsp;?
        <br />
        Qui est passé par <strong>Stockholm</strong>, et qu&apos;en ont-ils
        pensé&nbsp;?
        <br />
        Tu veux <strong>contacter les vieux</strong> qui font{" "}
        <strong>le job de tes rêves à New York</strong>&nbsp;?
      </FluidContainer>
    </SecondSection>

    <Section>
      <FluidContainer>
        <ThirdSectionGrid>
          <Pictogram src="images/pin.svg" alt="" />
          <Callout>
            <Subtitle>Cherche et trouve</Subtitle>
            tes camarades de promotion
          </Callout>
          <Thumbnail src="images/search.png" alt="" />

          <Thumbnail src="images/filters.png" alt="" />
          <Callout>
            <Subtitle>Explore</Subtitle>
            {
              "les cinq continents et découvre qui travaille dans les endroits qui t'intéressent"
            }
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
              <Subtitle>Contacte</Subtitle>
              <span>facilement les autres diplômés</span>
            </Callout>
          </div>
          <div>
            <Pictogram src="images/bulle.svg" alt="" />
            <Callout>
              <Subtitle>Vends du rêve</Subtitle>
              <span>en décrivant tes expériences</span>
            </Callout>
          </div>
          <div>
            <Pictogram src="images/logo.svg" alt="" />
            <Callout>
              <Subtitle>Grâce à GéoPonts</Subtitle>
              <span>(cool, non ?)</span>
            </Callout>
          </div>
        </FourthSectionGrid>
      </FluidContainer>
    </FourthSection>

    <Footer>
      <FluidContainer>
        <FooterLinks>
          <Link>Inscription</Link>
          <Link>Connexion</Link>
        </FooterLinks>
        <Footmark>
          Copyright &copy; GéoSchool 2022. All Rights Reserved.
        </Footmark>
      </FluidContainer>
    </Footer>
  </>
);

export default HomePage;
