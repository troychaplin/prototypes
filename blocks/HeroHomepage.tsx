"use client";
import React from "react";
import { Hero } from "@/components/Hero";
import { ButtonGroup } from "@/components/ButtonGroup";
import { Button } from "@/components/Button";

export const HeroHomepage = () => {
  return (
    <Hero addSpace>
      <Hero.Content header="The document apostille process made simple">
        <p>
          We expertly manage all aspects of the document apostille &ndash;
          authentication & legalization &ndash; attestation &ndash; process for
          our clients. If you need to present Canadian documents in a foreign
          jurisdiction we can help!
        </p>
        <ButtonGroup>
          <Button label="Primary Button" />
          <Button label="Secondary Button" textColor="dark" isOutline />
        </ButtonGroup>
      </Hero.Content>
      <Hero.Image>
        <p>Image</p>
      </Hero.Image>
    </Hero>
  );
};
