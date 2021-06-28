import React, {Component} from "react";
import Select from "react-select";
import styled from "styled-components";
import Header from "../../../component/Header/Header";
import Calendar from "../../../component/Calendar/Calendar";
import CardJob from "../../../component/Cards/CardJob/CardJob";
import CardJobMain from "../../../component/Cards/CardJobMain/CardJobMain";
import CardRole from "../../../component/Cards/CardRole/CardRole";
import {Row, Col, Card, CardHeader, CardText, CardBody, Collapse} from "reactstrap";


const venueOptions = [
  { value: 'venue1', label: 'venue1' },
  { value: 'venue2', label: 'venue2' },
  { value: 'venue3', label: 'venue3' },
]

const roleOptions = [
  { value: 'role1', label: 'role1' },
  { value: 'role2', label: 'role2' },
  { value: 'role3', label: 'role3' },
]

const statusOptions = [
  { value: 'status1', label: 'status1' },
  { value: 'status2', label: 'status2' },
  { value: 'status3', label: 'status3' },
]

const sortOptions = [
  { value: 'Name', label: 'Name'},
  { value: 'Name1', label: 'Name1'},
  { value: 'Name2', label: 'Name2'},
]

class JobsList extends Component {
     constructor(props) {
      super(props);
      this.state = {
          cards: [1, 2, 3,4],
          cardsFilling: [1,2,3,],
          cardsBooked: [1,2,3,],
          cardsLive: [1,2,3,],
          cardsCompleted: [1,2,3,],
          cardsCancelled: [1,2,3,],
          collapseCard: 0,
        };

      this.toggle = this.toggle.bind(this)
    }

     toggle(index) {
      this.setState({collapseCard: this.state.collapseCard === index ? 0 : index});
    }

