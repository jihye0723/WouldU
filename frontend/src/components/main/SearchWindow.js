import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";

export default function SearchWindow() {

  function SearchBar(props) {
    
    return(
      <Paper
        component="span"
        sx={{
          p: "2px",
          display: "flex",
          alignItems: "center",
          width: 700,
          height: 50,
          boxShadow: 0,
          border: 1,
          borderColor: "grey.400",
        }}
      >
        <InputBase
          component="span"
          sx={{ flex: 1, fontSize: 20, fontFamily: "Jua", ml: 2 }}
          placeholder="전통주 검색"
          inputProps={{ "aria-label": "input" }}
        />
        <Divider component="span" sx={{ height: 28 }} orientation="vertical" />
        <IconButton
          component="span"
          type="submit"
          sx={{ p: "10px" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    );
  }
  return (
    <StyledWrapper>
      <div
        id="searchbar"
        style={{
          display: "flex",
          alignSelf: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: 10,
        }}
      >
        <SearchBar />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;