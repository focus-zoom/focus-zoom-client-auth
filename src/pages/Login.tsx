import React, { useState } from "react";
import styled from "styled-components/macro";
import TextField from "../components/common/TextField";
import Button from "../components/common/Button";
import decodeJwt from "jwt-decode";
import axios from "axios";
import oc from "../oc.json";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = async () => {
    try {
      const endpoint = 'https://api.dimigo.in/auth';
      const payload = {
        id: username,
        password,
      };

      const { data: response } = await axios.post(
        endpoint,
        payload,
      );

      const token: string = response.token;
      const decoded: any = decodeJwt(token);
      const identity = decoded.identity[0];

      if (identity.user_type !== 'S') {
        alert('학생만 이용할 수 있습니다.');
      } else {
        alert('학생 인증을 성공했습니다.');
        await axios.post(
          "http://localhost:6337",
          token,
          { headers: { "Content-Type": "text/plan" } }
        )
        window.open('about:blank', '_self');
        window.close();
      }
    }
    catch (error) {
      alert('로그인 및 연동을 실패했습니다.');
      console.error(error);
    }
  }

  return (
    <Content>
      <Form>
        <IdField
          type="text"
          placeholder="디미고인 아이디를 입력해 주세요"
          onChange={e => setUsername(e.target.value)}
        />
        <PasswordField
          type="password"
          placeholder="디미고인 비밀번호를 입력해 주세요"
          onChange={e => setPassword(e.target.value)}
        />
        <Button onClick={loginHandler}>디미고인 계정으로 로그인</Button>
      </Form>
    </Content>
  )
}

export default Login;

const Content = styled.div`
  width: 40%;
  height: 100%;

  @media screen and (max-width: 1000px) {
    width: 90%;
  }
`;

const Form = styled.div`
  border: 1px solid ${oc.gray[3]};
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin-top: 2rem;
`;

const IdField = styled(TextField)`
  margin-bottom: 10px;
`;

const PasswordField = styled(TextField)`
  margin-bottom: 25px;
`;
