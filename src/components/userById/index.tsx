"use client";
import React, { useEffect, useState } from "react";
import Container from "@/common/container";
import Image from "next/image";
import DummyImg from "@/asset/images/dummyImg.png";
import "./index.scss";
import Link from "next/link";
import axios from "axios";
import { useParams } from "next/navigation";

type InitialState = {
  userDataById: object;
  loading: boolean;
};

const initialState: InitialState = {
  userDataById: {},
  loading: false,
};

const UserByName = () => {
  const params = useParams();

  const [state, setState] = useState<InitialState>(initialState);
  const { userDataById, loading } = state;
  const {
    avatar_url,
    company,
    followers,
    following,
    name,
    public_repos,
    public_gists,
    login,
    email,
    twitter_username,
  } = userDataById;

  const handleGetUsersList = async () => {
    try {
      setState({ ...state, loading: true });
      const res = await axios.get("/api/get-user-data", {
        params: {
          id: params?.userName,
        },
      });
      setState({ ...state, loading: false, userDataById: res?.data.data });
      // setState(initialState);
    } catch (error: any) {
      setState({ ...state, loading: false });
    }
  };

  useEffect(() => {
    handleGetUsersList();
  }, []);

  return (
    <div className="by-name-container">
      <Container>
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
          <div className="by-name-wrapper">
            <div className="avatar-wrapper">
              <Image width={100} height={100} src={avatar_url} alt="" />
            </div>
            <div className="by-name-content-wrapper">
              <p className="full-name">{name} </p>
              <div className="single-header-content-wrap">
                <span className="header">Company:</span>
                <span className="content">
                  {company || "No company found"}{" "}
                </span>
              </div>

              <div className="single-header-content-wrap">
                <span className="header">Username:</span>
                <span className="content">{login} </span>
              </div>
              <div className="single-header-content-wrap">
                <span className="header">Email:</span>
                <span className="content">
                  <a href="">{email || "No email found"} </a>
                </span>
              </div>
              <div className="single-header-content-wrap">
                <span className="header">Twitter Username:</span>
                <span className="content">
                  {twitter_username || "No username found"}{" "}
                </span>
              </div>
              <div className="dual-header-content-wrap">
                <div className="single-header-content-wrap">
                  <span className="header">Followers:</span>
                  <span className="content">{followers} </span>
                </div>
                <div className="single-header-content-wrap">
                  <span className="header">Following:</span>
                  <span className="content">{following} </span>
                </div>
              </div>
              <div className="dual-header-content-wrap">
                <div className="single-header-content-wrap">
                  <span className="header">Public Repository:</span>
                  <span className="content">{public_repos} </span>
                </div>
                <div className="single-header-content-wrap">
                  <span className="header">Public Gists:</span>
                  <span className="content">{public_gists} </span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="button-wrap">
          <Link href="/">
            <button>Back to Users List</button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default UserByName;
