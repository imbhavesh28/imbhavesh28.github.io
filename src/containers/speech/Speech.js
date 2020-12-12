import React, { useContext } from "react";
import "./Speech.css";
import SpeechCard from "../../components/speechCard/SpeechCard";
import { speechSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Speech() {
  const { isDark } = useContext(StyleContext);
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="talks">
        <div className="speech-main-div">
          <div className="speech-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading speech-heading"
                  : "heading speech-heading"
              }
            >
              {speechSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle speech-subtitle"
                  : "subTitle speech-subtitle"
              }
            >
              {speechSection.subtitle}
            </p>
          </div>
          <div className="speech-cards-div">
            {speechSection.speechCards.map((card) => {
              return (
                <SpeechCard
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    footer: card.footerLink,
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
