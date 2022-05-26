import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { makeStyles } from '@mui/styles';
import Typography from "@mui/material/Typography";
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {Link,useHistory} from  'react-router-dom';
import "./Signup.css";
import insta from "./Assets/instagram.jpg";

export default function Signup(){
  const useStyles = makeStyles({
    text1:{
      color:'grey',
      textAlign:'center'
  },
  card2:{
      height:'5vh',
      marginTop:'2%',
      textAlign:'center'
    
  }
  });
  const classes = useStyles();
  
  return (
    <div className="signupWrapper">
      <div className="signupCard">
        <Card variant="outlined">
          <div className="insta-logo">
            <img src={insta} alt="not loaded" />
          </div>

          <CardContent>
            <Typography className={classes.text1} variant="subtitle1">
              Sign up to see Photos and Videos from your Friends
            </Typography>
            {
              true && <Alert severity="error">This is an error alert — check it out!</Alert>
            }
            
          
            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small"/>
            <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small"  />
            <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth={true} margin="dense" size="small" />
            <Button color="secondary" fullWidth={true} variant="outlined" margin='dense' startIcon={<CloudUploadIcon />}
            component="label">Upload Profile Image
            <input type="file" accept="image/*" hidden/></Button>
            
          </CardContent>
          <CardActions>
            <Button color="primary" fullWidth={true} variant="contained">Sign Up</Button>
           
          </CardActions>
          <CardContent>
          <Typography className={classes.text1} variant="subtitle1">
          By signing up, you agree to our Terms, Conditions and Cookies policy.
            </Typography>
            

          </CardContent>
         
        </Card>
        <Card variant="outlined" className={classes.card2}>
        <Typography className={classes.text1} variant="subtitle1" margin="dense">
          Having an Account ? <Link to="/login" style={{textDecoration:'none'}}>Login</Link>
            </Typography>
            
        </Card>
      </div>
    </div>
  );
}

