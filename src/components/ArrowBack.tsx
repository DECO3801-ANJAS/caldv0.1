import React from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Button from "@mui/material/Button";
import Link from "next/link";
import IArrowBack from "../interfaces/props/arrowBackProps";

export default function ArrowBack( { href } : IArrowBack) {

  return (
    <Link href={href} passHref>
        <Button data-testid='arrowback-at-modules' variant="text" startIcon={<ArrowBackIosNewIcon />}/>
    </Link>
  );
}
