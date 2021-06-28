import React from "react";
import {
  Badge,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown
} from "reactstrap"

const sprite = "public/images/sprite.svg";
const NotificationDropdown = () => {
  return (
    <UncontrolledDropdown tag="li" className="dropdown-notification nav-item mr-25">
      <DropdownToggle tag="a" href="/" onClick={e => e.preventDefault()}>
        <svg className="icon" width="20" height="20"><use xlinkHref={`${sprite}#bell`} /></svg>
        <Badge pill color="secondary" className="badge-notification">1</Badge>
      </DropdownToggle>
      <DropdownMenu tag="ul" right className="dropdown-menu-media mt-0">
        <li className="dropdown-menu-header">
          <DropdownItem tag="div" header>
            <h4 className="notification-title">Jobs</h4>
            <div className="d-flex justify-content-between notification-list">
                <strong>Random Job Name 1</strong>
                <Badge pill color="secondary">New Position Filled</Badge>
            </div>
            <div className="d-flex justify-content-between notification-list">
                <strong>Random Job Name</strong>
                <Badge pill color="secondary">New Position Filled</Badge>
            </div>
            <h4 className="notification-title">Invoices</h4>
           <div className="d-flex justify-content-between notification-list">
            <strong>Random Name 1</strong>
            <Badge pill color="secondary">Invoice Payment Pending</Badge>
            </div>
          </DropdownItem>
        </li>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default NotificationDropdown;
