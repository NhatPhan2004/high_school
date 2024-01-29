import React, { useState } from "react";
import { TextField, Button, Box, Typography, Divider } from "@mui/material";
import { studentList } from "../mock/student";
import axios from "axios";
import { useEffect } from "react";
import { configs } from "../config";

export default function StudentInfo() {
  const [info, setInfo] = useState({
    name: "",
    dateOfBirth: "",
    sex: "",
    class: "",
    email: "",
    phone: "",
    address: "",
    fatherName: "",
    fatherJob: "",
    fatherPhone: "",
    fatherDateOfBirth: "",
    fatherJobAddress: "",
    motherName: "",
    motherJob: "",
    motherPhone: "",
    motherDateOfBirth: "",
    motherJobAddress: "",
    startStudying: "",
  });

  useEffect(() => {
    axios({
      method: "get",
      url: `${configs.backendUrl}/api/class`,
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }).then((resClasses) => {
      axios({
        method: "get",
        url: `${configs.backendUrl}/api/student`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }).then((res) => {
        var _info = res.data.data.data.filter(
          (item) =>
            item.username === JSON.parse(localStorage.getItem("user")).username
        )[0];
        _info.class = resClasses.data.data.data.filter(
          (cl) => cl.id === _info.classId
        )[0].name;
        setInfo(_info);
      });
    });
  }, []);
  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "500px" },
        width: "600px",
        margin: "10px",
        marginLeft: "50px",
      }}
      noValidate
      autoComplete="off"
    >
      {/* <img
        src={info.avatar}
        style={{ width: "200px", height: "200px", marginLeft: "50px" }}
      ></img> */}
      <h2
        style={{
          fontFamily: "Segoe UI",
          fontSize: "20px",
          fontWeight: "bold",
          color: "#8c1515",
          verticalAlign: "middle",
          lineHeight: "2em",
        }}
      >
        Thông tin học sinh
      </h2>

      <div>
        <img
          src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg"
          alt="Ảnh chân dung"
          style={{
            borderRadius: 4,
            padding: 5,
            width: 150,
          }}
        ></img>
      </div>

      <h2
        style={{
          fontFamily: "Segoe UI",
          fontSize: "20px",
          fontWeight: "bold",
          color: "#8c1515",
          verticalAlign: "middle",
          lineHeight: "2em",
        }}
      >
        Thông tin cá nhân
      </h2>

      <hr style={{ border: "2px solid red" }}></hr>

      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Typography variant="h5" component="h5" sx={{ width: "200px" }}>
          Họ và tên
        </Typography>
        <Typography variant="h5" component="h5">
          : {info.name}
        </Typography>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Typography variant="h5" component="h5" sx={{ width: "200px" }}>
          Ngày sinh
        </Typography>
        <Typography variant="h5" component="h5">
          : {info.dateOfBirth}
        </Typography>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Typography variant="h5" component="h5" sx={{ width: "200px" }}>
          Giới tính
        </Typography>
        <Typography variant="h5" component="h5">
          : {info.sex}
        </Typography>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Typography variant="h5" component="h5" sx={{ width: "200px" }}>
          Email
        </Typography>
        <Typography variant="h5" component="h5">
          : {info.email}
        </Typography>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Typography variant="h5" component="h5" sx={{ width: "200px" }}>
          Số điện thoại
        </Typography>
        <Typography variant="h5" component="h5">
          : {info.phone}
        </Typography>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Typography variant="h5" component="h5" sx={{ width: "200px" }}>
          Địa chỉ
        </Typography>
        <Typography variant="h5" component="h5">
          : {info.address}
        </Typography>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Typography variant="h5" component="h5" sx={{ width: "200px" }}>
          Lớp
        </Typography>
        <Typography variant="h5" component="h5">
          : {info.class}
        </Typography>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Typography variant="h5" component="h5" sx={{ width: "200px" }}>
          Niên khóa
        </Typography>
        <Typography variant="h5" component="h5">
          : {info.startStudying}
        </Typography>
      </div>

      <br></br>
      <Typography
        style={{
          fontFamily: "Segoe UI",
          fontSize: "20px",
          fontWeight: "bold",
          color: "#8c1515",
          verticalAlign: "middle",
          lineHeight: "2em",
        }}
      >
        Thông tin phụ huynh:
      </Typography>
      {/* <Divider /> */}
      <hr style={{ border: "2px solid red" }}></hr>

      <br></br>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Typography variant="h5" component="h5" sx={{ width: "200px" }}>
          Họ và tên bố
        </Typography>
        <Typography variant="h5" component="h5">
          : {info.fatherName}
        </Typography>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Typography variant="h5" component="h5" sx={{ width: "200px" }}>
          Ngày sinh
        </Typography>
        <Typography variant="h5" component="h5">
          : {info.fatherDateOfBirth}
        </Typography>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Typography variant="h5" component="h5" sx={{ width: "200px" }}>
          Nghề nghiệp
        </Typography>
        <Typography variant="h5" component="h5">
          : {info.fatherJob}
        </Typography>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Typography variant="h5" component="h5" sx={{ width: "200px" }}>
          Số điện thoại
        </Typography>
        <Typography variant="h5" component="h5">
          : {info.fatherPhone}
        </Typography>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Typography variant="h5" component="h5" sx={{ width: "200px" }}>
          Địa chỉ nơi làm việc
        </Typography>
        <Typography variant="h5" component="h5">
          : {info.fatherJobAddress}
        </Typography>
      </div>

      {/* <Divider /> */}

      <br></br>
      <hr style={{ border: "2x solid red" }}></hr>

      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Typography variant="h5" component="h5" sx={{ width: "200px" }}>
          Họ và tên mẹ
        </Typography>
        <Typography variant="h5" component="h5">
          : {info.motherName}
        </Typography>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Typography variant="h5" component="h5" sx={{ width: "200px" }}>
          Ngày sinh
        </Typography>
        <Typography variant="h5" component="h5">
          : {info.motherDateOfBirth}
        </Typography>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Typography variant="h5" component="h5" sx={{ width: "200px" }}>
          Nghề nghiệp
        </Typography>
        <Typography variant="h5" component="h5">
          : {info.motherJob}
        </Typography>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Typography variant="h5" component="h5" sx={{ width: "200px" }}>
          Số điện thoại
        </Typography>
        <Typography variant="h5" component="h5">
          : {info.motherPhone}
        </Typography>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Typography variant="h5" component="h5" sx={{ width: "200px" }}>
          Địa chỉ nơi làm việc
        </Typography>
        <Typography variant="h5" component="h5">
          : {info.motherJobAddress}
        </Typography>
      </div>
    </Box>
  );
}
