import React from 'react';
import { useForm } from "react-hook-form";
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import UserPool from '../../UserPool'
import { useLogin } from '@pankod/refine-core';


const useStyles = makeStyles((theme) => ({
  tertiaryAction: {
    [theme.breakpoints.up('sm')]: {
      textAlign: 'right'
    }
  },
  actions: {
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3)
    },
  }
}));

export default function LoginForm(props) {
  const classes = useStyles();
  const { mutate: loginUser, isLoading, isError, error } = useLogin()
  console.log(error)
  const content = {
    'brand': { image: 'mui-assets/img/logo-pied-piper-icon.png', width: 40 },
    '02_header': 'Sign in',
    '02_primary-action': 'Sign in',
    '02_primary-action': 'Don\'t have an account?',
    '02_tertiary-action': 'Forgot password?',
    ...props.content
  };

  let brand;

  if (content.brand.image) {
    brand = <img src={content.brand.image} alt="" width={content.brand.width} />;
  } else {
    brand = content.brand.text || '';
  }

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = values => {
    loginUser(values)
  }

  return (
    <Container maxWidth="xs">
      <Box pt={8} pb={10}>
        <Box mb={3} textAlign="center">
          <Link href="#" variant="h4" color="inherit" underline="none">
            {brand}
          </Link>
          <Typography variant="h5" component="h2">{content['02_header']}</Typography>
        </Box>
        <Box>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField variant="outlined" required fullWidth  {...register("email")}
                  label="Email address" autoComplete="email" />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" required fullWidth  {...register("password")}
                  label="Password" type="password" autoComplete="current-password" />
              </Grid>
            </Grid>
            <Box my={2}>
              <Button type="submit" fullWidth variant="contained" color="primary">
                {content['02_primary-action']}
              </Button>
            </Box>
            <Grid container spacing={2} className={classes.actions}>
              <Grid item xs={12} sm={6}>
                <Link href="#" variant="body2">{content['02_primary-action']}</Link>
              </Grid>
              <Grid item xs={12} sm={6} className={classes.tertiaryAction}>
                <Link href="#" variant="body2">{content['02_tertiary-action']}</Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </Container>
  );
}