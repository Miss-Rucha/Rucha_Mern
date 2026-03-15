import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddAlbum = () => {

  const [album, setAlbum] = useState({
    albumName: "",
    artist: "",
    releaseYear: "",
    genre: "",
    coverImage:""
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5001/albums", album)
      .then(() => {
        alert("Album Added Successfully");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">
        <div className="col-md-6">

          <div className="card shadow">

            <div className="card-body">

              <h4 className="text-center mb-4">Add New Album</h4>

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
                    required
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
                    required
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
                      setAlbum({ ...album,genre: e.target.value })
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
                      setAlbum({ ...album,coverImage: e.target.value })
                    }
                  />
                </div>

                <button type="submit" className="btn btn-success w-100">
                  Add Album
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default AddAlbum;