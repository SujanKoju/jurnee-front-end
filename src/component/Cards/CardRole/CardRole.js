import React, { Component } from "react";
import styled from "styled-components";
import {CardText, Badge} from "reactstrap";

class CardRole extends Component {
    render() {
        const sprite= "public/images/sprite.svg";
        return(
            <CardRoleWrapper>
                  <h4>
                        <svg className="icon" width="17" height="20"><use xlinkHref={`${sprite}#user`} /></svg>
                      Roles</h4>
                    <CardRoleList className="d-flex justify-content-between card-role-list"> 
                        <CardText tag="span">
                            <strong>Receptionist</strong>
                            <span>£10/Hour</span>
                        </CardText>
                        <Badge color="secondary" pill>Candidate Found</Badge>
                    </CardRoleList>
                    <CardRoleList className="d-flex justify-content-between card-role-list"> 
                        <CardText tag="span">
                            <strong>Receptionist</strong>
                            <span>£10/Hour</span>
                        </CardText>
                        <Badge color="secondary" pill>Candidate Found</Badge>
                    </CardRoleList>
                    <CardRoleList className="d-flex justify-content-between card-role-list"> 
                        <CardText tag="span">
                            <strong>Receptionist</strong>
                            <span>£10/Hour</span>
                        </CardText>
                        <Badge color="secondary" pill>Candidate Found</Badge>
                    </CardRoleList>
                    <CardRoleList className="d-flex justify-content-between card-role-list"> 
                        <CardText tag="span">
                            <strong>Receptionist</strong>
                            <span>£10/Hour</span>
                        </CardText>
                        <Badge color="secondary" pill>Candidate Found</Badge>
                    </CardRoleList>
                    <ShowallWorkers className="d-flex justify-content-center">
                        <CardText tag="a" href="#">Show all workers</CardText>
                    </ShowallWorkers>
            </CardRoleWrapper>
        )
    }
}

export default CardRole;

const CardRoleWrapper = styled.div`

`
const CardRoleList = styled.div`
    background-color: #F9F8FB;
    border-radius: 10px;
    margin-bottom: 0.875rem;
    padding: 1rem 1.5rem;
    .card-text {
        color: rgba(var(--color-brand),0.7);
        font-size: 0.875rem;
        font-weight: 500;
        strong {
            color: rgba(var(--color-brand),0.9);
            display: block;
            margin-right: 8px;
        }
    }
    .badge {
        font-size: 0.75rem;
        font-weight: 600;
    }
`

const ShowallWorkers = styled.div`
    border-bottom: 1px solid rgba(215,206,224,0.45);
    padding: 1rem 0 1.75rem;
    margin-bottom: 1.75rem;
    a {
        color: var(--color-brand);
        font-size: 0.875rem;
        font-weight: 600;
    }
`