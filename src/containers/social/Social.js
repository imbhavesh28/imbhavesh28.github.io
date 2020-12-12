import React, { useContext } from "react";
import "./Social.css";
import SocialCard from "../../components/socialCard/SocialCard";
import { socialSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Social() {
  const { isDark } = useContext(StyleContext);
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <Fade bottom duration={1000} distance="10px">
      <div className="main" id="photos">
        <div className="social-main-div">
          <div className="social-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading social-heading"
                  : "heading social-heading"
              }
            >
              {socialSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle social-subtitle"
                  : "subTitle social-subtitle"
              }
            >
              {socialSection.subtitle}
            </p>
          </div>
          <div className="social-cards-div">
            {socialSection.socialCards.map((card) => {
              return (
                <SocialCard
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
