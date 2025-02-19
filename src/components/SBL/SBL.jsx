import React, { useState, useEffect } from "react";
import axios from "axios";
import Hero from "../Hero/Hero";
import "./SBL.css"; // Import your CSS file

function parseCSV(csvText) {
    const rows = csvText.split(/\r?\n/);
    const headers = rows[0].split(",");
    const data = [];
    for (let i = 1; i < rows.length; i++) {
        const rowData = rows[i].split(",");
        const rowObject = {};
        for (let j = 0; j < headers.length; j++) {
            rowObject[headers[j]] = rowData[j];
        }
        data.push(rowObject);
    }
    return data;
}

const SBL = () => {
    const [data, setData] = useState([]);
    const [csvData, setCsvData] = useState([]);

    const fetchCSVData = () => {
        const csvUrl = process.env.REACT_APP_SBL_CSVURL;
        axios
            .get(csvUrl)
            .then((response) => {
                const parsedCsvData = parseCSV(response.data);
                setCsvData(parsedCsvData);
                console.log(parsedCsvData);
            })
            .catch((error) => {
                console.error("Error fetching CSV data:", error);
            });
    };

    useEffect(() => {
        fetchCSVData();
    }, []);

    return (
        <>
            <Hero title="SBL" />
            <div className="sbl-container">
                <div className="sbl-info">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil recusandae ad iure voluptas nobis nisi
                        veniam vitae laudantium ea? Voluptatum amet architecto
                        aliquam, culpa quisquam illum totam quae aperiam
                        deserunt, nam inventore vero debitis molestiae? Ratione
                        qui iusto ipsam at. Dolorum reiciendis architecto
                        cupiditate at iste id, enim quibusdam aliquam tenetur,
                        dolore rerum nobis praesentium, nostrum quia! Aliquid
                        culpa quidem facilis praesentium nihil perferendis modi
                        quas natus veritatis expedita repudiandae fugit tenetur
                        deserunt ipsam, optio, distinctio dolore nisi minus
                        error saepe eius quasi libero doloremque? Architecto
                        tempora illo dignissimos nemo nihil sint dolorum quas
                        maxime rerum fugiat. Enim, necessitatibus eligendi?
                    </p>
                </div>
                <div className="sbl-table-container">
                    <table className="sbl-table">
                        <thead className="sbl-table-head">
                            <tr>
                                <th>Position</th>
                                <th>Team</th>
                                <th>Played</th>
                                <th>Wins</th>
                                <th>Draws</th>
                                <th>Losses</th>
                                <th>GF</th>
                                <th>GA</th>
                                <th>GD</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody className="sbl-table-body">
                            {csvData.map((item, idx) => (
                                <tr key={idx} className="sbl-table-row">
                                    <td>{idx + 1}</td>
                                    <td>{item.Team}</td>
                                    <td>{item.Matches}</td>
                                    <td>{item.Wins}</td>
                                    <td>{item.Draws}</td>
                                    <td>{item.Losses}</td>
                                    <td>{item.GF}</td>
                                    <td>{item.GA}</td>
                                    <td>{item.GD}</td>
                                    <td>{item.Points}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default SBL;
