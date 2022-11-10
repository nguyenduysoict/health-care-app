import React from "react";
import "../styles/Header.scss";
import { ReactComponent as AppLogo } from "../resources/logo.svg";
import { ReactComponent as ChallengeIcon } from "../resources/icon_challenge.svg";
import { ReactComponent as MemoIcon } from "../resources/icon_memo.svg";
import { ReactComponent as InfoIcon } from "../resources/icon_info.svg";
import { ReactComponent as MenuIcon } from "../resources/icon_menu.svg";
import { ReactComponent as InfoCount } from "../resources/info_count.svg";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

interface HeaderProps {}

interface HeaderState {}

class Header extends React.Component<HeaderProps, HeaderState> {
  private dropdownMenu = [
    { label: "自分の記録", url: "/my-record" },
    { label: "体重グラフ", url: "/" },
    { label: "目標", url: "/" },
    { label: "選択中のコース", url: "/" },
    { label: "コラム一覧", url: "/column" },
    { label: "設定", url: "/" },
  ];

  constructor(props: HeaderProps) {
    super(props);
    this.state = { content: "content" };
  }
  render() {
    return (
      <div className="main-header align-center justify-content-between">
        <Link to={"/"}>
          {" "}
          <AppLogo />
        </Link>
        <div className="align-center">
          <div className="main-menu-item align-center">
            <MemoIcon />
            <div>
              <Link to={"/my-record"}>自分の記録</Link>
            </div>
          </div>
          <div className="main-menu-item align-center">
            <ChallengeIcon />
            <div>
              <Link to={"/"}>チャレンジ</Link>
            </div>
          </div>
          <div className="main-menu-item align-center">
            <div className="position-relative">
              <InfoIcon></InfoIcon>
              <InfoCount className="position-absolute" style={{right: "-4px"}}/>
            </div>
            <div>
              <Link to={"/"}>お知らせ</Link>
            </div>
          </div>
          <div className="custom-dropdown">
            <Dropdown align="end" autoClose={true}>
              <Dropdown.Toggle>
                <MenuIcon />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {this.dropdownMenu.map((item, index: number) => {
                  return (
                    <Dropdown.Item key={index} as="div">
                      <Link to={item.url}>
                        <div className="custom-dropdown-item">{item.label}</div>
                      </Link>
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
