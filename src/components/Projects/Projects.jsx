import React from "react";
// import {Link} from "react-router-dom";

import Avito from "../../Images/Avito.png"
import HB from "../../Images/HobbyGames.png"
import HPACE from "../../Images/HPACE.png"
import VS from "../../Images/VS.png"
import uprock from "../../Images/uprock.png"
import RabotaRu from "../../Images/RabotaRu.png"
import Tincoff from "../../Images/Tincoff.png"
import Tlauncher from "../../Images/Tlauncher.png"

const Projects = () => {
  return (
      <div className="container">
        <h2 className="Last-projects">Последние проекты</h2>
          <div className="product-wrapper">
              <div className="product">
                  <div>
                      <img className="ProductImg" src={Avito} alt="Avito"/>
                  </div>
                  <div className="ProductTitle">
                      <h4>Авито</h4>
                  </div>
              </div>
          </div>
          <div className="product-wrapper">
              <div className="product">
                  <div >
                      <img className="ProductImg" src={HB} alt="Avito"/>
                  </div>
                  <div className="ProductTitle">
                      <h4>HobbyGames</h4>
                  </div>
              </div>
          </div>
          <div className="product-wrapper">
              <div className="product">
                  <div >
                      <img className="ProductImg" src={HPACE} alt="Avito"/>
                  </div>
                  <div className="ProductTitle">
                      <h4>HPACE</h4>
                  </div>
              </div>
          </div>
          <div className="product-wrapper">
              <div className="product">
                  <div >
                      <img className="ProductImg" src={VS} alt="Avito"/>
                  </div>
                  <div className="ProductTitle">
                      <h4>VS</h4>
                  </div>
              </div>
          </div>
          <div className="product-wrapper">
              <div className="product">
                  <div >
                      <img className="ProductImg" src={uprock} alt="Avito"/>
                  </div>
                  <div className="ProductTitle">
                      <h4>uprock</h4>
                  </div>
              </div>
          </div>
          <div className="product-wrapper">
              <div className="product">
                  <div >
                      <img className="ProductImg" src={RabotaRu} alt="Avito"/>
                  </div>
                  <div className="ProductTitle">
                      <h4>RabotaRu</h4>
                  </div>
              </div>
          </div>
          <div className="product-wrapper">
              <div className="product">
                  <div >
                      <img className="ProductImg" src={Tincoff} alt="Avito"/>
                  </div>
                  <div className="ProductTitle">
                      <h4>Tincoff</h4>
                  </div>
              </div>
          </div>
          <div className="product-wrapper">
              <div className="product">
                  <div >
                      <img className="ProductImg" src={Tlauncher} alt="Avito"/>
                  </div>
                  <div className="ProductTitle">
                      <h4>Tlauncher</h4>
                  </div>
              </div>
          </div>
      </div>
  )
};

export default Projects;