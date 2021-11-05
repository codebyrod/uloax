import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style'

export function Main() {
    const data = useStaticQuery(graphql`
    query{
        alldata{
            mains {
                imgAppleStore {
                  url
                }
                imgBox1 {
                  url
                }
                imgBox2 {
                  url
                }
                imgBoxTaxi {
                  url
                }
                imgCar {
                  url
                }
                imgPhone {
                  url
                }
                imgPlayStore {
                  url
                }
                imgTaxi {
                  url
                }
                imgbackground {
                  url
                }
                titleBox1
                titleBox2
                titleCard1
                titleCard2
                titleCard3
                titleDownload
                titleOurAppToday
                titleUloax
                txtBox
                txtCard
                txtOurTaxi
              }
        }
    }
    `)

    const {imgAppleStore, imgBox1, imgBox2, imgBoxTaxi, imgCar, imgPhone, imgPlayStore, imgTaxi, imgbackground, titleBox1, titleBox2, titleCard1, titleCard2, titleCard3, titleDownload, titleOurAppToday, titleUloax, txtBox, txtCard, txtOurTaxi } = data.alldata.mains[0]

    return (
        <S.Container>
            <S.BoxTitle>
            <h2>Our <span style={{color: "#f4db31"}}> Taxi</span></h2>
            </S.BoxTitle>
            <S.ContainerCard>
                <S.BoxCard>
                  <S.Circle>
                    <p>01</p>
                  </S.Circle>
                  <S.Card>
                    <h3>{titleCard1}</h3>
                    <p>{txtCard}</p>
                    <img src={imgCar.url} />
                  </S.Card>
                </S.BoxCard>
                <S.BoxCard>
                  <S.Circle>
                    <p>02</p>
                  </S.Circle>
                  <S.Card>
                    <h3>{titleCard2}</h3>
                    <p>{txtCard}</p>
                    <img src={imgCar.url} />
                  </S.Card>
                  </S.BoxCard>
                <S.BoxCard>
                  <S.Circle>
                    <p>03</p>
                  </S.Circle>
                  <S.Card>
                    <h3>{titleCard3}</h3>
                    <p>{txtCard}</p>
                    <img src={imgCar.url} />
                  </S.Card>
                </S.BoxCard>
            </S.ContainerCard>
            <S.ContainerBox>
              <div>
                <h2>{titleUloax}</h2>
              </div>
              <S.Box>
                <picture>
                  <img src={imgBox1.url} />
                </picture>
                <S.Elements>
                  <h3>{titleBox1}</h3>
                  <p>{txtBox}</p>
                  <button>book now</button>
                </S.Elements>
              </S.Box>
            </S.ContainerBox>
        </S.Container>
    )
}
