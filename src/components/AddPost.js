import React, { useState } from "react";

function AddPost() {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [posts, setPosts] = useState([]); // Maintain a list of posts
	const [editIndex, setEditIndex] = useState(-1); // Index of the post being edited

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleContentChange = (e) => {
		setContent(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (editIndex === -1) {
			// Create a new post object
			const newPost = {
				title: title,
				content: content,
			};

			// Add the new post to the list of posts
			setPosts([...posts, newPost]);
		} else {
			// Edit the existing post
			const updatedPosts = [...posts];
			updatedPosts[editIndex] = { title, content };
			setPosts(updatedPosts);
			setEditIndex(-1); // Reset editIndex to -1 after editing
		}

		// Clear the form fields
		setTitle("");
		setContent("");
	};

	const handleEdit = (index) => {
		// Set the title and content in the form for editing
		setTitle(posts[index].title);
		setContent(posts[index].content);
		setEditIndex(index);
	};

	const handleDelete = (index) => {
		// Remove the post at the specified index
		const updatedPosts = [...posts];
		updatedPosts.splice(index, 1);
		setPosts(updatedPosts);
	};

	return (
		<div className="container">
			<h2 className="mt-4">Add New Post</h2>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="postTitle" className="form-label">
						Title
					</label>
					<input
						type="text"
						className="form-control"
						id="postTitle"
						value={title}
						onChange={handleTitleChange}
						required
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="postContent" className="form-label">
						Content
					</label>
					<textarea
						className="form-control"
						id="postContent"
						rows="4"
						value={content}
						onChange={handleContentChange}
						required
					/>
				</div>
				<div className="mb-3">
					<button type="submit" className="btn btn-primary">
						{editIndex === -1 ? "Add Post" : "Save Edit"}
					</button>
					{editIndex !== -1 && (
						<button
							type="button"
							className="btn btn-primary"
							onClick={() => setEditIndex(-1)} // Cancel edit
							style={{ marginLeft: "10px" }} // Add spacing between Edit and Delete buttons
						>
							Cancel Edit
						</button>
					)}
				</div>
				<p>See Your Posts Here Below!</p> {/* "See Your Posts" message */}
			</form>

			{/* Display newly added posts */}
			<div className="mt-4">
				<h3>Newly Added Posts Here:</h3>
				<ul>
					{posts.map((post, index) => (
						<li key={index}>
							<strong>Title:</strong> {post.title}
							<br />
							<strong>Content:</strong> {post.content}
							<div>
								<button
									className="btn btn-primary"
									onClick={() => handleEdit(index)}
									style={{ marginRight: "10px" }} // Add spacing between Edit and Delete buttons
								>
									Edit
								</button>
								<button
									className="btn btn-primary"
									onClick={() => handleDelete(index)}>
									Delete
								</button>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default AddPost;
