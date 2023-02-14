import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { Button } from "./styles/Button.styled";
import { getImages } from '../api/index';

class CloudinaryUploadWidget extends Component {
  fetchData = async () => {
    const responseJson = await getImages();
    this.props.setImageList(responseJson.resources)
  }

  componentDidMount() {
    const cloudName = 'dixyumigk';
    const uploadPreset = 'x2lb912t';

    const uploadWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        context: {starred: false}
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          this.fetchData();
        }
      }
    );
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        uploadWidget.open();
      },
      false
    );
  }

  render() {
    return (
      <div className="wrapper">
        <div className="file-upload">
          <Button id="upload_widget"><FontAwesomeIcon className="icon" icon={faUpload} />Upload</Button>
        </div>
      </div>
    );
  }
}

export default CloudinaryUploadWidget;
