import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import Presscard from "../../../components/presscard/Presscard";
import Footer from "../../../components/footer/Footer";
import "./singlefunding.scss";

export default function SingleFunding() {
  return (
    <div className="main-container">
      <Navbar />
      <div className="align-cont">
        <div className="container">
          <div className="details">
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              earum.
            </h1>
            <hr />
            <span className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              beatae aliquam omnis quibusdam rem eaque, inventore tenetur
              obcaecati earum minima.
            </span>

            <img
              src="https://cdn.pixabay.com/photo/2022/11/19/09/35/forest-7601671_960_720.jpg"
              alt=""
            />
            <div className="fund-article">
              <h2>Lorem ipsum dolor sit amet.</h2>
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam ex blanditiis quia ab ullam quam veritatis reprehenderit
                cupiditate fuga aliquid doloribus error nisi repellendus, sed,
                tempore totam eum sapiente suscipit asperiores culpa quae
                temporibus non hic! Corporis fugiat accusamus neque facere harum
                dignissimos officia sint delectus recusandae. Adipisci
                explicabo, in sit neque libero quibusdam ratione sapiente iusto
                aperiam mollitia! Vel reprehenderit, ad itaque similique numquam
                adipisci tempora assumenda facere quod fuga neque possimus.
                Minus at, quia corrupti autem totam architecto magni obcaecati
                nesciunt repellat quis quaerat molestias cupiditate vel facere
                eaque illo magnam omnis sequi dolores error ut vitae? Iste?
              </span>
              <h2>Lorem ipsum dolor sit amet.</h2>
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam ex blanditiis quia ab ullam quam veritatis reprehenderit
                cupiditate fuga aliquid doloribus error nisi repellendus, sed,
                tempore totam eum sapiente suscipit asperiores culpa quae
                temporibus non hic! Corporis fugiat accusamus neque facere harum
                dignissimos officia sint delectus recusandae. Adipisci
                explicabo, in sit neque libero quibusdam ratione sapiente iusto
                aperiam mollitia! Vel reprehenderit, ad itaque similique numquam
                adipisci tempora assumenda facere quod fuga neque possimus.
                Minus at, quia corrupti autem totam architecto magni obcaecati
                nesciunt repellat quis quaerat molestias cupiditate vel facere
                eaque illo magnam omnis sequi dolores error ut vitae? Iste?
              </span>
              <h2>Lorem ipsum dolor sit amet.</h2>
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam ex blanditiis quia ab ullam quam veritatis reprehenderit
                cupiditate fuga aliquid doloribus error nisi repellendus, sed,
                tempore totam eum sapiente suscipit asperiores culpa quae
                temporibus non hic! Corporis fugiat accusamus neque facere harum
                dignissimos officia sint delectus recusandae. Adipisci
                explicabo, in sit neque libero quibusdam ratione sapiente iusto
                aperiam mollitia! Vel reprehenderit, ad itaque similique numquam
                adipisci tempora assumenda facere quod fuga neque possimus.
                Minus at, quia corrupti autem totam architecto magni obcaecati
                nesciunt repellat quis quaerat molestias cupiditate vel facere
                eaque illo magnam omnis sequi dolores error ut vitae? Iste?
              </span>
              <h2>Lorem ipsum dolor sit amet.</h2>
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam ex blanditiis quia ab ullam quam veritatis reprehenderit
                cupiditate fuga aliquid doloribus error nisi repellendus, sed,
                tempore totam eum sapiente suscipit asperiores culpa quae
                temporibus non hic! Corporis fugiat accusamus neque facere harum
                dignissimos officia sint delectus recusandae. Adipisci
                explicabo, in sit neque libero quibusdam ratione sapiente iusto
                aperiam mollitia! Vel reprehenderit, ad itaque similique numquam
                adipisci tempora assumenda facere quod fuga neque possimus.
                Minus at, quia corrupti autem totam architecto magni obcaecati
                nesciunt repellat quis quaerat molestias cupiditate vel facere
                eaque illo magnam omnis sequi dolores error ut vitae? Iste?
              </span>
            </div>
          </div>
          <div className="fund-data">
            <div className="progress">
              <p>
                Progress: <span>85%</span>
              </p>
              <input type="range" />
            </div>
            <hr />
            <div className="d-container">
              <p>Funds Raised</p>
              <span>2,023,233</span>
            </div>
            <hr />
            <div className="d-container">
              <p>Funds Goal</p>
              <span>5,000,000</span>
            </div>
            <hr />
            <div className="d-container">
              <p>Days Left</p>
              <span>15 Days</span>
            </div>
            <hr />
            <button>Invest Now</button>
            <div className="d-container">
              <p>Security Type</p>
              <span>Equity</span>
            </div>
            <hr />
            <div className="d-container">
              <p>Minimum Investment Amount</p>
              <span>$500</span>
            </div>
          </div>
        </div>
      </div>

      <div className="more-fund">
        <div className="card">
          <h1>Similar Funding</h1>
          <hr />
          <Presscard />
        </div>
        <button>View More</button>
      </div>
      <Footer />
    </div>
  );
}
