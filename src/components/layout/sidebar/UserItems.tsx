import React, { FC } from "react";
import { Box } from "@mui/system";
import { Link, useHistory } from "react-router-dom";
import {
  Avatar,
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { QuestionAnswer } from "@mui/icons-material";
import { users } from "../sidebar/dataUsers";

const UserItems: FC = () => {
  const history = useHistory();
  return (
    <div>
      <Card
        variant="outlined"
        sx={{
          padding: 2,
          backgroundColor: "#f6f6f6",
          border: "none",
          borderRadius: 3,
        }}
      >
        {users.map((user) => (
          <Link
            key={user._id}
            to={`/profile/${user._id}`}
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "#111",
              marginBottom: 12,
            }}
          >
            <Box
              sx={{
                position: "relative",
                marginRight: 2,
                overflow: "hidden",
              }}
            >
              <Avatar
                src={user.avatar}
                alt={user.name}
                sx={{ width: 46, height: 46, borderRadius: "50%" }}
              />
              {user.isInNetwork && (
                <Box
                  sx={{
                    backgroundColor: "#4fb14f",
                    border: "2px solid #f1f7fa",
                    width: 12,
                    height: 12,
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    borderRadius: "50%",
                  }}
                />
              )}
            </Box>
            <span style={{ fontSize: 14 }}>{user.name}</span>
          </Link>
        ))}
      </Card>

      <Card
        variant="outlined"
        sx={{
          padding: 2,
          backgroundColor: "#f6f6f6",
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => history.push("/messages")}>
              <ListItemIcon>
                <QuestionAnswer />
              </ListItemIcon>
              <ListItemText primary="Messages" />
            </ListItemButton>
          </ListItem>
        </List>
      </Card>
    </div>
  );
};

export default UserItems;
