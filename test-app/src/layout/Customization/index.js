import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  basicAuthentication,
  standardAuthentication,
} from "../../utils/authentication";
// material-ui
import { useTheme } from "@material-ui/styles";
import {
  Drawer,
  Fab,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  Tooltip,
  TextField,
  Button,
} from "@material-ui/core";

// third-party
import PerfectScrollbar from "react-perfect-scrollbar";

// project imports
import SubCard from "ui-component/cards/SubCard";
import AnimateButton from "ui-component/extended/AnimateButton";
import { SET_AUTH } from "store/actions"; // THEME_RTL
import { gridSpacing } from "store/constant";

// assets
import { IconSettings } from "@tabler/icons";
// concat 'px'

// ===========================|| LIVE CUSTOMIZATION ||=========================== //

const Customization = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const customization = useSelector((state) => state.customization);
  // const formData = useSelector((state) => state.formData);
  // drawer on/off
  const [open, setOpen] = React.useState(false);
  const [formState, setFormState] = useState({});
  const setFormParams = (name, value) => {
    setFormState({ ...formState, [name]: value });
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const [authMethod, setAuthMethod] = useState(0);
  const [authorised, setAuthorised] = useState(false);
  useEffect(() => {
    if (authorised && open) {
      setOpen(false);
    }
    console.log(window.gsma);
  }, [authorised]);
  useEffect(() => {
    if (authorised) {
      setAuthorised(false);
    }
    if (authMethod !== 0 && Object.keys(formState).length === 0) {
      setFormState({
        username: process.env.REACT_APP_CONSUMER_KEY,
        password: process.env.REACT_APP_CONSUMER_SECRET,
        callbackUrl: "https://end13wxm5t7fgd6.m.pipedream.net/",
      });
    }
    switch (authMethod) {
      case 0:
        dispatch({ type: SET_AUTH, authType: "no-auth", authParams: {} });
        break;
      case 1:
        dispatch({
          type: SET_AUTH,
          authType: "basic-auth",
        });
        break;
      case 2:
        dispatch({
          type: SET_AUTH,
          authType: "oauth-2",
        });
        break;
      default:
        dispatch({
          type: SET_AUTH,
          authType: "no-auth",
        });
        break;
    }
  }, [authMethod]);
  //0- No Auth
  //1- Basic Authentication
  //2- OAuth2
  const generateAuthHeader = () => {
    if (formState.username && formState.password) {
      basicAuthentication(
        formState.username,
        formState.password,
        formState.callbackUrl ? formState.callbackUrl : null
      );
      // setTimeout(() => {
      if (window.gsma.auth) {
        setAuthorised(true);
        setOpen(false);
      } else {
        alert("Authentication failed");
      }
      // }, 1000);
    }
  };
  const generateToken = () => {
    console.log(formState);
    if (formState.username && formState.password) {
      standardAuthentication(
        formState.username,
        formState.password,
        formState.callbackUrl,
        formState.apiKey,
        () => {
          setAuthorised(true);
          setOpen(false);
        },
        (res) => {
          alert("Authentication failed");
          console.log("AUTH FAILED :", res);
        }
      );
      // setTimeout(() => {
      // }, 1000);
    }
  };
  const AuthAttributesForm = (authMethod) => {
    switch (authMethod) {
      case 1:
        return (
          <div className="container form-container">
            <TextField
              id="outlined-basic-usr-name"
              label="Username"
              variant="outlined"
              size="small"
              defaultValue={"59vthmq3f6i15v6jmcjskfkmh"}
              onClick={(e) => setFormParams("username", e.target.value)}
              onChange={(e) => setFormParams("username", e.target.value)}
            />
            <TextField
              id="outlined-basic-pwd"
              type="password"
              label="Password"
              variant="outlined"
              defaultValue={
                "ef8tl4gihlpfd7r8jpc1t1nda33q5kcnn32cj375lq6mg2nv7rb"
              }
              size="small"
              onClick={(e) => setFormParams("password", e.target.value)}
              onChange={(e) => setFormParams("password", e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Global Callback URL"
              variant="outlined"
              size="small"
              defaultValue={"https://end13wxm5t7fgd6.m.pipedream.net/"}
              onClick={(e) => setFormParams("callbackUrl", e.target.value)}
              onChange={(e) => {
                setFormParams("callbackUrl", e.target.value);
              }}
            />
            {customization.authParams &&
              customization.authParams.Authorisation && (
                <p>{`Authorisation header generated: ${customization.authParams.Authorisation}`}</p>
              )}
            <Button
              variant="contained"
              color="success"
              onClick={() => generateAuthHeader()}
            >
              Generate Authorisation Header
            </Button>
            {authorised && (
              <p style={{ color: "rgb(0,255,0)" }}>Authenticated</p>
            )}
          </div>
        );
      case 2:
        return (
          <div className="container form-container">
            <TextField
              id="outlined-basic-usr-name"
              label="API Key"
              variant="outlined"
              size="small"
              defaultValue={process.env.REACT_APP_CLIENT_API_KEY}
              onClick={(e) => setFormParams("apiKey", e.target.value)}
              onChange={(e) => setFormParams("apiKey", e.target.value)}
            />
            <TextField
              id="outlined-basic-cons-key"
              label="Consumer Key"
              variant="outlined"
              defaultValue={process.env.REACT_APP_CONSUMER_KEY}
              size="small"
              onClick={(e) => setFormParams("username", e.target.value)}
              onChange={(e) => {
                setFormParams("username", e.target.value);
              }}
            />
            <TextField
              id="outlined-basic-cons-secret"
              type="password"
              label="Consumer Secret"
              variant="outlined"
              size="small"
              defaultValue={process.env.REACT_APP_CONSUMER_SECRET}
              onClick={(e) => setFormParams("password", e.target.value)}
              onChange={(e) => {
                setFormParams("password", e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Global Callback URL"
              variant="outlined"
              size="small"
              defaultValue={"https://end13wxm5t7fgd6.m.pipedream.net/"}
              onClick={(e) => setFormParams("callbackUrl", e.target.value)}
              onChange={(e) => {
                setFormParams("callbackUrl", e.target.value);
              }}
            />

            {customization.authParams &&
              customization.authParams.Authorisation && (
                <p>{`Authorisation header generated: ${customization.authParams.Authorisation}`}</p>
              )}
            <Button
              variant="contained"
              color="success"
              onClick={() => generateToken()}
            >
              Generate Auth Token
            </Button>
            {authorised && (
              <p style={{ color: "rgb(0,255,0)" }}>Authenticated</p>
            )}
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <>
      {/* toggle button */}

      <Tooltip title="Live Customize">
        <Fab
          component="div"
          onClick={handleToggle}
          size="medium"
          variant="string"
          color="secondary"
          sx={{
            bottom: 0,
            m: 4,
            position: "fixed",
            right: 20,
            zIndex: (theme) => theme.zIndex.speedDial,
            boxShadow: theme.shadows[8],
          }}
        >
          <AnimateButton type="rotate">
            <IconButton color="inherit" size="large" disableRipple>
              <IconSettings />
            </IconButton>
          </AnimateButton>
        </Fab>
      </Tooltip>

      <Drawer
        anchor="right"
        onClose={handleToggle}
        open={open}
        PaperProps={{
          sx: {
            width: 280,
          },
        }}
      >
        <PerfectScrollbar component="div">
          <Grid container spacing={gridSpacing} sx={{ p: 3 }}>
            <Grid item xs={12}>
              {/* font family */}
              <SubCard title="Authentication Type">
                <FormControl>
                  <RadioGroup
                    aria-label="font-family"
                    value={authMethod}
                    onChange={(e) => {
                      setAuthMethod(parseInt(e.target.value));
                    }}
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value={0}
                      control={<Radio />}
                      label="No Authentication"
                      sx={{
                        "& .MuiSvgIcon-root": { fontSize: 28 },
                        "& .MuiFormControlLabel-label": { color: "grey.900" },
                      }}
                    />
                    <FormControlLabel
                      value={1}
                      control={<Radio />}
                      label="Basic Authentication"
                      sx={{
                        "& .MuiSvgIcon-root": { fontSize: 28 },
                        "& .MuiFormControlLabel-label": { color: "grey.900" },
                      }}
                    />
                    <FormControlLabel
                      value={2}
                      control={<Radio />}
                      label="OAuth 2.0"
                      sx={{
                        "& .MuiSvgIcon-root": { fontSize: 28 },
                        "& .MuiFormControlLabel-label": { color: "grey.900" },
                      }}
                    />
                  </RadioGroup>
                </FormControl>
              </SubCard>
              {authMethod !== 0 && (
                <SubCard title="Set Authentication Attributes">
                  <FormControl>{AuthAttributesForm(authMethod)}</FormControl>
                </SubCard>
              )}
            </Grid>
          </Grid>
        </PerfectScrollbar>
      </Drawer>
    </>
  );
};

export default Customization;
