import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from "./style"

export function Header() {
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
                txtBookNow
                txtCttBookNow
                txtDestination
                txtFilter
              }
        }
    }
    `)
    const {btnBooking, btnContactUs, btnFilter, btnHome, btnTaxi, imgLogo, txtBookNow, txtCttBookNow, txtDestination, txtFilter} = data.alldata.headers[0]
    return (
        <div>
            <S.Container>
                <S.BoxImg>
                <img src={imgLogo.url} alt="" />
                </S.BoxImg>
                <nav>
                    <S.Lista>
                        <ul>
                            <a>
                            {btnHome}
                            </a>
                        </ul>
                        <ul>
                            <a>
                            {btnTaxi}
                            </a>
                        </ul>
                        <ul>
                            <a>
                            {btnBooking}
                            </a>
                        </ul>
                        <ul>
                            <a>
                            {btnContactUs}
                            </a>
                        </ul>
                    </S.Lista>
                </nav>
            </S.Container>
            <div>
                <p>slide</p>
            </div>
        </div>
    )
}
