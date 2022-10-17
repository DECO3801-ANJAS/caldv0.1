import React from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Button from "@mui/material/Button";
import Link from "next/link";
import IArrowBack from "../interfaces/props/arrowBackProps";

// Function to return the arrow back icon
// Input : href, string
// return JSX element
export default function ArrowBack({ href }: IArrowBack) {

  return (
    <Link href={href} passHref>
      <Button data-testid='arrowback-at-modules' variant="text" startIcon={<ArrowBackIosNewIcon />} />
    </Link>
  );
}
