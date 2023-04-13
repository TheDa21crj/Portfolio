import React from "react";
import CCss from "./Css/Contact.module.css";
import ContactData from "./../../Data/Contact.json";
import Socials from "./Socials";

// icons
import Map from "./../../assets/Mapsicle Map.png";
import user from "./../../assets/user.png";
import phoneCall from "./../../assets/phone-call.png";
import mail from "./../../assets/mail.png";

export default function Contact() {
  return (
    <div className={CCss.mDiv}>
      <div className={CCss.mConDiv}>
        <div>
          <p className={CCss.ContactMe}>Contact Me</p>
          {ContactData ? (
            <div className={CCss.mapParent}>
              {ContactData.map((value, key) => {
                return (
                  <div key={key}>
                    {/* name */}
                    <div className={CCss.contactMapDivChild}>
                      <img src={user} alt="" className={CCss.contactIcon} />
                      <p className={CCss.contactDivPTag}>{value.name}</p>
                    </div>
                    {/* phoneNumber */}
                    <div className={CCss.contactMapDivChild}>
                      <img
                        src={phoneCall}
                        alt=""
                        className={CCss.contactIcon}
                      />
                      <a
                        href="tel:+919939197376"
                        className={CCss.contactDivPTag}
                      >
                        {value.phoneNumber}
                      </a>
                    </div>
                    {/* email */}
                    <div className={CCss.contactMapDivChild}>
                      <img src={mail} alt="" className={CCss.contactIcon} />{" "}
                      <a
                        href="mailto:rishavrajcrj@gmail.com"
                        className={CCss.contactDivPTag}
                      >
                        {value.email}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className={CCss.TeaxtareaTag}
            placeholder="Type your message...."
          ></textarea>
          <button className={CCss.Send}>Send</button>
        </div>
        <img src={Map} alt="" className={CCss.MapImg} />
      </div>
      <Socials />
      <div className={CCss.mDivBottom}>
        <div className={CCss.line}></div>
        <p className={CCss.lastLine}>Made with 💖 by Ayan Paul</p>
      </div>
    </div>
  );
}
