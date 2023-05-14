import "./Styles/Addptnt.css";
import React, { useContext, useEffect, useState } from "react";
import Tile from "./Tile";
import Button from "./Button";
import Context from "../Context/Context";

function Addptnt()
 {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [data, setData] = useState([]);
  const [token, setToken] = useState(100);
  const [ptntData, setptntData] = useState([]);
  const [selectedTileIndex, setSelectedTileIndex] = useState(0);
  const get=useContext(Context)

  const getTokens = async () => {
    try {
      const response = await fetch("http://localhost:5000/tokens");
      const jsonData = await response.json();
      //console.log(jsonData);
      setptntData(jsonData);
      setToken(jsonData.length + 100);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getTokens();
  }, [data]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleAddData = async (e) => 
  {
    const newToken = `T-${token + 1}`;
    //console.log(newToken);

    setToken(token + 1);

    try {
      const body = { name, phoneNumber, token_type: newToken };
      const response = await fetch("http://localhost:5000/tokens", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    
    } catch (error) {
      console.log(error.message);
    }
    const newData = [...data, { name, phoneNumber, token_type: newToken }];
    setData(newData);
    setName("");
    setPhoneNumber("");
  };

  const handleNextToken = () => {
    get.setStatus(selectedTileIndex + 3)
    console.log("called")
    setSelectedTileIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() =>
  {
    setSelectedTileIndex(0);
  }, [data]);

  return (
    <div>
      <h1>Token Dashboard for Doctor's clinic</h1>

      <div className="main">
        <div className="mainHead">
          <div className="tableHead">Sl No.</div>
          <div className="tableHead">Name</div>
          <div className="tableHead">Phone</div>
          <div className="tableHead">Token</div>
        </div>
        <div>
          {ptntData.map((ptnt, index) => {
            return (
              <Tile
                key={index}
                no={index + 1}
                name={ptnt.name}
                phone={ptnt.phonenumber}
                token={ptnt.token_type}
                selected={index === selectedTileIndex}
                
              />
            );
          })}
        </div>
      </div>
      <Button name={"NEXT TOKEN"} onClick={handleNextToken} />

      <div className="formsData">
        <div className="fieldHead">Add Patient</div>
        <div className="inpField">
          <input
            type="text"
            value={name}
            className="inputStyle"
            onChange={handleNameChange}
            placeholder="Name"
          />
          <input
            type="text"
            className="inputStyle"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Phone Number"
          />
        </div>

        <div className="secButton">
          <Button onClick={handleAddData} name={"GENERATE TOKEN"} />
        </div>
      </div>
    </div>
  );
}

export default Addptnt;