    render() {
        const sprite = 'public/images/sprite.svg';
        const {cards,cardsFilling,cardsBooked,cardsLive,cardsCompleted,cardsCancelled, collapseCard} = this.state;
        return(
            <JobsWrapper>
                <Header/>
                <div className="container-main">
                <section className="introduction__title">
                    <h1>Jobs</h1>
                </section>
                <section className="section section__calendar">
                    <Row style={{paddingTop: '20px'}}>
                        <Col xs="5">
                            <Card>
                                <Calendar/>
                            </Card>
                        </Col>
                        <Col xs="7">
                            <Card>
                                <div className='d-flex flex-wrap justify-content-between card__job'>
                                    {cards.map((index) => {
                                    return(
                                        <CardJobMain key={index} data-event={index}/>
                                    )})}
                                </div>
                            </Card>
                        </Col>
                    </Row>  
                </section>                 
                <section className="section section__search">
                    <SearchBar>
                        <div className="d-flex justify-content-center">
                            <Select
                                className="react-select"
                                classNamePrefix="select"
                                // defaultValue={venueOptions[0]}
                                options={venueOptions}
                                isClearable={false}
                                placeholder="Venue"
                            />
                            <Select
                                className="react-select"
                                classNamePrefix="select"
                                // defaultValue={roleOptions[0]}
                                options={roleOptions}
                                isClearable={false}
                                placeholder="Role"
                            />
                            <Select
                                className="react-select"
                                classNamePrefix="select"
                                // defaultValue={statusOptions[0]}
                                options={statusOptions}
                                isClearable={false}
                                placeholder="Status"
                            />
                        </div>
                    </SearchBar>
                    <SearchResultBar className="d-flex justify-content-between align-items-center">
                        <p>Showing <strong>24</strong> results of <strong>24</strong></p>
                        <SortBy className="d-flex align-items-center">
                           <span>Sort by: </span>
                           <Select
                                className="react-select"
                                classNamePrefix="select"
                                defaultValue={sortOptions[0]}
                                options={sortOptions}
                                isClearable={false}
                            />
                        </SortBy>
                    </SearchResultBar>
                    <ResultList>
                        <h2>Filling</h2>
                        <div className="d-flex justify-content-between">
                            {cardsFilling.map((index) => {
                                return(
                                    <CardResult key={index} className={this.state.collapseCard ===index ? 'active card__box': 'card__box'}>
                                        <CardHeader onClick={() => this.toggle(index)}  data-event={index}>
                                            <Row>
                                                <Col>
                                                    <CardJob/>
                                                        <svg className="icon" width="14" height="18"><use xlinkHref="public/images/sprite.svg#arrow-down"></use></svg>
                                                </Col>
                                            </Row>
                                        </CardHeader>
                                        <Collapse isOpen={collapseCard === index}>
                                            <CardBody>
                                                <div className="job-location">
                                                    <div className="d-flex justify-content-between">
                                                          <h4>
                                                            <svg className="icon" width="17" height="20"><use xlinkHref={`${sprite}#location`} /></svg>
                                                        Location</h4>
                                                        <CardText tag="a" href="#" className="edit">Edit</CardText>
                                                    </div>
                                                    <img src="public/images/img_map-small.png" alt="map" width="100%" height="auto" />
                                                </div>
                                                <CardRole/>
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
                                        </Collapse>
                                    </CardResult>
                                )
                            })}
                        </div>
                    </ResultList>
                    <ResultList>
                        <h2>Booked</h2>
                        <div className="d-flex justify-content-between">
                            {cardsBooked.map((index) => {
                                return(
                                    <CardResult key={index} className={this.state.collapseCard ===index ? 'active card__box': 'card__box'}>
                                        <CardHeader onClick={() => this.toggle(index)}  data-event={index}>
                                            <Row>
                                                <Col>
                                                    <CardJob/>
                                                        <svg className="icon" width="14" height="18"><use xlinkHref="public/images/sprite.svg#arrow-down"></use></svg>
                                                </Col>
                                            </Row>
                                        </CardHeader>
                                        <Collapse isOpen={collapseCard === index}>
                                            <CardBody>
                                                <div className="job-location">
                                                    <div className="d-flex justify-content-between">
                                                          <h4>
                                                            <svg className="icon" width="17" height="20"><use xlinkHref={`${sprite}#location`} /></svg>
                                                        Location</h4>
                                                        <CardText tag="a" href="#" className="edit">Edit</CardText>
                                                    </div>
                                                    <img src="public/images/img_map.svg" alt="map" width="100%" height="auto" />
                                                </div>
                                                <CardRole/>
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
                                        </Collapse>
                                    </CardResult>
                                )
                            })}
                        </div>
                    </ResultList>
                    <ResultList>
                        <h2>Live</h2>
                        <div className="d-flex justify-content-between">
                            {cardsLive.map((index) => {
                                return(
                                    <CardResult key={index} className={this.state.collapseCard ===index ? 'active card__box': 'card__box'}>
                                        <CardHeader onClick={() => this.toggle(index)}  data-event={index}>
                                            <Row>
                                                <Col>
                                                    <CardJob/>
                                                        <svg className="icon" width="14" height="18"><use xlinkHref="public/images/sprite.svg#arrow-down"></use></svg>
                                                </Col>
                                            </Row>
                                        </CardHeader>
                                        <Collapse isOpen={collapseCard === index}>
                                            <CardBody>
                                                <div className="job-location">
                                                    <div className="d-flex justify-content-between">
                                                          <h4>
                                                            <svg className="icon" width="17" height="20"><use xlinkHref={`${sprite}#location`} /></svg>
                                                        Location</h4>
                                                        <CardText tag="a" href="#" className="edit">Edit</CardText>
                                                    </div>
                                                    <img src="public/images/img_map-small.png" alt="map" width="100%" height="auto" />
                                                </div>
                                                <CardRole/>
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
                                        </Collapse>
                                    </CardResult>
                                )
                            })}
                        </div>
                    </ResultList>
                    <ResultList>
                        <h2>Completed</h2>
                        <div className="d-flex justify-content-between">
                            {cardsCompleted.map((index) => {
                                return(
                                    <CardResult key={index} className={this.state.collapseCard ===index ? 'active card__box': 'card__box'}>
                                        <CardHeader onClick={() => this.toggle(index)}  data-event={index}>
                                            <Row>
                                                <Col>
                                                    <CardJob/>
                                                        <svg className="icon" width="14" height="18"><use xlinkHref="public/images/sprite.svg#arrow-down"></use></svg>
                                                </Col>
                                            </Row>
                                        </CardHeader>
                                        <Collapse isOpen={collapseCard === index}>
                                            <CardBody>
                                                <div className="job-location">
                                                    <div className="d-flex justify-content-between">
                                                          <h4>
                                                            <svg className="icon" width="17" height="20"><use xlinkHref={`${sprite}#location`} /></svg>
                                                        Location</h4>
                                                        <CardText tag="a" href="#" className="edit">Edit</CardText>
                                                    </div>
                                                    <img src="public/images/img_map-small.png" alt="map" width="100%" height="auto" />
                                                </div>
                                                <CardRole/>
                                            </CardBody>
                                        </Collapse>
                                    </CardResult>
                                )
                            })}
                        </div>
                    </ResultList>
                    <ResultList>
                        <h2>Cancelled</h2>
                        <div className="d-flex justify-content-between">
                            {cardsCancelled.map((index) => {
                                return(
                                    <CardResult key={index} className={this.state.collapseCard ===index ? 'active card__box': 'card__box'}>
                                        <CardHeader onClick={() => this.toggle(index)}  data-event={index}>
                                            <Row>
                                                <Col>
                                                    <CardJob/>
                                                        <svg className="icon" width="14" height="18"><use xlinkHref="public/images/sprite.svg#arrow-down"></use></svg>
                                                </Col>
                                            </Row>
                                        </CardHeader>
                                        <Collapse isOpen={collapseCard === index}>
                                            <CardBody>
                                                <div className="job-location">
                                                    <div className="d-flex justify-content-between">
                                                          <h4>
                                                            <svg className="icon" width="17" height="20"><use xlinkHref={`${sprite}#location`} /></svg>
                                                        Location</h4>
                                                        <CardText tag="a" href="#" className="edit">Edit</CardText>
                                                    </div>
                                                    <img src="public/images/img_map-small.png" alt="map" width="100%" height="auto" />
                                                </div>
                                                <CardRole/>
                                                
                                            </CardBody>
                                        </Collapse>
                                    </CardResult>
                                )
                            })}
                        </div>
                    </ResultList>             
                </section>
                </div>
            </JobsWrapper>
        )
    }
}

