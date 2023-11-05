import React, { useState } from "react";

import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { toast } from "react-toastify";

function Data_stored() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    if (form.name !== "" && form.email !== "") {
      setData([...data, form]);
      toast.success(" New Data Added Succesfully!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      setForm({ name: "", email: "" });
      setStatus(false);
    }
  };

  const deleteHandler = (index) => {
    const updated_data = data.filter((_, idx) => idx !== index);
    setData(updated_data);
    toast.success(`ID ${index + 1} - Data Deleted Succesfully!`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
    if (updated_data.length === 0) {
      setStatus(true);
    }
  };

  return (
    <>
      <div className="col-lg-12 py-5 ">
        <div className="row justify-content-center ">
          <div class="form-floating col-lg-3 mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingName"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <label for="floatingName" className="px-4">
              Full Name
            </label>
          </div>
          <div class="form-floating col-lg-3 mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingEmail"
              placeholder="name@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <label for="floatingEmail" className="px-4">
              Email address
            </label>
          </div>
          <div className="col-lg-1 py-1 text-center">
            <Button
              variant="contained"
              onClick={submitHandler}
              className="py-2"
            >
              <AddCircleIcon fontSize="large" />
            </Button>
          </div>
        </div>
      </div>

      <div className="col-lg-9 text-center">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">REMOVE</th>
            </tr>
          </thead>
          {status ? (
            <tbody>
              <tr>
                <td>
                  <p>No Data Stored Yet !</p>
                </td>
                <td>
                  <p>No Data Stored Yet !</p>
                </td>
                <td>
                  <p>No Data Stored Yet !</p>
                </td>
                <td>
                  <p>No Data Stored Yet !</p>
                </td>
              </tr>
            </tbody>
          ) : (
            data.map((element, index) => {
              const { name, email } = element;
              return (
                <tbody key={index}>
                  <tr>
                    <td scope="row">
                      <strong>{index + 1}</strong>
                    </td>
                    <td>
                      <strong>{name}</strong>
                    </td>
                    <td>
                      <strong>{email}</strong>
                    </td>
                    <td>
                      <DeleteForeverIcon
                        fontSize="large"
                        className="text-danger"
                        onClick={() => deleteHandler(index)}
                        style={{ cursor: "pointer" }}
                      />
                    </td>
                  </tr>
                </tbody>
              );
            })
          )}
        </table>
      </div>
    </>
  );
}

export default Data_stored;
