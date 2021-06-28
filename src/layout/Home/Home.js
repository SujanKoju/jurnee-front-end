import React, {Component} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../component/Header/Header";
import CardJob from "../../component/Cards/CardJob/CardJob";
import CardStatistics from "../../component/Cards/CardStatistics/CardStatistics";
import CardInvoices from "../../component/Cards/CardInvoices/CardInvoices";
import CardChats from "../../component/Cards/CardChats/CardChats";
import CardTimesheets from "../../component/Cards/CardTimesheets/CardTimesheets";
import {Row, Col, Badge} from "reactstrap";

class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {cards: [1, 2, 3,4] };
    }

    render() {
      const sprite = 'public/images/sprite.svg'; 
      const {cards} = this.state;
      
        return (
            <HomeWrapper>
                <Header/>
                <div className="container-main">
                    <section className="introduction__title">
                        <h1>Welcome, John</h1>
                        <p>Here is the summary of your account.</p>
                    </section>
                    <section className="section jobs">
                        <div className="d-flex justify-content-between align-items-center section__title">
                          <div className="d-flex">
                              <h2>Jobs</h2>
                              <Badge pill color="secondary">New Position Filled</Badge>
                          </div>
                          <div className="see-all">
                            <Link to="/jobs">See all jobs
                              <svg className="icon" width="20" height="10"><use xlinkHref={`${sprite}#arrow-right`} /></svg>
                            </Link>
                          </div>
                        </div>
                        <Row>
                            <Col className="statistics">
                               <CardStatistics/>
                            </Col>
                            <Col className="job">
                              <div className='d-flex flex-wrap justify-content-between card__job'>
                                {cards.map((index) => {
                                  return(
                                      <CardJob key={index} data-event={index}/>
                                )})}
                              </div>
                            </Col>
                        </Row>
                    </section>
                    <section>
                      <Row>
                        <Col xs="7">
                          <Row className="invoices">
                           <Col xs="12">
                            <div className="d-flex justify-content-between align-items-center section__title">
                              <div className="d-flex">
                                  <h2>Invoices</h2>
                                  <Badge pill color="secondary">Invoice Payment Pending</Badge>
                              </div>
                              <div className="see-all">
                                <Link to="/jobs">See all invoices
                                <svg className="icon" width="20" height="10"><use xlinkHref={`${sprite}#arrow-right`} /></svg>
                                </Link>
                              </div>
                            </div>
                            <CardInvoices/>
                          </Col>
                          </Row>
                          <Row className="chat">
                           <Col xs="12">
                            <div className="d-flex justify-content-between align-items-center section__title">
                              <div className="d-flex">
                                  <h2>Chat</h2>
                                  <Badge pill color="secondary">New Messages</Badge>
                              </div>
                              <div className="see-all">
                                <Link to="/jobs">See all messages
                                <svg className="icon" width="20" height="10"><use xlinkHref={`${sprite}#arrow-right`} /></svg>
                                </Link>
                              </div>
                            </div>
                            <CardChats/>
                          </Col>
                          </Row>
                        </Col>
                        <Col xs="5">
                          <div className="d-flex justify-content-between align-items-center section__title">
                            <div className="d-flex">
                                <h2>Timesheets</h2>
                                <Badge pill color="secondary">Awaiting Approval</Badge>
                            </div>
                          </div>
                          <CardTimesheets/>
                        </Col>
                      </Row>
                    </section>
                </div>
            </HomeWrapper>
        )
    }

}

export default Home;
;
const HomeWrapper = styled.div`
    .statistics {
      flex: 0 0 38%;
      width: 38%;
    }
    .job {
      flex: 0 0 62%;
      flex-wrap: wrap;
      width: 62%;
    }
    .invoices,.chat {
      padding-right: 50px;
    }
`
