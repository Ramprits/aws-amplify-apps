import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 64,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      maxHeight: 48,
      maxWidth: '100%',
    }
  },
  gridItem: {
    textAlign: 'center'
  }
}));

export default function Testimonials(props) {
  const classes = useStyles();

  const content = {
    '04_header': 'What\'s So Great About PiperNet?',
    '04_description': 'We don\'t really like being called the Pipers, but Richard thought of this name and won\'t let us change it. Anyways, we are the guys that made this whole thing possible.',
    '04_primary-action': 'Customer Success Stories',
    'logo1': 'mui-assets/img/logos/gitscape.svg',
    'logo2': 'mui-assets/img/logos/plucky.svg',
    'logo3': 'mui-assets/img/logos/realweb.svg',
    'logo4': 'mui-assets/img/logos/k-hole.svg',
    'logo5': 'mui-assets/img/logos/tholio.svg',
    'logo6': 'mui-assets/img/logos/1stsight.svg',
    ...props.content
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Box pt={8} pb={6}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" gutterBottom={true}>What's So Great About PiperNet?</Typography>
              <Typography variant="body1" component="p">We don't really like being called the Pipers, but Richard thought of this name and won't let us change it. Anyways, we are the guys that made this whole thing possible.</Typography>
              <Box mt={3}>
                <Button color="primary" endIcon={<ArrowRightAltIcon />}>Customer Success Stories</Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={6} className={classes.gridItem}>
                  <img src={content["logo1"]} alt="" className={classes.logo} />
                </Grid>
                <Grid item xs={6} className={classes.gridItem}>
                  <img src="mui-assets/img/logos/plucky.svg" alt="" className={classes.logo} />
                </Grid>
                <Grid item xs={6} className={classes.gridItem}>
                  <img src="mui-assets/img/logos/realweb.svg" alt="" className={classes.logo} />
                </Grid>
                <Grid item xs={6} className={classes.gridItem}>
                  <img src="mui-assets/img/logos/k-hole.svg" alt="" className={classes.logo} />
                </Grid>
                <Grid item xs={6} className={classes.gridItem}>
                  <img src="mui-assets/img/logos/tholio.svg" alt="" className={classes.logo} />
                </Grid>
                <Grid item xs={6} className={classes.gridItem}>
                  <img src="mui-assets/img/logos/1stsight.svg" alt="" className={classes.logo} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}