import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AlbumCard from "../components/AlbumCard";
import "./Home.css";

const Home = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAlbums = async () => {
    try {
      const resp = await axios.get("http://localhost:5001/albums");
      setAlbums(resp.data);
      setLoading(false);
    } catch (err) {
      setError("Data get error");
      setLoading(false);
    }
  };

  const deleteAlbum = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:5001/albums/${id}`);
        setAlbums((prevAlbums) => prevAlbums.filter((album) => album.id !== id));
      } catch (err) {
        console.error("Delete error:", err);
      }
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  if (loading) return <div className="loading">Loading Albums..</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="home-container">
      <h4 className="card-title">Music Album Manager</h4>

      <div className="add-btn container">
        <Link to="/add" className="add-btn">
          Add New Album
        </Link>
      </div>

      <div className="albums-grid">
        {albums.length === 0 ? (
          <p className="n0-albums">No albums yet..Add your First album</p>
        ) : (
          albums.map((album) => (
            <div key={album.id} className="album-card">
              <img
                src={album.coverImage || "https://via.placeholder.com/300?text=No+Image"}
                alt={album.albumName}
                className="album-cover"
              />
              <h3>{album.albumName}</h3>
              <p><strong>Artist:</strong> {album.artist}</p>
              <p><strong>Genre:</strong> {album.genre}</p>
              <p><strong>Release Year:</strong> {album.releaseYear}</p>

              <div className="button-group">
                <button onClick={() => deleteAlbum(album.id)} className="btn-delete">
                  Delete
                </button>
                <Link to={`/edit/${album.id}`} className="btn-edit">
                  Edit
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;