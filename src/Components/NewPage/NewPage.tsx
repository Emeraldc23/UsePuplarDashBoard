import NavBar from "../../widgets/NavBar/NavBar";
import SideBar from "../../widgets/SideBar/SideBar";
import "../NewPage/newpage.scss";
import profile from "../../assets/projectPic/dp.png";
import { useState } from "react";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

const NewPage = ({ newInputs, title }) => {
  const [pics, setPics] = useState(null);

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    setPics(URL.createObjectURL(file));
  }
  function handleSubmit(e) {
    e.preventDefault();
    // Handle form submission logic here
  }

  return (
    <div className="newUser">
      <div className="userContent">
        <div className="newUserDetails">
          <div className="newUserHeading">
            <h2>{title}</h2>
          </div>
          <div className="newUserInfo">
            <div className="newUserImageContainer">
              {pics && <img src={pics} alt="" className="newUserImg" />}
              {!pics && <img src={profile} alt="" className="newUserImg" />}
            </div>

            <form action="" className="userForm" onSubmit={() => handleSubmit}>
              <div className="middle">
                <div className="top formInput">
                  <label htmlFor="file">
                    Image: <FileUploadOutlinedIcon className="icon" />
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    id="file"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                </div>
                {newInputs.map((input) => (
                  <div key={input.id} className="formInput">
                    <label htmlFor={input.id}>{input.label}</label>
                    <input
                      type={input.type}
                      placeholder={input.placeholder}
                      id={input.id}
                    />
                  </div>
                ))}
                <div className="btnContainer">
                  <button className="btn addUserButton">Create</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPage;
