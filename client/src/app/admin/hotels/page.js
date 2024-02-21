// import styles from "./newHotel.module.css";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
// import { useState } from "react";
// import { hotelInputs } from "../../formSource";
// import useFetch from "../../hooks/useFetch";
// import axios from "axios";
// const NewHotel = () => {
//   const [files, setFiles] = useState("");
//   const [info, setInfo] = useState({});
//   const [rooms, setRooms] = useState([]);

//   const { data, loading, error } = useFetch("/rooms");

//   const handleChange = (e) => {
//     setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
//   };

//   const handleSelect = (e) => {
//     const value = Array.from(
//       e.target.selectedOptions,
//       (option) => option.value
//     );
//     setRooms(value);
//   };

//   console.log(files);

//   const handleClick = async (e) => {
//     e.preventDefault();
//     try {
//       const list = await Promise.all(
//         Object.values(files).map(async (file) => {
//           const data = new FormData();
//           data.append("file", file);
//           data.append("upload_preset", "upload");
//           const uploadRes = await axios.post(
//             "https://api.cloudinary.com/v1_1/lamadev/image/upload",
//             data
//           );

//           const { url } = uploadRes.data;
//           return url;
//         })
//       );

//       const newhotel = {
//         ...info,
//         rooms,
//         photos: list,
//       };

//       await axios.post("/hotels", newhotel);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return React.createElement(
//     "div",
//     { className: "new" },
//     React.createElement(Sidebar, null),
//     React.createElement(
//       "div",
//       { className: "newContainer" },
//       React.createElement(Navbar, null),
//       React.createElement(
//         "div",
//         { className: "top" },
//         React.createElement("h1", null, "Add New Product")
//       ),
//       React.createElement(
//         "div",
//         { className: "bottom" },
//         React.createElement(
//           "div",
//           { className: "left" },
//           React.createElement("img", {
//             src: files
//               ? URL.createObjectURL(files[0])
//               : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
//             alt: "",
//           })
//         ),
//         React.createElement(
//           "div",
//           { className: "right" },
//           React.createElement(
//             "form",
//             null,
//             React.createElement(
//               "div",
//               { className: "formInput" },
//               React.createElement(
//                 "label",
//                 { htmlFor: "file" },
//                 "Image: ",
//                 React.createElement(DriveFolderUploadOutlinedIcon, {
//                   className: "icon",
//                 })
//               ),
//               React.createElement("input", {
//                 type: "file",
//                 id: "file",
//                 multiple: true,
//                 onChange: (e) => setFiles(e.target.files),
//                 style: { display: "none" },
//               })
//             ),
//             hotelInputs.map((input) =>
//               React.createElement(
//                 "div",
//                 { className: "formInput", key: input.id },
//                 React.createElement("label", null, input.label),
//                 React.createElement("input", {
//                   id: input.id,
//                   onChange: handleChange,
//                   type: input.type,
//                   placeholder: input.placeholder,
//                 })
//               )
//             ),
//             React.createElement(
//               "div",
//               { className: "formInput" },
//               React.createElement("label", null, "Featured"),
//               React.createElement(
//                 "select",
//                 { id: "featured", onChange: handleChange },
//                 React.createElement("option", { value: false }, "No"),
//                 React.createElement("option", { value: true }, "Yes")
//               )
//             ),
//             React.createElement(
//               "div",
//               { className: "selectRooms" },
//               React.createElement("label", null, "Rooms"),
//               React.createElement(
//                 "select",
//                 { id: "rooms", multiple: true, onChange: handleSelect },
//                 loading
//                   ? "loading"
//                   : data &&
//                       data.map((room) =>
//                         React.createElement(
//                           "option",
//                           { key: room._id, value: room._id },
//                           room.title
//                         )
//                       )
//               )
//             ),
//             React.createElement("button", { onClick: handleClick }, "Send")
//           )
//         )
//       )
//     )
//   );
// };

// module.exports = NewHotel;
'use client'
import React, { useState } from "react";
import styles from "./newHotel.module.css"; // Import CSS module
import axios from "axios";
import useFetch from "../hooks/useFetch";
const NewHotel = () => {
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  const [rooms, setRooms] = useState([]);

  const { data, loading, error } = useFetch("/rooms");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSelect = (e) => {
    const value = Array.from(e.target.selectedOptions, (option) => option.value);
    setRooms(value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/lamadev/image/upload",
            data
          );

          const { url } = uploadRes.data;
          return url;
        })
      );

      const newhotel = {
        ...info,
        rooms,
        photos: list,
      };

      await axios.post("/hotels", newhotel);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.new}>
      {/* <Sidebar /> */}
      <div className={styles.newContainer}>
        {/* <Navbar /> */}
        <div className={styles.top}>
          <h1>Add New Product</h1>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <img
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className={styles.right}>
            <form>
              {/* Your form inputs */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHotel;
