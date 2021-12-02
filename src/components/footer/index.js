import React from 'react'
import * as S from './style'
import { graphql, useStaticQuery } from 'gatsby'



export function Footer() {

    const data = useStaticQuery(graphql`
    query{
        alldata{
            footers {
                btnAbout
                btnBooking
                btnContactUs
                btnHome
                btnSubscribe
                btnTaxi
                imgBulitIcon {
                  url
                }
                imgLogoFacebook {
                  url
                }
                imgLogoInstagram {
                  url
                }
                imgLogoLinkedin {
                  url
                }
                imgLogoTwitter {
                  url
                }
                imgLogoYoutube {
                  url
                }
                titleAdress
                titleFollowUs
                titleLinks
                titleNewsletter
                txtAdress
                txtFooter
              }
        }
    }
    `)

    const {btnAbout, btnBooking, btnContactUs, btnHome, btnSubscribe, btnTaxi, imgBulitIcon, imgLogoFacebook, imgLogoInstagram, imgLogoLinkedin, imgLogoTwitter, imgLogoYoutube, titleAdress, titleFollowUs, titleLinks, titleNewsletter, txtAdress, txtFooter} = data.alldata.footers[0]

    return (
        <div>
        <S.Container>
            <S.BoxAdress>
                <h3>{titleAdress}</h3>
                <p>{txtAdress}</p>
            </S.BoxAdress>
            <S.BoxLinks>
                <h3>{titleLinks}</h3>
                <nav>
                    <li>
                        <S.LinkItems><span><img src={imgBulitIcon.url} /></span>{btnHome}</S.LinkItems>
                        <S.LinkItems><span><img src={imgBulitIcon.url} /></span>{btnAbout}</S.LinkItems>
                        <S.LinkItems><span><img src={imgBulitIcon.url} /></span>{btnTaxi}</S.LinkItems>
                        <S.LinkItems><span><img src={imgBulitIcon.url} /></span>{btnBooking}</S.LinkItems>
                        <S.LinkItems><span><img src={imgBulitIcon.url} /></span>{btnContactUs}</S.LinkItems>
                    </li>
                </nav>
            </S.BoxLinks>
            <S.BoxFollowUs>
                <h3>{titleFollowUs}</h3>
                <S.FollowItem>
                    <div>
                        <img src={imgLogoFacebook.url} />
                        <p>Facebook</p>
                    </div>
                    <div>
                        <img src={imgLogoTwitter.url} />
                        <p>Twitter</p>
                    </div>
                    <div>
                        <img src={imgLogoLinkedin.url} />
                        <p>Linkedin</p>
                    </div>
                    <div>
                        <img src={imgLogoYoutube.url} />
                        <p>Youtube</p>
                    </div>
                    <div>
                        <img src={imgLogoInstagram.url} />
                        <p>Instagram</p>
                    </div>
                </S.FollowItem>
            </S.BoxFollowUs>
            <S.BoxNewsletter>
                <h3>{titleNewsletter}</h3>
                <input type="email" placeholder="Enter Your Email" />
                <button>Subscribe</button>
            </S.BoxNewsletter>
        </S.Container>
            <div>
                <p>2019 All Rights Reserved. Free html Templates</p>
            </div>
        </div>
    )
}
