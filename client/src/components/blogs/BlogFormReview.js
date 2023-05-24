// BlogFormReview shows users their form inputs for review
import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

class BlogFormReview extends Component {
  // !!!!!!!!!!!!!!!!
  state = { file: null };

  renderFields() {
    const { formValues } = this.props;

    return _.map(formFields, ({ name, label }) => {
      return (
        <div key={name}>
          <label>{label}</label>
          <div>{formValues[name]}</div>
        </div>
      );
    });
  }

  renderButtons() {
    const { onCancel } = this.props;

    return (
      <div>
        <button
          className="yellow darken-3 white-text btn-flat"
          onClick={onCancel}
        >
          Back
        </button>
        <button className="green btn-flat right white-text">
          Save Blog
          <i className="material-icons right">email</i>
        </button>
      </div>
    );
  }

  onSubmit(event) {
    event.preventDefault();

    const { submitBlog, history, formValues } = this.props;

    // !!!!!!!!!!
    submitBlog(formValues, this.state.file, history);
  }

  // !!!!!!!!!!!!!!!
  onFileChange(event) {
    // The reason why event.target.files is used instead of event.target.file in this code is because the input element of type file allows users to select multiple files at once. Therefore, the files property of the event.target object returns a FileList, which is a list of the selected files.
    this.setState({ file: event.target.files[0] });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <h5>Please confirm your entries</h5>
        {this.renderFields()}
        {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
        <h5>Add An Image</h5>
        <input
          onChange={this.onFileChange.bind(this)}
          type="file"
          // The image/* MIME type pattern is a wildcard that matches any image file type. This means that users will only be able to select files with image extensions such as JPEG, PNG, GIF, etc., and any other file types will be filtered out and not selectable.
          //In the provided code, the restriction to upload only one image at once is not enforced by the code itself. The limitation on the number of files that can be uploaded is determined by the multiple attribute of the <input> element of type file.

          accept="image/*"
        />

        {this.renderButtons()}
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { formValues: state.form.blogForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(BlogFormReview));
