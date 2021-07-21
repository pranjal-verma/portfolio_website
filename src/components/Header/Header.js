import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import { BiCodeCurly } from "react-icons/bi";

import {
  Container,
  Div1,
  Div2 as DivNavLink,
  Div3 as Social,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <>
    <Container>
      <Div1>
        <Link href="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              paddingBottom: 20,
            }}
          >
            <BiCodeCurly size="2rem" />
            <span
              style={{
                marginLeft: "1.5 rem",
                // paddingLeft: "2rem",
                padding: "0.5rem",
                fontSize: "2rem",
              }}
            >
              Pranjal Verma
            </span>
          </a>
        </Link>
      </Div1>

      <DivNavLink>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>

        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>

        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </DivNavLink>

      <Social>
        <SocialIcons href="https://github.com/pranjal-verma">
          <AiFillGithub size="3rem" />
        </SocialIcons>

        <SocialIcons href="https://www.linkedin.com/in/pranjal-verma-546b98168/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>

        <SocialIcons>
          <AiFillTwitterCircle size="3rem" />
        </SocialIcons>
      </Social>
    </Container>
  </>
);

export default Header;
