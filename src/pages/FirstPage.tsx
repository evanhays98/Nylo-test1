import React from 'react';
import {
  CMSPage,
  CMSText10,
  CMSLabel,
  CMSBlock,
  CMSText2,
  CMSText4,
} from 'src/libs/core';
export const FirstPage = () => {
  return (
    <CMSPage>
      <CMSText10 text="Create & Customize Your Dream Components"></CMSText10>

      <CMSLabel text="Unleash your creativity! Easily add, create, and style components to bring your ideas to life."></CMSLabel>

      <CMSBlock>
        <CMSText2 text="New Text"></CMSText2>

        <CMSText4 text="New Text"></CMSText4>
      </CMSBlock>
    </CMSPage>
  );
};
