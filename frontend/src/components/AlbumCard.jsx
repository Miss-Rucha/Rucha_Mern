import { Link } from "react-router-dom";
import "./AlbumCard.css";

const AlbumCard = ({ album, onDelete }) => {
  return (
    <div className="album-card">
      <img
        src={album.coverImage || "https://via.placeholder.com/300?text=No+Image"}
        alt={album.albumName}
        className="album-cover"
      />
      
      <div className="album-content">
        <h3 className="album-title">{album.albumName}</h3>
        
        <div className="album-info">
          <p><strong>Artist:</strong> {album.artist}</p>
          <p><strong>Genre:</strong> {album.genre}</p>
          <p><strong>Release Year:</strong> {album.releaseYear}</p>
        </div>
        
        <div className="button-group">
          <button 
            onClick={() => onDelete(album.id)} 
            className="btn-delete"
          >
            Delete
          </button>
          <Link 
            to={`/edit/${album.id}`} 
            className="btn-edit"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;