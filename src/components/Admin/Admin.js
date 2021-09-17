import { useState } from "react";
import styled from "styled-components";
import "../dashboard/reset.css";
import {
  Subhead,
  DashBoardWrapper,
  UserNameWrapper,
  ArticleListWrapper,
} from "../dashboard/DashboardStyles";
import { BsChevronDown } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import ModalAdmin from "./Modal";
import AdminNav from "./AdminNav";

const ArticleListWrapperAdmin = styled(ArticleListWrapper)`
  & .article {
    background: rgba(5, 156, 204, 0.2);
    cursor: pointer;
    color: #000;
    & .articleContent {
      color: #000;
    }
  }
`;

const Admin = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [heading, setHeading] = useState("");

  function openModal(head) {
    setHeading(head);
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const isDesktop = useMediaQuery({
    query: "(min-width:520px)",
  });
  // const isMobile = useMediaQuery({
  //   query: "(max-width:660px)",
  // });
  return (
    <>
      {isDesktop && <AdminNav />}
      <ModalAdmin
        modalIsOpen={modalIsOpen}
        afterOpenModal={afterOpenModal}
        closeModal={closeModal}
        subtitle={subtitle}
        heading={heading}
      />
      <DashBoardWrapper>
        <UserNameWrapper>
          <div>
            <BsChevronDown />
          </div>

          <div>Username</div>
          <div></div>
        </UserNameWrapper>
        {/* <Greetings>
        <h3>Hello Vikas</h3>
        <p>This is your stats so far</p>
      </Greetings> */}
        {/* {isDesktop && (
        <Stats>
          <div className="statsCard like">
            <div className="cardMain ">
              <div className="cardTitle">Total Likes</div>
              <div className="cardText">1000</div>
            </div>
            <div className="cardIcon like"></div>
          </div>
          <div className="statsCard comment">
            <div className="cardMain">
              <div className="cardTitle"> Comments</div>
              <div className="cardText">1000</div>
            </div>
            <div className="cardIcon comment"></div>
          </div>
          <div className="statsCard view">
            <div className="cardMain">
              <div className="cardTitle">Total Views</div>
              <div className="cardText">1000</div>
            </div>
            <div className="cardIcon views"></div>
          </div>
        </Stats>
      )}
      {isMobile && (
        <MobileStats>
          <div>
            <section className="cardMain ">
              <p className="cardTitle">Total Likes</p>
              <h3 className="cardText">1000</h3>
            </section>
            <img
              src="https://image.flaticon.com/icons/png/512/3237/3237429.png"
              height="40px"
              alt=""
            />
          </div>
          <div>
            <section className="cardMain ">
              <p className="cardTitle">Total Comments</p>
              <h3 className="cardText">1000</h3>
            </section>
            <img
              src="https://image.flaticon.com/icons/png/512/1041/1041916.png"
              height="40px"
              alt=""
            />
          </div>
          <div>
            <section className="cardMain ">
              <p className="cardTitle">Total Views</p>
              <h3 className="cardText">1000</h3>
            </section>
            <img
              src="https://image.flaticon.com/icons/png/512/2235/2235419.png"
              height="40px"
              alt=""
            />
          </div>
        </MobileStats>
      )} */}
        <Subhead>
          <p>Pending Articles</p>
          <p className="seeAll">
            {" "}
            <a href="/">See all ({20})</a>
          </p>
        </Subhead>
        <ArticleListWrapperAdmin>
          <div
            className="article"
            onClick={() =>
              openModal(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              )
            }
          >
            <div className="articleBg"></div>
            <div className="articleContent">
              <div className="articleTitle">Article Title</div>
              <div className="articleDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div className="article" onClick={() => openModal("2")}>
            <div className="articleBg"></div>
            <div className="articleContent">
              <div className="articleTitle">Article Title</div>
              <div className="articleDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div className="article" onClick={() => openModal("3")}>
            <div className="articleBg"></div>
            <div className="articleContent">
              <div className="articleTitle">Article Title</div>
              <div className="articleDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div className="article">
            <div className="articleBg"></div>
            <div className="articleContent">
              <div className="articleTitle">Article Title</div>
              <div className="articleDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div className="article">
            <div className="articleBg"></div>
            <div className="articleContent">
              <div className="articleTitle">Article Title</div>
              <div className="articleDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div className="article">
            <div className="articleBg"></div>
            <div className="articleContent">
              <div className="articleTitle">Article Title</div>
              <div className="articleDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
        </ArticleListWrapperAdmin>
        {/* <Subhead>
        <p>Unpublished Articles</p>
        <p className="seeAll">
          <a href="/">See all ({20})</a>
        </p>
      </Subhead>
      <UnpublishedWrapper>
        <div className="article">
          <div className="articleBg"></div>
          <div className="articleContent">
            <div className="articleTitle">Article Title</div>
            <div className="articleDesc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div className="articleDelete">
            <MdDelete />
          </div>
        </div>
        <div className="article">
          <div className="articleBg"></div>
          <div className="articleContent">
            <div className="articleTitle">Article Title</div>
            <div className="articleDesc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div className="articleDelete">
            <MdDelete />
          </div>
        </div>
        <div className="article">
          <div className="articleBg"></div>
          <div className="articleContent">
            <div className="articleTitle">Article Title</div>
            <div className="articleDesc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div className="articleDelete">
            <MdDelete />
          </div>
        </div>
      </UnpublishedWrapper> */}
      </DashBoardWrapper>
    </>
  );
};

export default Admin;
