import {
  FormControl,
  InputAdornment,
  IconButton,
  OutlinedInput,
  InputLabel,
  Paper,
} from "@material-ui/core";
import { CopyAll } from "@material-ui/icons";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_HEADER, UPDATE_BODY, ADD_TO_CLIPBOARD } from "store/actions";
const FormGenerator = (props) => {
  const { component, variant, parent } = props;
  const formData = useSelector((state) => state.formData);
  const dispatch = useDispatch();
  const [fieldData, setFieldData] = useState(
    component.defaultValue ? component.defaultValue : null
  );
  const setFormData = (variant, key, value) => {
    console.log({ variant, key, value });
    setFieldData(value);
    switch (variant) {
      case "header":
        if (value !== "") {
          dispatch({
            type: UPDATE_HEADER,
            header: { ...formData.header, [key]: value },
          });
        } else {
          delete formData.header[key];
          dispatch({
            type: UPDATE_HEADER,
            header: { ...formData.header },
          });
        }
        break;
      case "body":
        if (parent) {
          const parentList = parent.split(".");
          const childData = {
            ...formData.body,
          };
          let dataPointer = childData;
          for (let counter = 0; counter <= parentList.length - 1; counter++) {
            if (counter === parentList.length - 1) {
              if (!dataPointer[parentList[counter]]) {
                dataPointer[parentList[counter]] = {};
              }
              dataPointer[parentList[counter]][key] = value;
            } else {
              if (!dataPointer[parentList[counter]]) {
                dataPointer[parentList[counter]] = {};
              }
              dataPointer = dataPointer[parentList[counter]];
            }
          }
          dispatch({
            type: UPDATE_BODY,
            body: { ...formData.body, ...childData },
          });
        } else {
          dispatch({
            type: UPDATE_BODY,
            body: { ...formData.body, [key]: value },
          });
        }
        break;
      case "body-json":
        dispatch({
          type: UPDATE_BODY,
          body: value,
        });
        break;
      case "header-json":
        console.log({ ...formData.header, [key]: value });
        dispatch({
          type: UPDATE_HEADER,
          header: { ...formData.header, [key]: JSON.parse(value) },
        });
        break;
      default:
        return null;
    }
  };
  const copyToClipboard = () => {
    dispatch({
      type: ADD_TO_CLIPBOARD,
      data: {
        [parent ? `${parent}.${component.id}` : component.id]: fieldData,
      },
    });
  };
  switch (component.type) {
    case "string":
      return (
        <FormControl
          key={component.id}
          sx={{ m: 1 }}
          fullWidth
          margin="dense"
          variant="outlined"
        >
          <InputLabel>{component.caption}</InputLabel>
          <OutlinedInput
            type={"text"}
            onClick={(e) => setFormData(variant, component.id, e.target.value)}
            onChange={(e) => setFormData(variant, component.id, e.target.value)}
            defaultValue={component.defaultValue ? component.defaultValue : ""}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => copyToClipboard(variant, component.id, parent)}
                  edge="end"
                >
                  <CopyAll />
                </IconButton>
              </InputAdornment>
            }
            label={component.caption}
          />
        </FormControl>
      );
    case "number":
      return (
        <FormControl sx={{ m: 1 }} fullWidth margin="dense" variant="outlined">
          <InputLabel>{component.caption}</InputLabel>
          <OutlinedInput
            type={"text"}
            onChange={(e) => setFormData(variant, component.id, e.target.value)}
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            defaultValue={component.defaultValue ? component.defaultValue : ""}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => copyToClipboard(variant, component.id, parent)}
                  edge="end"
                >
                  <CopyAll />
                </IconButton>
              </InputAdornment>
            }
            label={component.caption}
          />
        </FormControl>
      );
    case "json":
      return (
        <FormControl sx={{ m: 1 }} fullWidth margin="dense" variant="outlined">
          <InputLabel>{component.caption}</InputLabel>
          <OutlinedInput
            type={"text"}
            defaultValue={
              component.defaultValue ? component.defaultValue : "{}"
            }
            onClick={(e) =>
              setFormData(`${variant}-json`, component.id, e.target.value)
            }
            onChange={(e) =>
              setFormData(`${variant}-json`, component.id, e.target.value)
            }
            multiline
            minRows={5}
            endAdornment={
              <InputAdornment position="end" sx={{ ml: 0, mr: 2 }}>
                <IconButton
                  onClick={() =>
                    copyToClipboard(`${variant}-json`, component.id, parent)
                  }
                  edge="end"
                >
                  <CopyAll />
                </IconButton>
              </InputAdornment>
            }
            label={component.caption}
          />
        </FormControl>
      );
    case "object":
      return (
        <Paper
          elevation={parent ? parent.split(".").length() : 0}
          sx={{ p: 2, pr: 4 }}
        >
          <div className="container">
            <h3>{component.caption}</h3>
            {component.params &&
              component.params.length > 0 &&
              component.params.map((childComponent) => (
                <FormGenerator
                  key={childComponent.component}
                  component={childComponent}
                  variant="body"
                  parent={parent ? `${parent}.${component.id}` : component.id}
                />
              ))}
          </div>
        </Paper>
      );
    default:
      return null;
  }
};
export default FormGenerator;
