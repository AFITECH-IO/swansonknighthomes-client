import * as React from "react";
import { Page, Footer } from "~src/components";
import {
  Header,
  HeroSection,
  NewsLetterSection,
  FeaturePeakSection,
  IncentivesSection,
  TestimonialSection,
  StatSection,
  ContactSection,
} from "../components";

export const ComingSoon = () => {
  return (
    <Page>
      <Header />
      <HeroSection />
      <StatSection />
      <FeaturePeakSection />
      <IncentivesSection />
      <NewsLetterSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </Page>
  );
};
