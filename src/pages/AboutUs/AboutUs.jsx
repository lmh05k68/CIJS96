/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";
import logo from "../../assets/logo.png";
import Home from "../Home/Home";
import { useState, useEffect } from "react";

const AboutUs = () => {
  const [bookName, setBookName] = useState("");
  const [borrowTime, setBorrowTime] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [borrowerName, setBorrowerName] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      bookName,
      borrowTime,
      address,
      phoneNumber,
      borrowerName,
    });
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="aboutUs">
        <Link to="/">
          <img src={logo} className="logo" alt="" />
        </Link>
        <h1>About Us ! </h1>
      </div>

      <div className="content">
        <h1>Best things just for you !</h1>
        <p>
          We provide comprehensive online resource for book enthusiasts,
          collectors, and bibliophiles. <br />
          Launched in 2024, the site provides a wealth of information, tools,
          and community features to help book lovers explore, acquire, and
          preserve their literary treasures.
          <br />
          The website offers the following key features:Book Database: A
          searchable database of over 1 million books, with detailed information
          on titles, authors, publishers, publication dates, editions, and more.
          <br /> Users can browse, research, and discover new books to add to
          their collections.
          <br />
          Collectors Forum: A vibrant community where book collectors can
          connect, share advice, swap recommendations, and discuss the latest
          trends and insights in the world of rare and collectible books
          <br />
          Appraisal and Valuation: Expert appraisers provide professional
          evaluations of books, helping collectors determine the value and
          condition of their holdings.
          <br />
          Marketplace: An integrated marketplace where users can buy, sell, and
          trade books with other collectors and dealers from around the world.
          <br />
          Preservation and Conservation: Detailed guides and resources on how to
          properly care for, store, and preserve rare and valuable books to
          ensure their longevity.News and Articles: <br />
          Regularly updated content covering the latest news, trends, and
          insights in the book collecting community, as well as expert tips and
          advice for both novice and seasoned collectors.
          <br />
          Whether youre an avid book collector, a casual reader, or simply
          someone with a deep appreciation for the written word, the Book
          Collectors Oasis is your one-stop-shop for exploring, acquiring, and
          preserving the literary treasures that capture your imagination.{" "}
          <br />
          Visit us at www.helloworld.com to start your journey into the
          fascinating world of book collecting.
        </p>
      </div>

      <div className="book-borrow-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="bookName">Book Name:</label>
            <input
              type="text"
              id="bookName"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="borrowTime">Borrow Time:</label>
            <input
              type="text"
              id="borrowTime"
              value={borrowTime}
              onChange={(e) => setBorrowTime(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="borrowerName">Borrower Name:</label>
            <input
              type="text"
              id="borrowerName"
              value={borrowerName}
              onChange={(e) => setBorrowerName(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>

        {showPopup && (
          <div className="popup-container">
            <div className="popup">
              <h3> everything is almost done ! </h3>
              <Link to="/">
                {" "}
                <button onClick={handleClosePopup}>Close</button>{" "}
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default AboutUs;
