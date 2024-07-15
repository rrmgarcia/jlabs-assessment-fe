// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getGeoInfo,
  getHistory,
  deleteHistories,
} from "../services/geoService";
import styles from "../styles/home.module.css"

const Home = () => {
  const [ip, setIp] = useState("");
  const { token } = useSelector((state) => state.auth);
  const { geoInfo, history } = useSelector((state) => state.geo);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchHistory = async () => {
      const data = await getHistory(token);
      dispatch({ type: "SET_HISTORY", payload: data });
    };

    fetchHistory();
  }, [token, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await getGeoInfo(ip, token);
      dispatch({ type: "SET_GEO_INFO", payload: data.geoInfo });
      dispatch({ type: "SET_HISTORY", payload: [...history, data.history] });
    } catch (error) {
      console.error("Invalid IP address", error);
    }
  };

  const handleDelete = async () => {
    const ids = history.filter((h) => h.selected).map((h) => h.id);
    await deleteHistories(ids, token);
    dispatch({
      type: "SET_HISTORY",
      payload: history.filter((h) => !h.selected),
    });
  };

  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.labelcontainer}>
          <label>IP Address:</label>
          <input
            type="text"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
          />
          <button type="submit">Get Geo Info</button>
        </div>
        
      </form>
      {geoInfo && (
        <div >
          <h2>Geo Information</h2>
          <p>{JSON.stringify(geoInfo)}</p>
        </div>
      )}
      <div>
        <h2>History</h2>
        <button onClick={handleDelete}>Delete Selected</button>
        <ul>
          {history.map((h, index) => (
            <li key={index}>
              <input
                type="checkbox"
                onChange={() => (h.selected = !h.selected)}
              />
              {h.ipAddress}
              <button
                onClick={() =>
                  dispatch({ type: "SET_GEO_INFO", payload: h.geoInfo })
                }
              >
                View
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
