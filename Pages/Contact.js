import React from "react";
import facebookLogo from "../img/fb.jpg";
import instagramLogo from "../img/insta.jpg";
import youtubeLogo from "../img/You tube.jpg";
import twitterLogo from "../img/twiiter.jpg";
import './css/Contact.css';
import Not from "../Not";

function Contact() {
  return (
    <div>
      <Not />
      <h1>Contact</h1>
      <a href="https://www.facebook.com/PeriyarUniversityOfficial/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0" target="_blank">
        <img src={facebookLogo} alt="Facebook" className="logo" />
      </a>
      <a href="https://www.instagram.com/periyar_univesity_official/" target="_blank">
        <img src={instagramLogo} alt="Instagram" className="logo" />
      </a>
      <a href="https://www.youtube.com/channel/UCJqVMMa81Cnmu3LdLpsKXYw" target="_blank">
        <img src={youtubeLogo} alt="YouTube" className="logo" />
      </a>
      <a href="https://twitter.com/PeriyarVarsity" target="_blank">
        <img src={twitterLogo} alt="Twitter" className="logo" />
      </a>
      <h2>Enquiry Contacts</h2>
      <table>
        <thead>
            <tr>
                <th className="th">Purpose of contact</th>
                <th className="th">contact</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>General Enquiry</td>
                <td>0427-2345766,2346268,2346269</td>
            </tr>
            <tr>
                <td>Registrar Office</td>
                <td>0427 - 2345766</td>
            </tr>
            <tr>
                <td>O/o the Controller of Examinations</td>
                <td>0427 - 2345766 Ext : 233</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Contact;