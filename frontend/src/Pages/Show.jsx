import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const ShowAlbum = () => {

  const { id } = useParams();
  const [album, setAlbum] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5001/albums/${id}`)
      .then((res) => setAlbum(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this album?");
    if (!confirmDelete) return;

    axios.delete(`http://localhost:5001/albums/${id}`)
      .then(() => {
        alert("Album deleted successfully");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-4">

      <div className="row justify-content-center">
        <div className="col-md-6">

          <div className="card shadow">

            {album.coverImage && (
              <img
                src={album.coverImage}
                className="card-img-top"
                alt={album.albumName}
              />
            )}

            <div className="card-body">
              <h4 className="card-title">{album.albumName}</h4>
              <p><strong>Artist:</strong> {album.artist}</p>
              <p><strong>Genre:</strong> {album.genre}</p>
              <p><strong>Release Year:</strong> {album.releaseYear}</p>

              <div className="d-flex flex-wrap mt-3">
                <NavLink
                  to={`/edit/${id}`}
                  className="btn btn-warning me-2 mb-2"
                >
                  Edit Album
                </NavLink>

                <button
                  type="button"
                  className="btn btn-danger me-2 mb-2"
                  onClick={handleDelete}
                >
                  Delete Album
                </button>

                <NavLink
                  to="/"
                  className="btn btn-secondary mb-2"
                >
                  Back
                </NavLink>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default ShowAlbum;