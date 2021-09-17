import React from "react";
import "./reset.css";
import {
  // DashBoardWrapper,
  ProfileMain,
  UserNameWrapper,
  ProfilePic,
  ProfileStats,
  ProfileWrapper,
} from "./DashboardStyles.js";
import { Doughnut } from "react-chartjs-2";
import { BsChevronDown } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";

const data = {
  labels: ["Published", "Unpublished"],
  options: {
    plugins: {
      legend: {
        title: {
          color: "#fff",
        },
      },
    },
  },
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19],
      backgroundColor: ["rgba(25,200,25, 0.6)", "rgba(255,20,25, 0.2)"],
      borderColor: ["rgba(25,200,25, 1)", "rgba(255,20,25, 1)"],
      borderWidth: 1,
    },
  ],
};

const Profile = () => {
  return (
    <ProfileWrapper>
      <UserNameWrapper>
        <div>
          <BsChevronDown />
        </div>

        <div>Username</div>
        <div></div>
      </UserNameWrapper>
      <ProfileMain>
        <div className="firstRow">
          <ProfilePic
            className="pic"
            image="https://100k-faces.glitch.me/random-image"
          ></ProfilePic>
          <div className="edit">
            <section>
              <a href="/">Username</a>
              <MdModeEdit />
            </section>
            <section>
              <a href="/">Designation</a>
              <MdModeEdit />
            </section>
          </div>
        </div>
        <div className="social">
          <img
            src="https://image.flaticon.com/icons/png/512/179/179330.png"
            alt=""
          />
          <img
            src="https://image.flaticon.com/icons/png/512/179/179319.png"
            alt=""
          />
          <img
            src="https://image.flaticon.com/icons/png/512/179/179342.png"
            alt=""
          />
          <img
            src="https://image.flaticon.com/icons/png/512/179/179346.png"
            alt=""
          />
          <img
            src="https://image.flaticon.com/icons/png/512/2111/2111463.png"
            alt=""
          />
        </div>
        <div className="chart">
          <div className="chartWrapper">
            <Doughnut data={data} />
          </div>
        </div>
        {/* <div className="stat"></div>
         */}
        <ProfileStats>
          <div>
            <section className="cardMain ">
              <h3 className="cardText">1000</h3>
              <p className="cardTitle">Total Likes</p>
            </section>
            <img
              src="https://image.flaticon.com/icons/png/512/3237/3237429.png"
              height="40px"
              alt=""
            />
          </div>
          <div>
            <section className="cardMain ">
              <h3 className="cardText">1000</h3>
              <p className="cardTitle">Total Comments</p>
            </section>
            <img
              src="https://image.flaticon.com/icons/png/512/1041/1041916.png"
              height="40px"
              alt=""
            />
          </div>
          <div>
            <section className="cardMain ">
              <h3 className="cardText">1000</h3>
              <p className="cardTitle">Total Views</p>
            </section>
            <img
              src="https://image.flaticon.com/icons/png/512/2235/2235419.png"
              height="40px"
              alt=""
            />
          </div>
        </ProfileStats>
      </ProfileMain>
    </ProfileWrapper>
  );
};
export default Profile;
