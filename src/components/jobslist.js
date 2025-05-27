import React, { useState } from "react";
import Job from "./job";
import { FormattedMessage } from "react-intl";

const JobsList = ({ language }) => {
  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
      views: "100250",
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
      views: "245230",
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
      views: "1287250",
    },
  ]);

  const isSpanish = language.startsWith("es");

  return (
    <div>
      <table className="table">
        <thead
          style={{
            backgroundColor: isSpanish ? "#f8f9fa" : "#343a40",
            color: isSpanish ? "#000" : "#fff",
          }}
        >
          <tr>
            <th scope="col">#</th>
            <th scope="col"><FormattedMessage id="Position" /></th>
            <th scope="col"><FormattedMessage id="Company" /></th>
            <th scope="col"><FormattedMessage id="Salary" /></th>
            <th scope="col"><FormattedMessage id="City" /></th>
            <th scope="col"><FormattedMessage id="PublicationDate" /></th>
            <th scope="col"><FormattedMessage id="Views" /></th>
          </tr>
        </thead>
        <tbody>
          {offers.map((e, i) => (
            <Job key={i} offer={e} language={language} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;
