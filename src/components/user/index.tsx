"use client";
import React, { useEffect, useState } from "react";
import Container from "@/common/container";
import UserCard from "@/common/userCard";
import "./index.scss";
import Link from "next/link";
import axios from "axios";

type InitialState = {
  userData: object[];
  loading: boolean;
};

const initialState: InitialState = {
  userData: [],
  loading: false,
};

const User = () => {
  const [state, setState] = useState<InitialState>(initialState);
  const { userData, loading } = state;

  const handleGetUsersList = async () => {
    try {
      setState({ ...state, loading: true });
      const res = await axios.get("/api/get-user-list");
      setState({ ...state, loading: false, userData: res?.data.data });
      // setState(initialState);
    } catch (error: any) {
      setState({ ...state, loading: false });
    }
  };

  useEffect(() => {
    handleGetUsersList();
  }, []);
  return (
    <Container>
      <h1 className="header">The Users List</h1>
      {loading ? (
        <>
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>Loading...</h1>
          </div>
        </>
      ) : (
        <div className="user-card-container">
          {userData?.map((item, id) => {
            return (
              // <div className="user-card-wrapper" key={id}>
              <Link href={`/${item.login}`} key={id}>
                <UserCard
                  avatar={item.avatar_url}
                  fullName={item.login}
                  userName={item.login}
                />
              </Link>
              // </div>
            );
          })}
        </div>
      )}
    </Container>
  );
};

export default User;
