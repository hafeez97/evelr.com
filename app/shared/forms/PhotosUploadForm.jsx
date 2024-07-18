'use client';
import React, {useState} from 'react';
import {CreateMediaAction} from "@/app/shared/actions/mediaAction";

const PhotosUploadForm = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleImageUpload = async (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles(files);

        const formData = new FormData();
        files.forEach((file) => {
            formData.append('media', file);
        });
        formData.append('type', 'image');
        console.log(formData)

        await CreateMediaAction(formData).then((response) => {
            console.log(response.response);
        })
    };

    return (
        <section className="upload-images">
            <div className="container">
                <h1 className="new-listing-heading primary-hd">
                    Add some photos of your place
                </h1>
                <div className="col-12">
                    <div className="images-box">
                        <img src="/assets/images/image-placeholder.png" alt=""/>
                        <p>Upload at least 5 photos</p>
                        <div className="col-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-end">
                            <label className="custom-file-upload upload-btn">
                                <input type="file" accept="image/*" multiple onChange={handleImageUpload}/>
                                Upload
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhotosUploadForm;
