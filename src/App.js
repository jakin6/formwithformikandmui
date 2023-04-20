import React from 'react';
import Header from './Components/Header';
import { ThemeProvider,makeStyles } from '@mui/material/styles';
import {Formik,Form} from 'formik'
import * as yup from 'yup'
import { Container, Grid, Typography } from '@mui/material';
import Textfield from './Components/FormsUI/Textfield/index'

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const INITIAL_FORM_STATE={
  firstName:'',
  lastName:'',
  email:'',
  phone:'',
  addressLine1:'',
  addressLine2:'',
  city:'',
  state:'',
  country:'',
}

const FORM_VALIDATION=yup.object().shape({
  firstName:yup.string().required('required'),
  lastName:yup.string().required('Required'),
  email:yup.string().email('Invalid email').required('Required'),
  phone:yup.number().integer().typeError('Please enter a valid phone number').required('Required'),
  addressLine1:yup.string().required('Required'),
  addressLine2:yup.string(),
  city:yup.string().required('Required'),
  state:yup.string().required('Required'),
  country:yup.string().required('Required')
   
})

function App() {
  const classes = useStyles();
  return (
    <Grid container>
    <Grid item xs={12}>
      <Header />
    </Grid>
    <Grid item xs={12}>
      <Container maxWidth="md">
        <div className={classes.formWrapper}>
        <Formik 
          initialValues={{
            ...INITIAL_FORM_STATE
          }
          }
          validationSchema={FORM_VALIDATION}
          onSubmit={(values)=>{
            console.log(values)
          }}>

            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography>
                    Your details
                  </Typography>

                  <Grid item xs={6}>
                    <Textfield 
                      name='firstName'
                      label="First Name"/>
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name='lastName'
                    label="Last Name"/>
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield name='email'
                    label="Email"/>
                  </Grid>  
                  <Grid item xs={12}>
                    <Textfield name='phone'
                    label="Phone"/>
                  </Grid> 
                  <Typography>
                    Address
                  </Typography>
                  <Grid item xs={12}>
                    <Textfield name='addressLine1'
                    label="Address Line 1"/>
                  </Grid> 
                  <Grid item xs={12}>
                    <Textfield name='addressLine2'
                    label="Address Line 2"/>
                  </Grid> 
                  <Grid item xs={6}>
                    <Textfield name='city'
                    label="City"/>
                  </Grid> 
                  <Grid item xs={6}>
                    <Textfield name='state'
                    label="State"/>
                  </Grid> 
                  <Grid item xs={6}>
                    <Textfield name='state'
                    label="State"/>
                  </Grid> 
                  <Typography>
                    Booking information
                  </Typography>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </div>
      </Container>
    </Grid>
  </Grid>
  );
}

export default App;
