import React, { Component } from "react";
import {Card, CardBody, CardText, CardHeader, Collapse, Badge, Row, Col} from "reactstrap";
import styled from "styled-components";

class CardTimesheets extends Component {
     constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = { collapseCard: 1, cards: [1, 2, 3] };
    }

    toggle(index) {
      this.setState({collapseCard: this.state.collapseCard === index ? 0 : index});
    }
    render() {
        const sprite = 'public/images/sprite.svg';
        const {cards, collapseCard} = this.state;
        return (
            <Card className="card__timesheets">
            {cards.map((index) => {
                return(
                    <CardTimesheet key={index} className={this.state.collapseCard ===index ? 'card__box active': 'card__box'}>
                        <CardHeader onClick={() => this.toggle(index)}  data-event={index}>
                                <Row>
                                    <Col>
                                        <CardTimesheetList className="d-flex align-items-center">
                                            <img src="public/images/img_user.svg" alt="Arthur krohin" width="54" height="54"/>
                                            <TimesheetInfo>
                                                <CardText tag="h4">Arthur krohin</CardText>
                                                <CardText><Badge color="secondary">2</Badge>approvals awaiting
                                                </CardText>
                                            </TimesheetInfo>
                                            <svg className="icon" width="14" height="18"><use xlinkHref={`${sprite}#arrow-down`} /></svg>
                                        </CardTimesheetList>
                                    </Col>
                                </Row>
                            </CardHeader>
                        <Collapse isOpen={collapseCard === index}>
                        <CardBody className="card__detail">
                            <TimesheetDetail>
                                <div className="day-date">
                                    <CardText tag="span" className="day">Monday</CardText>
                                    <CardText tag="span" className="date">17 Feb 2020.</CardText>
                                </div>
                                <div className="d-flex justify-content-between timesheet-line">
                                    <strong>Nurse</strong>
                                    <strong>@ 10.00/hour</strong>
                                </div>
                                <div className="timesheet-line location">
                                    <h4>
                                    <svg className="icon" width="17" height="20"><use xlinkHref="public/images/sprite.svg#location"></use></svg>Location</h4>
                                    <span>2 Conqueror Court, Sittingbourne ME10 5BH</span>
                                </div>
                                <div className="timesheet-line">
                                    <div className="timing">
                                        <div className="d-flex justify-content-between timing-info">
                                            <div className="clock-in">
                                                <span className="timing-label">Clock In</span>
                                                <span className="timing-value">09:00</span>
                                            </div>
                                            <div className="break">
                                                <span className="timing-label">Break</span>
                                                <span className="timing-value">30 minutes</span>
                                            </div>
                                            <div className="clock-out">
                                                 <span className="timing-label">Clock Out</span>
                                                <span className="timing-value">17:15</span>
                                            </div>
                                        </div>
                                        <div className="timing-line"></div>
                                    </div>
                                    <div className="timeline-info">
                                        <span>Overtime: <strong>N/A</strong></span>
                                        <span>Total time worked: <strong>7:45</strong></span>
                                        <span>Total payment: <strong>£74,5</strong> </span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center timesheet-line">
                                    <span>1 shift remaining</span>
                                    <button className="btn btn--primary btn--approve">Approve 
                                    <span>
                                    <svg className="icon" width="13" height="13"><use xlinkHref={`${sprite}#clock`} /></svg>
                                    2:13</span></button>
                                </div>
                            </TimesheetDetail>
                        </CardBody>
                        <CardBody className="card__detail">
                            <TimesheetDetail>
                                <div className="day-date">
                                    <CardText tag="span" className="day">Monday</CardText>
                                    <CardText tag="span" className="date">17 Feb 2020.</CardText>
                                </div>
                                <div className="d-flex justify-content-between timesheet-line">
                                    <strong>Nurse</strong>
                                    <strong>@ 10.00/hour</strong>
                                </div>
                                <div className="timesheet-line location">
                                    <h4>
                                    <svg className="icon" width="17" height="20"><use xlinkHref="public/images/sprite.svg#location"></use></svg>Location</h4>
                                    <span>2 Conqueror Court, Sittingbourne ME10 5BH</span>
                                </div>
                                <div className="timesheet-line">
                                    <div className="timing">
                                        <div className="d-flex justify-content-between timing-info">
                                            <div className="clock-in">
                                                <span className="timing-label">Clock In</span>
                                                <span className="timing-value">09:00</span>
                                            </div>
                                            <div className="break">
                                                <span className="timing-label">Break</span>
                                                <span className="timing-value">30 minutes</span>
                                            </div>
                                            <div className="clock-out">
                                                 <span className="timing-label">Clock Out</span>
                                                <span className="timing-value">17:15</span>
                                            </div>
                                        </div>
                                        <div className="timing-line"></div>
                                    </div>
                                    <div className="timeline-info">
                                        <span>Overtime: <strong>N/A</strong></span>
                                        <span>Total time worked: <strong>7:45</strong></span>
                                        <span>Total payment: <strong>£74,5</strong> </span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center timesheet-line">
                                    <span>1 shift remaining</span>
                                    <button className="btn btn--primary btn--approve">Approve 
                                    <span>
                                    <svg className="icon" width="13" height="13"><use xlinkHref={`${sprite}#clock`} /></svg>
                                    2:13</span></button>
                                </div>
                            </TimesheetDetail>
                        </CardBody>                
                    </Collapse>                  
                    </CardTimesheet>
                )})}
            </Card>               
        )
    }
}

