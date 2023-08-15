import React, { useState, useEffect } from "react";
import { isEmpty, size, orderBy } from "lodash";
import Image from "next/image";
import StarIcon from "../../assets/images/star.jpg";
import { config } from "../../config/site.config";
import LandingPageWrapper from "./styles";

export default function LandingPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchParam] = useState(["name", "model"]);

  useEffect(() => {
    setIsLoaded(false);
    // Fetch starship list with the help of base url
    fetch(config.getStarshipList)
      .then((res) => res.json())
      .then(
        (response) => {
          setIsLoaded(true);
          setItems(orderBy(response?.results, ["crew"], ["asc", "desc"]));
        },
        (error) => {
          setIsLoaded(true);
          console.log(error);
        }
      );
  }, []);

  // Search content based on name and model
  const search = (items) => {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem]
            .toString()
            .toLowerCase()
            .indexOf(searchText.toLowerCase()) > -1
        );
      });
    });
  };

  // Display Starships statistics
  const displayStatistics = () => {
    return (
      !isEmpty(items) &&
      search(items).map((item, index) => {
        const { name, model, films } = item;
        return (
          <div className="card-container" key={index}>
            <div className="card-body">
              <div className="row-container">
                <div className="col-container">
                  <div className="meta-container">
                    <div className="meta-avatar">
                      <Image
                        alt="star-icon"
                        className="image-content"
                        src={StarIcon}
                      />
                    </div>
                    <div className="meta-detail">
                      <div className="meta-title">{name}</div>
                      <div className="meta-description">
                        {`Model: ${model}`}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-container">{`Number of films: ${size(
                  films
                )}`}</div>
              </div>
            </div>
          </div>
        );
      })
    );
  };

  // Styled Wrapper to handle styles for content
  return (
    <LandingPageWrapper>
      {!isLoaded ? (
        <div className="loader">Loading Content...</div>
      ) : (
        <>
          <h1 className="page-heading">STAR WARS DEMO PAGE</h1>
          <div className="search-wrapper">
            <label htmlFor="search-form" style={{ width: "100%" }}>
              <input
                type="search"
                name="search-form"
                id="search-form"
                className="search-input"
                placeholder="Search by Name, Model"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </label>
          </div>
          {displayStatistics()}
        </>
      )}
    </LandingPageWrapper>
  );
}
