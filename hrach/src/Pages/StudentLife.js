import styled from "styled-components";
import "./StudentLife.css";
import {useEffect} from "react";

const StudentLifeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 600px;
  width: 100%;
  z-index: 10000;
`;

const TextWrapper = styled.div`
  display: flex;
  position: absolute;
  align-self: flex-end;
  flex-direction: column;
  flex-wrap: wrap-reverse;
  width: 50%;
  padding-top: 40px;
`;

const Text = styled.div`
  color: white;
  font-style: italic;
  font-size: 40px;
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
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 5000); // Change image every 2 seconds
    }

    useEffect(() => {
        showSlides();
    },[])

    return <div>
        <TextWrapper>
            <Text>It's not about perfect. It's about effort.
            </Text>
            <Text>I need to add some activities about students and about the city, Yerevan some pics
            </Text>
        </TextWrapper>
        <SlideshowContainer>
                <div className="mySlides fade">
                    <div className="numbertext">1 / 3</div>
                    <img src="1.jpg" />
                        <div className="text">Caption Text</div>
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">2 / 3</div>
                    <img src="2.jpeg"/>
                        <div className="text">Caption Two</div>
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">3 / 3</div>
                    <img src="3.jpg" />
                        <div className="text">Caption Three</div>
                </div>

            </SlideshowContainer>
                <br/>

                <div >
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>

    {/*    return <StudentLifeWrapper>*/}
    {/*    */}

    {/*</StudentLifeWrapper>*/}
};

export default StudentLife;