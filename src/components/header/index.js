import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from "./style"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function SimpleSlider(){

    const data = useStaticQuery(graphql`
    query {
        alldata{
            headers {
                btnBooking
                btnContactUs
                btnFilter
                btnHome
                btnTaxi
                imgLogo {
                  url
                }
                imgTaxiSlide {
                  url
                }
                imgTaxiSlide2 {
                  url
                }
                txtBookNow
                txtCttBookNow
                txtDestination
              }
        }
    }
    `)
    const {btnBooking, btnContactUs, btnFilter, btnHome, btnTaxi, imgLogo, imgTaxiSlide,  imgTaxiSlide2, txtBookNow, txtCttBookNow, txtDestination} = data.alldata.headers[0]

      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        lazyLoad: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true
      };
      return (
          <>
           <S.Container>
                <S.BoxImg to="./">
                <img src={imgLogo.url} alt="" />
                </S.BoxImg>
                <nav>
                    <S.Lista>
                        <ul>
                            <S.Item to="./">
                            {btnHome}
                            </S.Item>
                        </ul>
                        <ul>
                            <S.Item to="./">
                            {btnTaxi}
                            </S.Item>
                        </ul>
                        <ul>
                            <S.Item to="./">
                            {btnBooking}
                            </S.Item>
                        </ul>
                        <ul>
                            <S.Item to="./">
                            {btnContactUs}
                            </S.Item>
                        </ul>
                    </S.Lista>
                </nav>
            </S.Container>
        <div style={{overflowX: "hidden"}}>
          <Slider {...settings}>
            <div>
            <S.ContainerSlide>
              <S.BoxLeft>
                <S.BoxTxt>
                  <h3 style={{color: "#fefefe"}}>{txtBookNow}</h3>
                  <h3>{txtCttBookNow}</h3>
                </S.BoxTxt>
                <S.Figure>
                  <img src={imgTaxiSlide2.url} />
                </S.Figure>
              </S.BoxLeft>
              <div>
                <S.BoxTitle>
                  <h1>{txtDestination}</h1>
                </S.BoxTitle>
                <S.ContainerInput>
                  <h3>Your everyday travel partner</h3>
                  <S.BoxInput>
                  <input type="text" placeholder="pickup"/>
                  <input type="text" placeholder="drop"/>
                  <input type="text" placeholder="when"/>
                  </S.BoxInput>
                  <S.BoxBtn>
                  <button>{btnFilter}</button>
                  </S.BoxBtn>
                </S.ContainerInput>
              </div>
            </S.ContainerSlide>
            </div>
            <div>
            <S.ContainerSlide>
              <S.BoxLeft>
                <S.BoxTxt>
                  <h3 style={{color: "#fefefe"}}>{txtBookNow}</h3>
                  <h3>{txtCttBookNow}</h3>
                </S.BoxTxt>
                <S.Figure>
                  <img src={imgTaxiSlide.url} />
                </S.Figure>
              </S.BoxLeft>
              <div>
                <S.BoxTitle>
                  <h1>{txtDestination}</h1>
                </S.BoxTitle>
                <S.ContainerInput>
                  <h3>Your everyday travel partner</h3>
                  <S.BoxInput>
                  <input type="text" placeholder="pickup"/>
                  <input type="text" placeholder="drop"/>
                  <input type="text" placeholder="when"/>
                  </S.BoxInput>
                  <S.BoxBtn>
                  <button>{btnFilter}</button>
                  </S.BoxBtn>
                </S.ContainerInput>
              </div>
            </S.ContainerSlide>
            </div>
            <div>
            <S.ContainerSlide>
              <S.BoxLeft>
                <S.BoxTxt>
                  <h3 style={{color: "#fefefe"}}>{txtBookNow}</h3>
                  <h3>{txtCttBookNow}</h3>
                </S.BoxTxt>
                <S.Figure>
                  <img src={imgTaxiSlide2.url} />
                </S.Figure>
              </S.BoxLeft>
              <div>
                <S.BoxTitle>
                  <h1>{txtDestination}</h1>
                </S.BoxTitle>
                <S.ContainerInput>
                  <h3>Your everyday travel partner</h3>
                  <S.BoxInput>
                  <input type="text" placeholder="pickup"/>
                  <input type="text" placeholder="drop"/>
                  <input type="text" placeholder="when"/>
                  </S.BoxInput>
                  <S.BoxBtn>
                  <button>{btnFilter}</button>
                  </S.BoxBtn>
                </S.ContainerInput>
              </div>
            </S.ContainerSlide>
            </div>
          </Slider>
        </div>
        </>
      );
    }

