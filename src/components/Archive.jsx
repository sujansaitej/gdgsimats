import React from 'react'

import Header from './Header'
import Footer from './Footer'
import archiveInfo from '../archiveInfo'
import '../css/archive.css'
import { ArrowUpLeft, ArrowUpRight, ExternalLink } from 'react-feather'
import { isMobile } from 'react-device-detect'
import { Link } from 'react-router-dom'

const Archives = () => {

  const backgroundStyle = {
    backgroundColor: "#fff",
    height : "300px",
    width : "300px",
  }

  return (

    <>
      <Header showLogoInHeader={true} />

      <div className="blogs-main-container " style={{paddingTop: isMobile ? 40 : 100}}> 
        <p className="h4 darkText ta-center" style={{ margin: '50px 0'}}>GDG Archives</p>
        {archiveInfo.map(year => {
          return (
            <div className="year-container">
              <div className="year-name">
                <p className="h5 darkText">GDG {year.year}</p>
              </div>
              <div className="link-cards">
                {year.info.map(inf => {
                  return (
                    <div className="link-card">
                      <div className="link-info">
                        <p className="t00 tanText" style={{marginTop: 5}}>{inf.title}</p>
                        <p className="t2 darkGrey">{inf.description}</p>
                      </div>
                      &emsp;
                      {inf.same_page ? 
                        <Link to={inf.link} rel="noopener noreferrer">
                          <div className="open-button">
                            <p className="t2 darkText">
                              Open
                              
                              {/* <ArrowUpRight size={16}/> */}
                            </p>
                          </div>
                        </Link> :
                        <a href={inf.link} rel="noopener noreferrer" target="_blank">
                          <div className="open-button">
                            <p className="t2 darkText">
                              Open
                              
                              {/* <ArrowUpRight size={16}/> */}
                            </p>
                          </div>
                        </a>
                      }
                      
                    </div>
                  )
                })}
              </div>
              
              
            </div>
          )
        })}
      </div>

      <Footer />
    </>
  )
}

export default Archives





