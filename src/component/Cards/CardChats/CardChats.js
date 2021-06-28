import React, { Component } from "react";
import {Card, CardBody, CardText} from "reactstrap";
import styled from "styled-components";

class CardChats extends Component {
    render() {
        const sprite = 'public/images/sprite.svg';
        return (
            <Card className="card__chats">
                <CardBody className="d-flex flex-wrap justify-content-between">
                    <CardChatList className="d-flex align-items-center card__box">
                        <img src="public/images/img_user.svg" alt="John Smith" width="74" height="74"/>
                        <ChatInfo>
                            <CardText tag="h4">Andy Smith
                            <span className="bullet bullet-primary"></span>
                            </CardText>
                            <CardText>How dare you give me 3 stars. I worked my arse off for you!</CardText>
                        </ChatInfo>
                        <svg className="icon" width="14" height="18"><use xlinkHref={`${sprite}#arrow-down`} /></svg>
                    </CardChatList>
                     <CardChatList className="d-flex align-items-center card__box">
                        <img src="public/images/img_user.svg" alt="John Smith" width="74" height="74"/>
                        <ChatInfo>
                            <CardText tag="h4">Andy Smith
                            <span className="bullet bullet-primary"></span>
                            </CardText>
                            <CardText>How dare you give me 3 stars. I worked my arse off for you!</CardText>
                        </ChatInfo>
                        <svg className="icon" width="14" height="18"><use xlinkHref={`${sprite}#arrow-down`} /></svg>
                    </CardChatList>
                     <CardChatList className="d-flex align-items-center card__box">
                        <img src="public/images/img_user.svg" alt="John Smith" width="74" height="74"/>
                        <ChatInfo>
                            <CardText tag="h4">Arthur K
                            <span className="bullet bullet-primary"></span>
                            </CardText>
                            <CardText>How dare you give me 3 stars. I worked</CardText>
                        </ChatInfo>
                        <svg className="icon" width="14" height="18"><use xlinkHref={`${sprite}#arrow-down`} /></svg>
                    </CardChatList>
                     <CardChatList className="d-flex align-items-center card__box">
                        <img src="public/images/img_user.svg" alt="John Smith" width="74" height="74"/>
                        <ChatInfo>
                            <CardText tag="h4">Arthur K
                            <span className="bullet bullet-primary"></span>
                            </CardText>
                            <CardText>How dare you give me 3 stars. I worked</CardText>
                        </ChatInfo>
                        <svg className="icon" width="14" height="18"><use xlinkHref={`${sprite}#arrow-down`} /></svg>
                    </CardChatList>
                     <CardChatList className="d-flex align-items-center card__box">
                        <img src="public/images/img_user.svg" alt="John Smith" width="74" height="74"/>
                        <ChatInfo>
                            <CardText tag="h4">Nicholas Newman
                            </CardText>
                            <CardText>How dare you give me 3 stars. I worked my arse off for you!</CardText>
                        </ChatInfo>
                        <svg className="icon" width="14" height="18"><use xlinkHref={`${sprite}#arrow-down`} /></svg>
                    </CardChatList>
                     <CardChatList className="d-flex align-items-center card__box">
                        <img src="public/images/img_user.svg" alt="John Smith" width="74" height="74"/>
                        <ChatInfo>
                            <CardText tag="h4">Nicholas Newman
                            </CardText>
                            <CardText>How dare you give me 3 stars. I worked my arse off for you!</CardText>
                        </ChatInfo>
                        <svg className="icon" width="14" height="18"><use xlinkHref={`${sprite}#arrow-down`} /></svg>
                    </CardChatList>
                </CardBody> 
            </Card>
        )
    }
}

export default CardChats;

const CardChatList = styled.div`
    width: 49%;
    > img {
        margin-right: 20px;  
        max-width: 100%;
    }
    > svg {
        transform: rotate(90deg);
    }
`

const ChatInfo = styled.div`
    width: 70%;
    h4 {
        font-weight: 700;
    }
    .bullet {
        margin-left: 6px;
    }
    p {
        font-size: 0.75rem;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: calc(100% - 20px);
    }
`