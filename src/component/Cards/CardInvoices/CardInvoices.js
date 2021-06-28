import React, { Component } from "react";
import {Card, CardBody, CardText} from "reactstrap";
import styled from "styled-components";

class CardInvoices extends Component {
    render() {
        return (
            <Card className="card__invoices">
                <CardInvoiceList className="d-flex justify-content-between"> 
                    <CardText tag="span">Invoice # <strong>0001</strong> 
                        <span className="bullet bullet-primary"></span>
                    </CardText>
                    <CardText tag="span">Due Date : <strong>20/01/2020</strong></CardText>
                </CardInvoiceList>
                    <CardInvoiceList className="d-flex justify-content-between"> 
                    <CardText tag="span">Invoice # <strong>0002</strong> 
                        <span className="bullet bullet-primary"></span>
                    </CardText>
                    <CardText tag="span">Due Date : <strong>20/01/2020</strong></CardText>
                </CardInvoiceList>
                    <CardInvoiceList className="d-flex justify-content-between"> 
                    <CardText tag="span">Invoice # <strong>0003</strong> 
                        <span className="bullet bullet-primary"></span>
                    </CardText>
                    <CardText tag="span">Due Date : <strong>20/01/2020</strong></CardText>
                </CardInvoiceList>
                    <CardInvoiceList className="d-flex justify-content-between"> 
                    <CardText tag="span">Invoice # <strong>0004</strong> 
                        <span className="bullet bullet-primary"></span>
                    </CardText>
                    <CardText tag="span">Due Date : <strong>20/01/2020</strong></CardText>
                </CardInvoiceList>
            </Card>
        )
    }
}

export default CardInvoices;

const CardInvoiceList = styled.div`
    background-color: #F9F8FB;
    border-radius: 10px;
    margin-bottom: 1.875rem;
    padding: 1.35rem 3rem;
    .card-text {
        color: rgba(var(--color-brand),0.7);
        strong {
            color: rgba(var(--color-brand),0.9);
            font-weight: 500;
            margin-right: 8px;
        }
    }
`