import React from "react";
import "./news.css";
import underline from "./underline.png";
import news1 from "./news-1.jpg";
import news2 from "./news-2.jpg";
import news3 from "./news-3.jpg";

export default function News() {
  return (
    <div className="news">
      <div class="container text-center">
        <h2 className="pt-5">
          LATEST NEWS <span className="upcoming">ARTICLES</span>
        </h2>
        <img src={underline} alt="underline" className="mb-5" />
        <div>
          <div class="row">
            <div class="col">
              <div class="parent">
                <img src={news1} alt="Notebook" />
                <div class="text">
                  <h4>LOREM IPUSM</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="parent">
                <img src={news2} alt="Notebook" />
                <div class="text">
                  <h4>LOREM IPUSM</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="parent">
                <img src={news3} alt="Notebook" />
                <div class="text">
                  <h4>LOREM IPUSM</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
