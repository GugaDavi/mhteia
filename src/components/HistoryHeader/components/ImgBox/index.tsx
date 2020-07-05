import React from "react";

import { Container, Img } from "./styles";

interface Props {
  source: any;
}

const ImgBox: React.FC<Props> = ({ source }) => {
  return (
    <Container>
      <Img source={source} />
    </Container>
  );
};

export default ImgBox;
