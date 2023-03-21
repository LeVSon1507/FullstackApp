import { faArrowPointer, faHandPointer, faHandPointLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./dropDownBox.css";
function DropDownBox({ destination, setDestination }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    setDestination("DaNang");
    setOpen(false);
  };

  const handleMenuTwo = () => {
    setDestination("SaiGon");
    setOpen(false);
  };
  const handleMenuThree = () => {
    setDestination("HaNoi");
    setOpen(false);
  };
  const Dropdown = ({ open, trigger, menu }) => {
    return (
      <div className="dropdown">
        {trigger}
        {open ? (
          <ul className="menu">
            {menu.map((menuItem, index) => (
              <div key={index} className="menu-item">
                {menuItem}
              </div>
            ))}
          </ul>
        ) : null}
      </div>
    );
  };
  return (
    <>
      <Dropdown
        open={open}
        trigger={
          <button onClick={handleOpen} className="btnLCT">
            {destination ? destination : `Let's choose an amazing location!`}
          </button>
        }
        menu={[
          <button onClick={handleMenuOne} className="btnlct-child">
            Đà Nẵng <FontAwesomeIcon icon={faHandPointLeft} className='iconHandPointer' />
          </button>,
          <button onClick={handleMenuTwo} className="btnlct-child">
            Sài Gòn <FontAwesomeIcon icon={faHandPointLeft} className='iconHandPointer' />
          </button>,
          <button onClick={handleMenuThree} className="btnlct-child">
            Hà Nội <FontAwesomeIcon icon={faHandPointLeft} className='iconHandPointer' />
          </button>,
        ]}
      />
    </>
  );
}

export default DropDownBox;