export default CardTimesheets;

const CardTimesheet = styled.div`
    padding-top: 0;
    padding-bottom: 0;
    transition: transform 0.1s ease-in-out;
    .card-header {
        cursor: pointer;
        padding: 1.7rem 0;
    }
    .card__detail {
        background-color: var(--color-base);
        border-radius: 8px;
        margin: 1.7rem 0;
        position: relative;
        & + .card__detail {
            margin-top: 4rem;
        }
    }
    &.active svg {
        transform: rotate(0deg);
    }
    &:not(.active):hover {
        transform: scale(1.03);
    }
`

const CardTimesheetList = styled.div`
    > img {
        margin-right: 12px;  
        max-width: 100%;
    }
    > svg {
        transform: rotate(180deg);
    }
`

const TimesheetInfo = styled.div`
    width: 100%;
    h4 {
        font-weight: 700;
    }
    .badge {
        line-height: 19px;
        margin-right: 5px;
        padding: 0;
        width: 19px;
    }
    p {
        font-size: 0.6875rem;
        font-weight: 500;
    }
`

const TimesheetDetail = styled.div`
    font-size: 0.875rem;
    position: relative;
    strong {
        font-weight: 600;
    }
    .timesheet-line {
        border-bottom: 1px solid rgba(214,214,214,0.45);
        padding: 1rem 1.25rem;
        &.location {
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
        }
        &:last-child {
            border-bottom: 0;
        }
    }
    .day-date {
        background-color: var(--color-secondary);
        border-radius: 35px;
        font-weight: 500;
        left: 50%;
        position: absolute;
        top: -12px;
        transform: translateX(-50%);
        & + div {
            padding-top: 2rem;
        }
    }
    .day,.date {
        padding: 1px 10px;
    }

    .day {
        padding-left: 14px;
    }

    .date {
        background-color: var(--color-brand-light);
        border-radius: 35px;
        color: var(--color-base);
    }

    .btn--approve {
        border-radius: 13px;
        padding: 0.65rem;
        span {     
            background-color: #FAC667;
            border-radius: 13px;
            color: var(--color-base);
            display: inline-block;
            font-weight: 500;
            line-height: 25px;
            margin-left: 5px;
            width: 60px;
            svg {
                margin-right: 5px;
                margin-top: -2px;
            }
        }
    }

    .timing {
        margin: 1rem 0 0.625rem;
        position: relative;
        &-info {
            position: absolute;
            left: 0;
            top: -20px;        
            width: 100%;
        }
        &-label, &-value {
            display: block;
            font-size: 0.75rem;
            font-weight: 500;
        }
        &-label {
            color: #745394;
            font-size: 0.6875rem;
            margin-bottom: 4px;
            text-transform: uppercase;
        }
    }

    .clock-in, .clock-out {
        .timing-value {
            background-color: var(--color-brand-light);
            border-radius: 35px;
            color: var(--color-base);
            line-height: 20px;
            text-align: center;
            width: 66px;
        }
    }

    .timing-line {
        background: var(--color-secondary);
        border-radius: 35px;
        height: 20px;
    }

    .timeline-info {
        span {
            display: block;
            text-align: center;
        }
    }
`