import React, { useContext } from "react";
import {
  TextField,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { UserContext } from "../../context/UserContext";
import { configs } from "../../config";

function LoginForm(props) {
  const userContext = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleOnChange = (event, type) => {
    switch (type) {
      case "username": {
        setUsername(event.target.value);
        break;
      }
      case "password": {
        setPassword(event.target.value);
        break;
      }
      case "role": {
        setRole(event.target.value);
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleRadioClick = (option) => {
    setRole(option);
  };
  const navigate = useNavigate();
  // Connect db
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
  };
  const handeSubmit = async (event) => {
    event.preventDefault();
    var data = {
      username: username,
      password: password,
      role: role,
    };
    axios.post(`${configs.backendUrl}/api/auth/login`, data).then((res) => {
      localStorage.setItem("token", "Bearer " + res.data.accessToken);
      localStorage.setItem("user", JSON.stringify(data));
      console.log(res.data);
      // userContext.setUser((prev) => ({
      //   username,
      //   password,
      //   role,
      // }))
      navigate("/");
    });
    setUsername("");
    setPassword("");
  };
  console.log(111, role);
  const radioBoxStyle = {
    display: "flex",
    flexDirection: "column",
  };
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "500px", margin: "auto", marginTop: "180px" }}>
        <div style={{ fontSize: "36px", color: "#8c1515", fontWeight: "bold" }}>
          ĐĂNG NHẬP
        </div>

        <div style={{ fontSize: "24px" }}>
          Vui lòng chọn vai trò để đăng nhập:
        </div>

        <form onSubmit={handeSubmit}>
          {/* <FormControl sx={{ m: 0, minWidth: 120, minHeight: 30 }} size="small">
          <InputLabel id="demo-select-small">Role</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={role}
            label="Vai trò"
            name="role"
            onChange={(e) => {
              handleOnChange(e, e.target.name);
            }}
          >
            <MenuItem value={"Admin"}>Admin</MenuItem>
            <MenuItem value={"Teacher"}>Teacher</MenuItem>
            <MenuItem value={"Student"}>Student</MenuItem>
            <MenuItem value={"Parent"}>Parent</MenuItem>
            <MenuItem value={"Accountant"}>Accountant</MenuItem>
          </Select>
        </FormControl> */}

          <div class="box" style={radioBoxStyle}>
            <label>
              <input
                style={{ marginRight: "8px" }}
                type="radio"
                value={"Admin"}
                checked={role === "Admin"}
                onClick={() => handleRadioClick("Admin")}
              />
              Quản lý
            </label>

            <label>
              <input
                style={{ marginRight: "8px" }}
                type="radio"
                value={"Teacher"}
                checked={role === "Teacher"}
                onClick={() => handleRadioClick("Teacher")}
              />
              Giáo viên
            </label>

            <label>
              <input
                style={{ marginRight: "8px" }}
                type="radio"
                value={"Student"}
                checked={role === "Student"}
                onClick={() => handleRadioClick("Student")}
              />
              Học sinh
            </label>

            {/* <input
              type="radio"
              id="Student"
              value={"Student"}
              checked={role === "Student"}
              onClick={() => handleRadioClick("Student")}
            />
            <label for="Student">Học sinh</label> */}

            <label>
              <input
                style={{ marginRight: "8px" }}
                type="radio"
                value={"Parent"}
                checked={role === "Parent"}
                onClick={() => handleRadioClick("Parent")}
              />
              Tôi là phụ huynh
            </label>
          </div>

          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="username"
            value={username}
            label="Tên tài khoản"
            name="username"
            required
            autoComplete="off"
            onChange={(e) => {
              handleOnChange(e, e.target.name);
            }}
          />
          <TextField
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            id="password"
            value={password}
            label="Mật khẩu"
            name="password"
            autoComplete="off"
            required
            onChange={(e) => {
              handleOnChange(e, e.target.name);
            }}
          />

          <Button
            style={{ marginTop: "15px" }}
            className="nice-button"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            autoComplete="off"
          >
            Đăng nhập
          </Button>
        </form>
      </div>

      <div>
        <img
          src="https://hust.media/img/hero-img.png"
          style={{ width: "800px", margin: "auto", marginTop: "100px" }}
        ></img>
      </div>
    </div>
  );
}

export default LoginForm;
