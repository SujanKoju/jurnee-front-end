import React, { Component } from "react";
import styled from "styled-components";
import {CardText} from "reactstrap";

class CardCandidate extends Component {
    render() {
        const sprite = 'public/images/sprite.svg';
        return (
            <Candidate>
                    <h4>Candidate</h4>
                    <CandidateInfoWrapper className="card__box">
                        <div className="d-flex justify-content-between">
                            <img src="public/images/img_user.svg" alt="" width="77" height="77" />
                            <div className="candidate-info">
                                <CardText tag="strong">Samuel H</CardText>
                                <CardText tag="span">Dentistry Nurse</CardText>
                                <CardText tag="span"><CardText tag="strong">Experience: </CardText>12 years</CardText>
                                <CardText tag="span"><CardText tag="strong">Jobs:</CardText> 50</CardText>
                            </div>
                                <svg className="icon" width="17" height="20"><use xlinkHref={`${sprite}#star`} /></svg>
                            <Rating>5 times</Rating>
                        </div>
                        <div className="d-flex justify-content-flex-end">
                            <button className="btn btn--primary">Hire</button>
                            <button className="btn btn--ghost">Reject</button>
                        </div>
                    </CandidateInfoWrapper>
            </Candidate>
        )
    }
}

export default CardCandidate;

const Candidate = styled.div`
    .candidate-info {
        margin-left: 1.1rem;
        > * {
        display: block;
        font-size: 0.875rem;
        font-weight: 500;
        }
        strong {
            font-weight: 700;
        }
    }
`

const CandidateInfoWrapper = styled.div`
`

const Rating = styled.div`
    font-size: 0.875rem;
`