import React from "react";

const ProjectFormComponent = (props) => {
  // const [selectedFile, setSelectedFile] = useState("");
  const { submitHandler, project, handleChange, imageChange } = props;
  return (
    <div className="form-flex">
      <div className="prject-form-container">
        <form
          className="project-form"
          onSubmit={submitHandler}
          encType="multipart/form-data"
        >
          <label>title</label>
          <div>
            <input
              className="input"
              type="text"
              name="title"
              value={project.title}
              placeholder="username"
              onChange={handleChange}
            />
          </div>
          <label>description</label>
          <div>
            <textarea
              className="text-box"
              type="textarea"
              name="description"
              value={project.description}
              placeholder="add a description"
              onChange={handleChange}
            />
          </div>
          <label>add image</label>
          <div>
            <input
              className="input"
              accept=".png, .jpg, .jpeg"
              type="file"
              name="image"
              onChange={imageChange}
            />
          </div>
          <div className="form-flex">
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectFormComponent;
