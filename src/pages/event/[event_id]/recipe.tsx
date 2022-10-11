import type { NextPage } from 'next'
import Grid from '@mui/material/Grid';
import { Paper, Typography } from '@mui/material';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Button from '@mui/material/Button';
import { useMediaQuery } from "@mui/material";
import Image from 'next/image';
import Clock from '../../../components/Clock';
import Link from 'next/link'

import "@fontsource/open-sans";
import "@fontsource/mohave";
import "@fontsource/montserrat";
import ArrowBack from '../../../components/ArrowBack';
import { useRouter } from 'next/router';

const current = new Date();
const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

const theme = createTheme({
    typography: {
        fontFamily: [
            'Open Sans',
            'Mohave',
            'sans-serif',
            'montserrat'
        ].join(',')
    },
    palette: {
        primary: {
            main: "#784CF4"
        }
    },
});

const EventDetailRecipe: NextPage = () => {

    const isXXS = useMediaQuery("(max-width:600px)");
    const router = useRouter()

    return (
        <>
            <ThemeProvider theme={theme}>

                <Grid container justifyContent='space-between' style={{ padding: "1rem" }}>
                    <Grid item xs={6}>
                        <ArrowBack href={`/event/${router.query.event_id}`} />
                    </Grid>
                    <Grid item xs={6} sx={{ textAlign: "right" }}>
                        <Typography fontFamily='Open Sans'>Brisbane, {date}</Typography>
                        <Clock />
                    </Grid>
                </Grid>

                <Grid container style={isXXS ? { marginBottom: "9rem" } : { marginBottom: "3rem" }}>
                    <Grid item xs={12} style={{ padding: "1rem" }}>
                        <Typography fontFamily="Open Sans" component="h1" variant="h5" color={"#784CF4"}>Ingridients: </Typography>
                        <Typography fontFamily="Open Sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet varius imperdiet. Proin quis eros eget dolor vehicula facilisis et vitae est. Nam ac metus ac mauris sagittis pretium. Nam elit nunc, luctus in dui ac, dignissim varius mauris. Sed eu mi efficitur, imperdiet eros ut, dignissim elit. Pellentesque cursus magna a lacus laoreet, nec vehicula urna viverra. Donec pharetra, felis at efficitur fringilla, purus sem placerat arcu, eu sagittis ipsum orci nec turpis. Etiam auctor velit non mauris viverra, a fringilla dui vulputate. Nam ut purus mattis, sodales arcu eget, cursus diam. Ut faucibus purus a mi consequat, a rhoncus metus ultrices.

                            Aliquam erat volutpat. Mauris non purus id lectus aliquam blandit sit amet eu turpis. Donec dictum libero sit amet finibus tincidunt. Integer auctor placerat neque sed finibus. Phasellus vitae dignissim enim. Praesent ac justo eget orci accumsan scelerisque. Nunc aliquam, ex at imperdiet commodo, enim leo blandit nunc, id auctor tortor justo in quam. Vestibulum dignissim, diam eu consectetur euismod, lacus enim pellentesque lorem, sed lacinia odio quam eu risus.</Typography>
                    </Grid>
                    <Grid item xs={12} style={{ padding: "1rem" }}>
                        <Typography fontFamily="Open Sans" component="h1" variant="h5" color={"#784CF4"}>Recipe: </Typography>
                        <Typography fontFamily="Open Sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet varius imperdiet. Proin quis eros eget dolor vehicula facilisis et vitae est. Nam ac metus ac mauris sagittis pretium. Nam elit nunc, luctus in dui ac, dignissim varius mauris. Sed eu mi efficitur, imperdiet eros ut, dignissim elit. Pellentesque cursus magna a lacus laoreet, nec vehicula urna viverra. Donec pharetra, felis at efficitur fringilla, purus sem placerat arcu, eu sagittis ipsum orci nec turpis. Etiam auctor velit non mauris viverra, a fringilla dui vulputate. Nam ut purus mattis, sodales arcu eget, cursus diam. Ut faucibus purus a mi consequat, a rhoncus metus ultrices.

                            Aliquam erat volutpat. Mauris non purus id lectus aliquam blandit sit amet eu turpis. Donec dictum libero sit amet finibus tincidunt. Integer auctor placerat neque sed finibus. Phasellus vitae dignissim enim. Praesent ac justo eget orci accumsan scelerisque. Nunc aliquam, ex at imperdiet commodo, enim leo blandit nunc, id auctor tortor justo in quam. Vestibulum dignissim, diam eu consectetur euismod, lacus enim pellentesque lorem, sed lacinia odio quam eu risus.</Typography>
                    </Grid>
                </Grid>

            </ThemeProvider>
        </>
    )
}

export default EventDetailRecipe
