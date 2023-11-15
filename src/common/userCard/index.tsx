import React from "react";
import "./index.scss";
import Image from "next/image";
import DummyImg from "@/asset/images/dummyImg.png";

interface Params {
  avatar: string;
  fullName: string;
  userName: string;
}

const UserCard = ({ avatar, fullName, userName }: Params) => {
  return (
    <div className="card-container">
      <div className="avatar-wrap">
        <Image width={100} height={100} src={avatar} alt="" />
      </div>
      <div className="card-content-wrap-1">
        <p className="content-header">Full Name:</p>
        <p className="content-data"> {fullName.toUpperCase()}</p>
      </div>
      <div className="card-content-wrap-2">
        <p className="content-header">Username:</p>
        <p className="content-data">{userName} </p>
      </div>
    </div>
  );
};

export default UserCard;
