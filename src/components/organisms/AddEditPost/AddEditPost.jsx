import { useNavigate } from '@tanstack/react-location';
import { useState } from 'react';
import useForm from '../../../lib/useForm';
import { usePosts } from '../../../lib/usePosts';
import styles from './addpost.module.css';

export const AddEditPost = ({ post }) => {
  const [posts, setPosts] = usePosts();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { id } = post;
  const isAdd = !id;
  const { inputs, handleChange, clearForm, resetForm } = useForm(
    id
      ? post
      : {
          image: '',
          title: 'Post title',
          body: 'Here the post body',
          id: '',
        }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Submit the inputfields:
    if (isAdd) {
      setPosts([...posts, { ...inputs }]);
    } else {
      const postIndex = posts.findIndex((p) => p.id === id);
      posts[postIndex] = inputs;
      setPosts([...posts]);
    }

    clearForm();
    // Go to the blog page
    navigate({ to: `/blog` });
    setLoading(false);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="title">
          Name
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            value={inputs.title}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="image">
          Image
          <input
            type="text"
            id="image"
            name="image"
            placeholder="image url"
            value={inputs.image}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="body">
          Post body
          <textarea
            id="body"
            name="body"
            placeholder="Blog body"
            value={inputs.body}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <button type="submit">{post && id ? 'Edit Post' : '+ Add post'}</button>
      </fieldset>
    </form>
  );
};
