import React, { Component } from "react";
import {Row, Col, Card, CardBody, CardTitle, CardHeader, Badge} from "reactstrap";
import styled from "styled-components";

class CardJob extends Component {

  render() {
    const sprite = 'public/images/sprite.svg';
    return(
        <CardJobMainList>
            <Card>
              <CardHeader>
                <CardTitle className="d-flex justify-content-between">
                    <h3>Job Name</h3>
                    <Badge pill color="" className="job-state">
                      <svg className="icon" width="18" height="18"><use xlinkHref={`${sprite}#live`} /></svg>
                    </Badge>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <JobInfo>
                  <Row>
                    <Col xs="12" className="job-location">
                      <h4>
                        <svg className="icon" width="17" height="20"><use xlinkHref={`${sprite}#location`} /></svg>
                      Location</h4>
                        <span>
                          24 Hanover Drive, 
                          Gillingham ME8 0RE
                        </span>
                    </Col>
                    <Col xs="12">
                      <h4>
                        <svg className="icon" width="18" height="18"><use xlinkHref={`${sprite}#user`} /></svg>
                      Roles</h4>
                      <span className="user-role">Receptionist - <strong>1</strong> of <strong>1</strong> hired</span>
                    </Col>
                  </Row>
                </JobInfo>
                <DatePeriod className="d-flex justify-content-between">
                    <div className="start-date">
                      <div className="date-tooltip">
                        <span>Start Date</span>
                        <strong>17 Feb 2020.</strong>
                      </div>
                      <span className="circle"></span>
                    </div>
                    <div className="end-date">
                      <div className="date-tooltip">
                        <span>End Date</span>
                        <strong>28 Feb 2020.</strong>
                      </div>
                      <span className="circle"></span>
                    </div>
                </DatePeriod>
            </CardBody>
          </Card>
          </CardJobMainList>
    )
  }
}

export default CardJob;

const CardJobMainList = styled.div`
  width: 49%;  
  &:nth-child(3),
  &:nth-child(4) {
        .card {
              margin-bottom: 0;
        }
  }
  .card {
        background-color: #F9F8FB; 
  }
  .job {
    &-location {
      margin-bottom: 1.25rem;
    }
    &-state {
      padding: 0;
    }
  }
`

const JobInfo = styled.div`
  border-bottom: 1px solid rgba(215,206,224,0.45);
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  .col-5 {
    padding-right: 0;
  }
  h4 {
    margin-bottom: 0;

    svg {
          margin-right: 8px;
    }
  }
  span {
    display: block;
    font-size: 0.875rem;
    line-height: 17px;
    margin-left: 24px;
  }

  .user-role {
    line-height: 20px;
  }
`

const DatePeriod = styled.div`
  background-image: linear-gradient(to right, #380966 33%, rgba(255, 255, 255, 0) 0%);
  background-position: bottom;
  background-size: 0.75rem 0.1rem;
  background-repeat: repeat-x;
  height: 5px;
  margin: 0 auto 6px;
  padding-bottom: 80px;
  width: calc(100% - 100px);
  .start-date,.end-date {
    position: relative;
  }
  .date-tooltip {
    background-color: var(--color-brand-light);
    border-radius: 4px;
    color: var(--color-base);
    left: -52px;
    min-width: 120px;
    padding: 0.5rem 0.75rem;
    position: absolute;
    text-align: center;
    span {
      color: #C3B5D1;
      display: block;
      font-size: 0.75rem;
      font-weight: 500;
      text-transform: uppercase;
    }
    strong {
      display: block;
      font-size: 0.875rem;
      font-weight: 600;
    }
    &:after {
      content: "";
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 15px solid var(--color-brand-light);
      bottom: -10px;
      left: 50%;
      position: absolute;
      transform: translateX(-50%);
    }
  }

  .circle {
      background-color: var(--color-brand-light);
      border-radius: 50%;
      display: block;
      height: 16px;
      margin-top: 70px;
      width: 16px;
  }
`