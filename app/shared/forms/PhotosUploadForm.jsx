'use client';
import React, {useEffect, useState} from 'react';
import {CreateMediaAction} from "@/app/shared/actions/mediaAction";
import CONST from "@/app/shared/utils/Constants";
import useFormStore from "@/app/shared/stores/useFormStore";

const PhotosUploadForm = () => {
    const [loading, setLoading] = useState(false);
    const {setFormData, formData} = useFormStore();

    const handleImageUpload = async (e) => {
        setLoading(true);
        const files = Array.from(e.target.files);
        let newUploadedMedia = [];

        for (const file of files) {
            const formDataData = new FormData();
            formDataData.append('media', file);
            formDataData.append('type', 'image');

            try {
                const response = await CreateMediaAction(formDataData);
                newUploadedMedia.push(response.data.media);
            } catch (error) {
                console.error(`Error uploading ${file.name}:`, error);
            }
        }

        setFormData({'media': [...formData.media, ...newUploadedMedia]});
        setLoading(false);
    };

    useEffect(() => {
        console.log(formData)
    }, [formData]);
    return (
        <section className="upload-images">
            <div className="container">
                <h1 className="new-listing-heading primary-hd">
                    Add some photos of your place
                </h1>
                <div className="col-12">
                    <div className="images-box">
                        {formData.media && formData.media.length > 0 ? (
                            <div className="uploaded-images flex-row">
                                {formData.media.map((media, index) => (
                                    <img
                                        className="m-3"
                                        height={150}
                                        width={150}
                                        key={index}
                                        src={`${CONST.MEDIA_URL}${media}`}
                                        alt=""
                                    />
                                ))}
                            </div>
                        ) : (
                            <img src="/assets/images/image-placeholder.png" alt=""/>
                        )}
                        <p>Upload at least 5 photos</p>
                        <div className="col-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-end">
                            <label className="custom-file-upload upload-btn">
                                <input type="file" accept="image/*" multiple onChange={handleImageUpload}/>
                                {loading ? 'Uploading...' : 'Upload'}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhotosUploadForm;
