import styled from "styled-components";
import "./StudentLife.css";
import {useEffect} from "react";


const TextWrapper = styled.div`
  display: flex;
  position: absolute;
  align-self: flex-end;
  flex-direction: column;
  flex-wrap: wrap-reverse;
  width: 50%;
  padding-top: 40px;
  z-index: 1000000;
  opacity: 1;
  padding-left: 30px;
`;

const Text = styled.div`
  color: white;
  font-style: italic;
  font-size: 40px;
  font-weight: 700;
`;

const SlideshowContainer = styled.div`
  position: relative;
`;


const StudentLife = () => {
    let slideIndex = 0;


    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += "active";
        setTimeout(showSlides, 5000); // Change image every 2 seconds
    }

    useEffect(() => {
        showSlides();
    },[])

    return <div>
        <TextWrapper>
            <Text>It's not about perfect. It's about effort.</Text>
            <Text>Yerevan, Armenia, is generally a safe, friendly and vibrant city with attractive architecture and rich history.</Text>
            <Text>Nicknamed the ‘pink city’, Yerevan is a city where strolling allows you to see plenty.</Text>
        </TextWrapper>
        <SlideshowContainer>
                <div className="mySlides fade">
                    <div className="numbertext"/>
                    <img src="1.jpg" />
                </div>

                <div className="mySlides fade">
                    <div className="numbertext"/>
                    <img src="2.jpeg"/>
                </div>

                <div className="mySlides fade">
                    <div className="numbertext"/>
                    <img src="3.jpg" />
                </div>

            </SlideshowContainer>
                <br/>

                <div >
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
};

export default StudentLife;