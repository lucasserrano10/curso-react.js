import { Link } from "react-router-dom";
import styles from "./PostDetail.module.css";

const PostDetail = ({ post }) => {
  // Verifica se o caminho da imagem existe, caso contrário, usa uma imagem padrão
  const imageUrl = post.image || '/path/to/default-image.jpg';  // Substitua pelo caminho de uma imagem padrão

  const tags = post.tagsArray || [];  // Default to an empty array if undefined

  return (
    <div className={styles.post_detail}>
      <img src={post.image} alt={post.title} onError={(e) => e.target.src = '/path/to/default-image.jpg'} />
      <h2>{post.title}</h2>
      <p className={styles.createdby}>por: {post.createdBy}</p>
      <div className={styles.tags}>
        {tags.length > 0 ? (
          tags.map((tag) => (
            <p key={tag}>
              <span>#</span>
              {tag}
            </p>
          ))
        ) : (
          <p>No tags available</p>
        )}
      </div>
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        Ler
      </Link>
    </div>
  );
};

export default PostDetail;
