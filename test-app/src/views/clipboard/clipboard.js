import {
  Menu,
  MenuItem,
  MenuList,
  Paper,
  IconButton,
  Typography,
  ListItemIcon,
  ListItemText,
  Snackbar,
} from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Assignment from "@material-ui/icons/Assignment";
import ContentCopy from "@material-ui/icons/ContentCopy";
import Close from "@material-ui/icons/Close";
const Clipboard = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarText, setSnackbarText] = useState("");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSnackbarClose = (event) => {
    setOpenSnackbar(false);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const copyText = (value) => {
    navigator.clipboard.writeText(value);
    setSnackbarText(`Text Copied: ${value}`);
    setOpenSnackbar(true);
  };
  const clipboardItems = useSelector((state) => state.clipboard);

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleSnackbarClose}
      >
        <Close fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openSnackbar}
        autoHideDuration={500}
        onClose={handleSnackbarClose}
        message={snackbarText}
        action={action}
      />
      <IconButton
        color="primary"
        onClick={(e) => handleClick(e)}
        component="span"
      >
        <Assignment />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <Paper sx={{ maxWidth: "100%" }}>
          <MenuList>
            {clipboardItems && clipboardItems.length > 0 ? (
              clipboardItems.map((item) => {
                if (typeof item === "object") {
                  return (
                    <MenuItem
                      onClick={() => {
                        copyText(Object.values(item)[0]);
                      }}
                    >
                      <ListItemText>{Object.values(item)[0]}</ListItemText>
                      <Typography
                        sx={{ pr: 2, pl: 5 }}
                        variant="body2"
                        color="text.secondary"
                      >
                        {Object.keys(item)[0]}
                      </Typography>
                      <ListItemIcon>
                        <ContentCopy fontSize="small" />
                      </ListItemIcon>
                    </MenuItem>
                  );
                } else {
                  return null;
                }
              })
            ) : (
              <p style={{ margin: "0px", padding: "1rem" }}>
                Nothing stored in Clipboard
              </p>
            )}
          </MenuList>
        </Paper>
      </Menu>
    </div>
  );
};
export default Clipboard;
