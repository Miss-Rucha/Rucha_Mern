import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";

const EditAlbum = () => {

  const { id } = useParams();

  const [album, setAlbum] = useState({
    albumName: "",
    artist: "",
    releaseYear: "",
    genre: "",
    coverImage:""
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5001/albums/${id}`)
      .then((res) => setAlbum(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:5001/albums/${id}`, album)
      .then(() => {
        alert("Album Updated Successfully 🎵");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-4">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow">

            <div className="card-body">

              <h4 className="text-center mb-4">Edit Album</h4>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label">Album Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={album.albumName}
                    onChange={(e) =>
                      setAlbum({ ...album, albumName: e.target.value })
                    }
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Artist</label>
                  <input
                    type="text"
                    className="form-control"
                    value={album.artist}
                    onChange={(e) =>
                      setAlbum({ ...album, artist: e.target.value })
                    }
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Release Year</label>
                  <input
                    type="number"
                    className="form-control"
                    value={album.releaseYear}
                    onChange={(e) =>
                      setAlbum({ ...album, releaseYear: e.target.value })
                    }
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Genre</label>
                  <input
                    type="text"
                    className="form-control"
                    value={album.genre}
                    onChange={(e) =>
                      setAlbum({ ...album, genre: e.target.value })
                    }
                  />
                </div>

                  <div className="mb-3">
                  <label className="form-label">CoverImage</label>
                  <input
                    type="text"
                    className="form-control"
                    value={album.coverImage}
                    onChange={(e) =>
                      setAlbum({ ...album, coverImage: e.target.value })
                    }
                  />
                </div>

                <button className="btn btn-primary me-2" type="submit">
                  Update Album
                </button>

                <NavLink className="btn btn-secondary" to="/">
                  Back
                </NavLink>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default EditAlbum;