import React, { FC, useState } from "react";
import { Box } from "@mui/system";
import AddPost from "./AddPost";
import { IPost } from "../../../types";
import { initialPosts } from "./initialPosts";
import Posts from "./Posts";

const Home: FC = () => {
  const [posts, setPosts] = useState<IPost[]>(initialPosts);
  return (
    <Box>
      <AddPost setPosts={setPosts} />
      <Posts posts={posts} />
    </Box>
  );
};

export default Home;
