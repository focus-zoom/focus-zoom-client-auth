import React from "react";
import styled from "styled-components/macro";
import oc from "../../oc.json";

interface CardProps {
  children?: JSX.Element | JSX.Element[];
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return <CardBox className={className}>{children}</CardBox>;
}

export default Card;

const CardBox = styled.article`
  border: 1px solid ${oc.gray[3]};
  background-color: ${oc.gray[0]};
  border-radius: 0.25rem;

  padding: 1rem 1rem 3rem 1rem;
`;
