import React, { FC, useState, KeyboardEvent } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { TypeSetState, IPost } from "../../../types";
import { users } from "../../layout/sidebar/dataUsers";

interface IAddPost {
  setPosts: TypeSetState<IPost[]>;
}

const AddPost: FC<IAddPost> = ({ setPosts }) => {
  const [content, setContent] = useState<string>("");

  const addPostHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setPosts((prev) => [
        {
          author: users[0],
          content,
          createdAt: "5 min",
        },
        ...prev,
      ]);
      setContent("");
    }
  };

  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: 2,
      }}
    >
      <TextField
        label="Tell me what's new with you"
        variant="outlined"
        InputProps={{
          sx: {
            border: "none",
            borderRadius: "25",
            backgroundColor: "#f9f9f9f",
          },
        }}
        sx={{ width: "100%" }}
        onKeyPress={addPostHandler}
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
    </Box>
  );
};

export default AddPost;
