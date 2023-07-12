import React from "react";

// css
import CCss from "./Css/Contact.module.css";

// Components
import Socials from "./Socials";

// Data
import ContactData from "./../../Data/Contact.json";

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
                      <a href={value.tel} className={CCss.contactDivPTag}>
                        {value.phoneNumber}
                      </a>
                    </div>
                    {/* email */}
                    <div className={CCss.contactMapDivChild}>
                      <img src={mail} alt="" className={CCss.contactIcon} />{" "}
                      <a href={value.mailto} className={CCss.contactDivPTag}>
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
        </div>
        {/* <img src={Map} alt="" className={CCss.MapImg} /> */}
        <iframe
          width="520"
          height="400"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          id="gmap_canvas"
          className={CCss.MapImg}
          src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=St.%20No.%20-%2070,%20Qt.%20No.%20-%202A%20Mihijam+(Rishav)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      <Socials />
      <div className={CCss.mDivBottom}>
        <div className={CCss.line}></div>
        <p className={CCss.lastLine}>Made with 💖 by Rishav Singh</p>
      </div>
    </div>
  );
}
