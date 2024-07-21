import { GiMailbox, GiMayanPyramid, GiPhone } from "react-icons/gi";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.close;
  },
});

const Aside = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={"/images/stanly.png"} alt="Richard hanrick" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Stanly Sukmajaya">
            Stanly Sukmajaya
          </h1>

          <p className="title">Full Stack developer</p>
        </div>

        {/* <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>

          <GiClawSlashes />
        </button> */}
      </div>

      <div className="">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <GiMailbox />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a
                onClick={() => {
                  navigator.clipboard.writeText("stanlyskwok@gmail.com");
                  Toast.fire({
                    icon: "success",
                    title: "Successfully copied to clipboard!",
                  });
                }}
                className="contact-link"
              >
                stanlyskwok@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiPhone />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone (WhatsApp)</p>

              <a
                onClick={() => {
                  navigator.clipboard.writeText("+6281357202812");
                  Toast.fire({
                    icon: "success",
                    title: "Successfully copied to clipboard!",
                  });
                }}
                className="contact-link"
              >
                +62 813 5720-2812
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiMayanPyramid />
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Jakarta, Indonesia</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
