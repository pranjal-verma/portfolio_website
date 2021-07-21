import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! I am <strong> Pranjal </strong> <br />
      </SectionTitle>

      <SectionText>
        I am self-taught programmer based in New Delhi, India. Finding solution
        to problems and successfully implementing the solution is a really
        rewarding experience for me hence I love progamming
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;
