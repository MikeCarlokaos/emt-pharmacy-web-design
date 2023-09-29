import React from "react";

const Footer = () => {
  return (
    <section className="w-screen bg-primary/20 pt-5">
      <div className="w-full flex px-16 pb-5 justify-between capitalize">
        <div>
          <h3 className="font-semibold text-lg pb-2">about</h3>
          <ul>
            <li>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:font-semibold hover:underline"
              >
                home
              </a>
            </li>
            <li>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:font-semibold hover:underline"
              >
                term & conditions
              </a>
            </li>
            <li>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:font-semibold hover:underline"
              >
                about us
              </a>
            </li>
            <li>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:font-semibold hover:underline"
              >
                news
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg pb-2">categories</h3>
          <ul>
            <li>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:font-semibold hover:underline"
              >
                dispensing consumables
              </a>
            </li>
            <li>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:font-semibold hover:underline"
              >
                general sundries
              </a>
            </li>
            <li>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:font-semibold hover:underline"
              >
                health & beauty
              </a>
            </li>
            <li>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:font-semibold hover:underline"
              >
                NPA record keeping items
              </a>
            </li>
            <li>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:font-semibold hover:underline"
              >
                OTC medecinesP & GSL
              </a>
            </li>
            <li>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:font-semibold hover:underline"
              >
                PillBook MDS trays
              </a>
            </li>
            <li>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:font-semibold hover:underline"
              >
                self diagnostic
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg pb-2">EMT Pharmacy</h3>
          <p>
            Boulevard Industrial Park, Padge Road, Beeston, Nottingham NG9 2JR
          </p>
          <ul>
            <li>
              <span>Tel.</span>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:font-semibold hover:underline"
              >
                0115 849 7700
              </a>
            </li>
            <li>
              <span>Email:</span>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:font-semibold hover:underline"
              >
                customer.service@emthealthcare.co.uk
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-black/80 text-white py-2 text-center">
        Copyright © 2023 EMT Healthcare. All rights reserved.
      </div>
    </section>
  );
};

export default Footer;
