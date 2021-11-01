import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

import { StyledSocailIcons } from "./styles/SocialIcons.styled";

export default function SocialIcon() {
  return (
    <StyledSocailIcons>
      <li>
        <a href="http://twitter.com">
          <FaTwitter />
        </a>
        </li>

        <li>
        <a href="http://facebook.com">
          <FaFacebook />
        </a>
        </li>

        <li>
        <a href="http://linkedin.com">
          <FaLinkedin />
        </a>
        </li>
      
    </StyledSocailIcons>
  );
}
