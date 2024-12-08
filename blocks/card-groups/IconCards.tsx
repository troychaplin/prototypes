"use client";
import React from "react";
import { CardGroup } from "@/components/CardGroup";
import { CardData } from "@/components/Card/data";
import { Card } from "@/components/Card";

export const IconCards = () => {
  return (
    <CardGroup cols={3}>
      {CardData.slice(0, 3).map(({ id, link, title, excerpt }) => (
        <Card key={id}>
          <Card.Figure>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
            </svg>
          </Card.Figure>
          <Card.Header title={title} />
          <Card.Excerpt text={excerpt} link={link} />
        </Card>
      ))}
    </CardGroup>
  );
};