export default JobsList;

const JobsWrapper = styled.div`
    .section__calendar div[class|="col"] > .card {
        height: 100%;
        margin-bottom: 0;
    }

`

const SearchBar = styled.div`
    margin-bottom: 2.5rem;
`

const SearchResultBar = styled.div`
    border-bottom: 1px solid var(--color-brand);
    padding-bottom: 0.3rem;
    margin-bottom: 3.875rem;
    p {
        margin-bottom: 0;
    }  
`

const SortBy = styled.div`
    > span {
        margin-right: 0.5rem;
        white-space: nowrap;
    }
    .react-select {
        min-width: 100px;
        width: auto;
        .select__control {
            background-color: transparent;
            min-height: initial;
            &:hover {
                border-color: transparent;
            }
            &--is-focused {
                    border-color: transparent !important;
                    box-shadow: none!important;
            }
        }
        .select__indicator svg {
            fill: var(--color-brand);
        }

    }
    .select__value-container,.select__indicator {
        padding: 0;
    }
    .select__single-value {
        font-weight: 700;
    }
`

const CardResult = styled.div`
    background-color: var(--color-base);
    border-radius: 10px;
    .card-header {
        position: relative;
        .col {
            > div {
                width: 100%;
            }
            > svg {
                position: absolute;
                right: 20px;
                transform: rotate(-180deg);
                top: 28px;
            }
        }
    }
    h4 svg {
        margin-right: 8px;
    }
    &.active {
        .card-header .col > svg {
            transform: rotate(0deg);
        }
        .col .card {
            padding-bottom: 0;
            > .card-body {
                display: none;
            }
        }
        .collapse {
            .card-body {
                padding-bottom: 3.125rem;
            }
        }
    }
    .user-role:after {
        display: none;
    }
`

const ResultList = styled.div`
    margin-bottom: 3rem;
    h2 {
        font-size: 1.125rem;
        margin-bottom: 1rem;
    }
    > div > div {
        align-self: flex-start;
        padding: 0 1.25rem;
        width: 30%;
        .card {
            padding-left: 0;
            padding-right: 0;
        }
    }
    .card-title .badge {
        display: none;
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