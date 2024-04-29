import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "./users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("")

  const users = useSelector(selectAllUsers)

  const onAuthorChange = (e) => {
    setUserId(e.target.value)
  }
  
  const onTitleChanged = (e) => {
    setTitle(e.target.value);
  };
  const onContentChanged = (e) => {
    setContent(e.target.value);
  };

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded(
          title,
          content,
          userId
        )
      );

      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const userOptions = users.map(user => (
    <option value={user.id} key={user.id}>
      {user.name}
    </option>
  ))


  return (
    <section>
      <h2>Add a new post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">
          <select name="postAuthor" id="postAuthor" value={userId} onChange={onAuthorChange}>
          {userOptions}
          </select>
        </label>
        <label htmlFor="postContent">Post Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked}
        disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
