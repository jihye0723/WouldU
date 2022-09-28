import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Header from "components/nav/Header";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import swal from "sweetalert";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import axios from "axios";

export default function JoinID() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputPWD, setInputPWD] = useState("");
  const [inputNick, setInputNick] = useState("");
  const [birth, setBirth] = useState("");
  const [inputYear, setInputYear] = useState("");
  const [inputMonth, setInputMonth] = useState("");
  const [inputDay, setInputDay] = useState("");
  const [inputGender, setInputGender] = useState("");
  const [idOk, setIdOk] = useState(false);
  //const [passCheck, setPassCheck] = useState("숫자, 영문 포함한 8자 이상");
  const [passOk, setPassOk] = useState("불일치");

  useEffect(() => {
    if (inputPw === inputPWD) {
      setPassOk("일치");
    } else {
      setPassOk("불일치");
    }
  }, [inputPw, inputPWD]);
  // 나중에 비밀번호 규칙추가하기
  // 비밀번호 확인용
  /** 
  useEffect(() => {
    console.log(inputPWD);
    if(inputPw === inputPWD){
      setPassOk(true);
    }else {
      setPassOk(false);
    }
  }, [inputPWD, inputPw]);
 */

  //아이디 중복확인
  const onIdCheck = () => {
    if (inputId !== "") {
      axios
        .get(`http://localhost:8000/user/checkid/${inputId}`)
        .then(res => {
          console.log(res);
          if (res.data.result === "success") {
            setIdOk(true);
            swal({
              title: "Good ID!",
              text: "사용가능한 아이디입니다.",
              icon: "success",
              button: {
                text: "확인",
              },
            });
          } else {
            swal("OMG!", "중복된 아이디입니다.", "error");
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      swal("Error!", "아이디를 입력해주세요!!", "error");
    }
  };

  const handleInputId = e => {
    setInputId(e.target.value);
  };

  const handleInputPw = e => {
    setInputPw(e.target.value);
  };

  const handleInputPWD = e => {
    setInputPWD(e.target.value);
  };

  const handleInputNick = e => {
    setInputNick(e.target.value);
  };

  const handleInputYear = e => {
    setInputYear(e.target.value);
    setBirth(e.target.value + "-" + inputMonth + "-" + inputDay);
  };

  const handleInputMonth = e => {
    setInputMonth(e.target.value);
    setBirth(inputYear + "-" + e.target.value + "-" + inputDay);
  };

  const handleInputDay = e => {
    setInputDay(e.target.value);
    setBirth(inputYear + "-" + inputMonth + "-" + e.target.value);
  };

  const handleInputGender = e => {
    setInputGender(e.target.value);
  };

  const onClickNext = event => {
    console.log("ID", inputId);
    console.log("PW", inputPw);
    console.log("PWD", inputPWD);
    console.log(birth);

    //아이디 중복체크 완료해야 진행가능
    if (idOk === true) {
      console.log(true);
    } else {
      console.log(false);
      //이동막기
      event.preventDefault();
    }
  };

  return (
    <StyledWrapper>
      <Header />
      <div id="main">
        <div id="joinForm">
          <h3>step 1</h3>
          <div id="joinBox">
            <div id="tf_id">
              <TextField
                label="아이디"
                variant="outlined"
                size="small"
                value={inputId}
                onChange={handleInputId}
                id="input_area"
              />
              <Button onClick={onIdCheck} id="btn_check">
                중복확인
              </Button>
            </div>

            <div id="tf_item">
              <TextField
                autoComplete="current-password"
                label="비밀번호"
                type="password"
                variant="outlined"
                value={inputPw}
                onChange={handleInputPw}
                size="small"
                id="input_area"
              />
            </div>

            <div>
              <div id="tf_pass">
                <TextField
                  label="비밀번호 재확인"
                  type="password"
                  variant="outlined"
                  value={inputPWD}
                  onChange={handleInputPWD}
                  size="small"
                  id="input_area"
                />
              </div>
              <h5 id="tx_ok">{passOk}</h5>
            </div>

            <div id="tf_item">
              <div id="div_nick">
                <label> 닉네임 </label>
              </div>
              <TextField
                label="닉네임"
                variant="outlined"
                value={inputNick}
                onChange={handleInputNick}
                size="small"
                id="input_area"
              />
            </div>

            <div>
              <div id="tf_bitem">
                <label> 생년월일 </label>
              </div>
              <div>
                <TextField
                  label="연도"
                  variant="outlined"
                  value={inputYear}
                  onChange={handleInputYear}
                  size="small"
                  id="input_birth"
                />
                <FormControl sx={{ ml: 1, mr: 1, minWidth: 80 }} size="small">
                  <InputLabel id="demo-select-small">월</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={inputMonth}
                    label="월"
                    onChange={handleInputMonth}
                  >
                    <MenuItem value="01">1월</MenuItem>
                    <MenuItem value="02">2월</MenuItem>
                    <MenuItem value="03">3월</MenuItem>
                    <MenuItem value="04">4월</MenuItem>
                    <MenuItem value="05">5월</MenuItem>
                    <MenuItem value="06">6월</MenuItem>
                    <MenuItem value="07">7월</MenuItem>
                    <MenuItem value="08">8월</MenuItem>
                    <MenuItem value="09">9월</MenuItem>
                    <MenuItem value="10">10월</MenuItem>
                    <MenuItem value="11">11월</MenuItem>
                    <MenuItem value="12">12월</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  label="일"
                  variant="outlined"
                  value={inputDay}
                  onChange={handleInputDay}
                  size="small"
                  id="input_birth"
                />
              </div>
            </div>

            <div id="tf_gender">
              <div id="div_gender">
                <label> 성별 </label>
              </div>
              <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
                <InputLabel id="demo-select-small">성별</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={inputGender}
                  label="성별"
                  onChange={handleInputGender}
                >
                  <MenuItem value="1">남성</MenuItem>
                  <MenuItem value="2">여성</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div id="btBox">
              <Link
                to="/survey"
                state={{
                  user_id: inputId,
                  password: inputPw,
                  nickname: inputNick,
                  gender: inputGender,
                  birth: birth,
                }}
                onClick={onClickNext}
              >
                <Button variant="contained" id="btn_next" color="secondary">
                  다음
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  #main {
    text-align: center;
  }

  #joinBox {
    display: inline-block;
    margin: auto;
  }

  #tf_id {
    margin-top: 40px;
    margin-left: 95px;
  }
  #tf_pass {
    margin-top: 40px;
  }
  #tx_ok {
    text-align: right;
    margin-top: 10px;
    margin-right: 95px;
    font-size: 17px;
    color: red;
  }

  #tf_item {
    margin-top: 50px;
  }
  #tf_bitem {
    margin-top: 40px;
    margin-bottom: 10px;
    text-align: left;
    margin-left: 100px;
  }

  #tf_gender {
    margin: auto;
    margin-top: 50px;
    width: 350px;
    text-align: left;
  }

  #div_nick {
    text-align: left;
    margin-left: 100px;
    margin-bottom: 10px;
  }

  #div_gender {
    text-align: left;
    margin-left: 20px;
  }

  #input_area {
    width: 300px;
  }

  #input_birth {
    width: 90px;
  }

  #joinForm {
    display: inline-block;
    align-items: center;
    width: 600px;
  }

  #btBox {
    margin-top: 50px;
    margin-bottom: 30px;
  }

  #btn_next {
    width: 170px;
  }

  #btn_check {
    margin-left: 20px;
    color: purple;
  }
`;
