import React, {Component} from "react";
import { leftFooterPanelLinks, middleFooterPanelLinks, rightFooterPanelLinks} from '../../data/footerLinks';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitterSquare} from "@fortawesome/free-brands-svg-icons";


class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <footer className="page-footer font-small blue pt-4">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Producted BY:</h5>
                            <p>Muhamet Shala in collaborazione con Epicode</p>
                            <img  className="epicode" src="https://www.emagister.it/assets/it/logos/centro/id/106747/size/l.jpg" alt="Epicode" />
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0"/>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Selection</h5>
                            <ul className="list-unstyled">
                                {leftFooterPanelLinks.map((link) => {
                                    return(
                                        <li>{link.title}</li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Our Company</h5>
                            <ul className="list-unstyled">
                                {rightFooterPanelLinks.map((link) => {
                                        return(
                                            <li>{link.title}</li>
                                        )

                                    })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2023 Copyright:
                    <a href="#" className="text-decoration-none"> Muhamet Shala</a>
                </div>
            </footer>
        )
    }
}

export default Footer;