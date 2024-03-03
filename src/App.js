import React, { useState } from "react";
import "./App.css";

function App() {
  // Define state variables
  const [sortBy, setSortBy] = useState("courseFees"); // Default sorting option
  const [data, setData] = useState([
    {
      id: 1,
      collegeName:
        "IIT Madras - Indian Institute of Technology - [IITM], Chennai",
      location: "Chennai, Tamil Nadu | AICTE Approved",
      course: "B.Tech Computer Science Engineering",
      courseFees: "₹ 2,09,550",
      avgPackage: "₹ 21,48,000",
      highestPackage: "₹ 1,98,00,000",
      userReviews: "8.5 / 10",
      ranking: "#3th/131 in India",
      logoSrc:
        "https://images.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=43&w=43&mode=stretch",
    },
    {
      id: 2,
      collegeName:
        "IIT Delhi - Indian Institute of Technology [IITD], New Delhi",
      location: "New Delhi, Delhi | AICTE Approved",
      course: "B.Tech Computer Science Engineering",
      courseFees: "₹ 55,300",
      avgPackage: "₹ 25,82,000",
      highestPackage: "₹ 2,00,00,000",
      userReviews: "8.7 / 10",
      ranking: "#1th/35 in India",
      logoSrc:
        "https://images.collegedunia.com/public/college_data/images/logos/col27802.gif?h=43&w=43&mode=stretch",
    },
    {
      id: 3,
      collegeName:
        "IIT Bombay - Indian Institute of Technology - [IITB], Mumbai",
      location: "Mumbai, Maharashtra | AICTE Approved",
      course: "B.Tech Computer Science Engineering",
      courseFees: "₹ 2,29,300",
      avgPackage: "₹ 21,82,000",
      highestPackage: "₹ 3,67,00,000",
      userReviews: "8.8 / 10",
      ranking: "#2th/131 in India",
      logoSrc:
        "https://images.collegedunia.com/public/college_data/images/logos/1431953162ccgsygdygw.jpg?h=43&w=43&mode=stretch",
    },
    {
      id: 4,
      collegeName:
        "IIT Kharagpur - Indian Institute of Technology - [IITKGP], Kharagpur",
      location: "Kharagpur, West Bengal | AICTE Approved",
      course: "B.Tech Computer Science Engineering",
      courseFees: "₹ 27,650",
      avgPackage: "₹ 45,40,000",
      highestPackage: "₹ 2,60,00,000",
      userReviews: "8.7 / 10",
      ranking: "#4th/35 in India",
      logoSrc:
        "https://images.collegedunia.com/public/college_data/images/logos/1489041138e2.jpg?h=43&w=43&mode=stretch",
    },
    {
      id: 5,
      collegeName: "IIT Kanpur - Indian Institute of Technology, Kanpur",
      location: "Kanpur, Uttar Pradesh | AICTE Approved",
      course: "B.Tech Computer Science Engineering",
      courseFees: "₹ 2,29,200",
      avgPackage: "₹ 26,62,000",
      highestPackage: "₹ 1,90,00,000",
      userReviews: "8.5 / 10",
      ranking: "#3th/35 in India",
      logoSrc:
        "https://images.collegedunia.com/public/college_data/images/logos/1408554560logo.png?h=43&w=43&mode=stretch",
    },
    {
      id: 6,
      collegeName: "IIT Roorkee - Indian Institute of Technology, Roorkee",
      location: "Roorkee, Uttarakhand | AICTE Approved",
      course: "B.Tech Computer Science Engineering",
      courseFees: "₹ 2,30,100",
      avgPackage: "₹ 18,34,000",
      highestPackage: "₹ 27,94,000",
      userReviews: "8.7 / 10",
      ranking: "#5th/35 in India",
      logoSrc:
        "https://images.collegedunia.com/public/college_data/images/logos/1431775682rajiv.jpg?h=43&w=43&mode=stretch",
    },
    {
      id: 7,
      collegeName: "BITS Pilani (Pilani Campus), Pilani",
      location: "Pilani, Rajasthan | AICTE Approved",
      course: "B.Tech Computer Science Engineering",
      courseFees: "₹ 5,71,575",
      avgPackage: "₹ 30,37,000",
      highestPackage: "₹ 60,75,000",
      userReviews: "8.8 / 10",
      ranking: "#1th/246 in India",
      logoSrc:
        "https://images.collegedunia.com/public/college_data/images/logos/1589790676112018648848892482726766654702028085722509n.jpg?h=43&w=43&mode=stretch",
    },
    {
      id: 8,
      collegeName:
        "IIT Guwahati - Indian Institute of Technology - [IITG], Guwahati",
      location: "Guwahati, Assam | AICTE Approved",
      course: "B.Tech Computer Science Engineering",
      courseFees: "₹ 67,350",
      avgPackage: "₹ 21,06,000",
      highestPackage: "₹ 31,48,000",
      userReviews: "8.1 / 10",
      ranking: "#6th/35 in India",
      logoSrc:
        "https://images.collegedunia.com/public/college_data/images/logos/1394864902Indian%20Institute%20of%20Technology%20-%20IIT%20Guwahati.png?h=43&w=43&mode=stretch",
    },
    {
      id: 9,
      collegeName:
        "IIT Hyderabad - Indian Institute of Technology - [IITH], Hyderabad",
      location: "Hyderabad, Telangana | AICTE Approved",
      course: "B.Tech Computer Science Engineering",
      courseFees: "₹ 53,550",
      avgPackage: "₹ 20,07,000",
      highestPackage: "₹ 63,78,000",
      userReviews: "8.5 / 10",
      ranking: "#8th/200 in India",
      logoSrc:
        "https://images.collegedunia.com/public/college_data/images/logos/166089612015088476701200pxIndianInstituteofTechnologyHyderabadlogo.png?h=43&w=43&mode=stretch",
    },
    {
      id: 10,
      collegeName: "College of Engineering, Anna University - [CEG], Chennai",
      location: "Chennai, Tamil Nadu | AICTE Approved",
      course: "B.Tech Computer Science Engineering",
      courseFees: "₹ 47,200",
      avgPackage: "₹ 6,93,000",
      highestPackage: "₹ 35,50,000",
      userReviews: "8.4 / 10",
      ranking: "#12th/131 in India",
      logoSrc:
        "https://images.collegedunia.com/public/college_data/images/logos/13941065084.png?h=43&w=43&mode=stretch",
    },
  ]);

  // Sorting function for Course Fees
  const sortByCourseFees = () => {
    const sortedData = [...data].sort((a, b) => {
      // Convert courseFees strings to numbers for comparison
      const courseFeesA = parseInt(a.courseFees.replace(/[^\d]/g, ""));
      const courseFeesB = parseInt(b.courseFees.replace(/[^\d]/g, ""));
      return courseFeesA - courseFeesB;
    });
    setData(sortedData);
  };

  // Sorting function for User Reviews
  const sortByUserReviews = () => {
    const sortedData = [...data].sort((a, b) => {
      // Extract the numeric part of userReviews for comparison
      const userReviewsA = parseFloat(a.userReviews);
      const userReviewsB = parseFloat(b.userReviews);
      return userReviewsA - userReviewsB;
    });
    setData(sortedData);
  };

  // Sorting function for Ranking
  const sortByRanking = () => {
    const sortedData = [...data].sort((a, b) => {
      // Extract the numeric part of ranking for comparison
      const rankingA = parseInt(a.ranking.split("#")[1]);
      const rankingB = parseInt(b.ranking.split("#")[1]);
      return rankingA - rankingB;
    });
    setData(sortedData);
  };

  // Sorting function for CD Rank
  const sortByCDRank = () => {
    const sortedData = [...data].sort((a, b) => a.id - b.id);
    setData(sortedData);
  };

  // Function to handle sorting based on user selection
  const handleSortByChange = (event) => {
    const value = event.target.value;
    setSortBy(value); // Update sorting option

    // Trigger sorting function based on selected option
    switch (value) {
      case "courseFees":
        sortByCourseFees();
        break;
      case "userReviews":
        sortByUserReviews();
        break;
      case "ranking":
        sortByRanking();
        break;
      case "cdRank":
        sortByCDRank();
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <div className="sorting-options" style={{ float: "left" }}>
        <span style={{ marginRight: "5px" }}>
          <strong>Sort By</strong>
        </span>
        <input
          style={{ marginRight: "5px" }}
          type="radio"
          name="sortByOption"
          id="cdRank"
          value="cdRank"
          checked={sortBy === "cdRank"}
          onChange={handleSortByChange}
        />
        <label style={{ marginRight: "10px" }} htmlFor="cdRank">
          CD Rank
        </label>
        <input
          style={{ marginRight: "5px" }}
          type="radio"
          name="sortByOption"
          id="courseFees"
          value="courseFees"
          checked={sortBy === "courseFees"}
          onChange={handleSortByChange}
        />
        <label style={{ marginRight: "10px" }} htmlFor="courseFees">
          Course Fees
        </label>
        <input
          style={{ marginRight: "5px" }}
          type="radio"
          name="sortByOption"
          id="userReviews"
          value="userReviews"
          checked={sortBy === "userReviews"}
          onChange={handleSortByChange}
        />
        <label style={{ marginRight: "10px" }} htmlFor="userReviews">
          User Reviews
        </label>
        <input
          style={{ marginRight: "5px" }}
          type="radio"
          name="sortByOption"
          id="ranking"
          value="ranking"
          checked={sortBy === "ranking"}
          onChange={handleSortByChange}
        />
        <label style={{ marginRight: "10px" }} htmlFor="ranking">
          Ranking
        </label>
      </div>

      <div className="container mt-4 content">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th style={{ background: "#88bdc4", color: "#fff" }}>CD Rank</th>
              <th style={{ background: "#88bdc4", color: "#fff" }}>Colleges</th>
              <th style={{ background: "#88bdc4", color: "#fff" }}>
                Course Fees
              </th>
              <th style={{ background: "#88bdc4", color: "#fff" }}>
                Placement
              </th>
              <th style={{ background: "#88bdc4", color: "#fff" }}>
                User Reviews
              </th>
              <th style={{ background: "#88bdc4", color: "#fff" }}>Ranking</th>
            </tr>
          </thead>
          <tbody>
            {data.map((college) => (
              <tr key={college.id}>
                <td>#{college.id}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={college.logoSrc}
                      alt=""
                      style={{
                        width: "43px",
                        height: "43px",
                        marginRight: "10px",
                      }}
                    />
                    <div>
                      <strong>{college.collegeName}</strong>
                    </div>
                  </div>
                  <p style={{ marginLeft: "50px", marginBottom: 0 }}>
                    {college.location}
                  </p>
                  <p style={{ marginLeft: "50px", marginBottom: 0 }}>
                    {college.course}
                  </p>
                  <p style={{ marginLeft: "50px", marginBottom: 0 }}>
                    JEE-Advanced 2023 Cutoff : {college.jeeCutoff}
                  </p>
                </td>
                <td>
                  <p style={{ marginBottom: 0 }}>
                    <strong>{college.courseFees}</strong>
                  </p>
                  <p>{college.feesDescription}</p>
                </td>
                <td>
                  <p style={{ marginBottom: 0 }}>
                    <strong>{college.avgPackage}</strong>
                  </p>
                  <p>Average Package</p>
                  <p style={{ marginBottom: 0 }}>
                    <strong>{college.highestPackage}</strong>
                  </p>
                  <p>Highest Package</p>
                </td>
                <td>
                  <p style={{ marginBottom: 0 }}>
                    <strong>{college.userReviews}</strong>
                  </p>
                  <p>Based on {college.numReviews} User Reviews</p>
                </td>
                <td>
                  <p style={{ marginBottom: 0 }}>
                    <strong>{college.ranking}</strong>
                  </p>
                  <p>{college.rankingSource}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
