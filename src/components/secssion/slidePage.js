import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quotation from "../../images/quo_mark.png";
import styles from "../../components/secssion/slidePage.css";

export default function SlidePage() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    className: styles,
  };
  return (
    <div
      style={{
        width: "100%",
        height: 540,
        backgroundColor: "#F5F4F2",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Slider {...settings}>
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={quotation} width="60" />
          </div>
          <div
            style={{
              paddingLeft: 200,
              paddingRight: 200,
              fontWeight: "lighter",
              textAlign: "center",
              marginTop: 60,
            }}
          >
            I am extremely happy I chose Diamond Home Loan. I can not recommend
            this highly enough. The team was extremely helpful and
            understanding. Outstanding service. Will definitely be using again
            in future.
          </div>
          <div
            style={{
              textAlign: "center",
              fontSize: 18,
              marginTop: 40,
              marginBottom: 120,
              fontWeight: "lighter",
            }}
          >
            Andy Luo
          </div>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={quotation} width="60" />
          </div>
          <div
            style={{
              paddingLeft: 200,
              paddingRight: 200,
              fontWeight: "lighter",
              textAlign: "center",
              marginTop: 60,
            }}
          >
            The service I received was professional and personal and the team
            made the entire process so exciting.I am thankful for such an
            amazing service. As a first home buyer, I truly felt like I was in
            the right hands.
          </div>
          <div
            style={{
              textAlign: "center",
              fontSize: 18,
              marginTop: 40,
              marginBottom: 120,
              fontWeight: "lighter",
            }}
          >
            Eddi Peng
          </div>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={quotation} width="60" />
          </div>
          <div
            style={{
              paddingLeft: 200,
              paddingRight: 200,
              fontWeight: "lighter",
              textAlign: "center",
              marginTop: 60,
            }}
          >
            I have recommended DHL to a few friends who were also looking for
            home loans and they have been very happy with their services.
          </div>
          <div
            style={{
              textAlign: "center",
              fontSize: 18,
              marginTop: 40,
              marginBottom: 120,
              fontWeight: "lighter",
            }}
          >
            Kris Wong
          </div>
        </div>
      </Slider>
    </div>
  );
}
