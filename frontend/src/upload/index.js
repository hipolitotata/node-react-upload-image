import React, { useState } from 'react';
import Dropzone from 'react-dropzone'

import {
    Upload,
    DivUpload,
    DivImage,
    ItemImage,
    InfoImage,
    NameImage,
    SizeImage
} from './styles'

export default function UploadPage() {

    const [files, setFiles] = useState([]);
    const [urls, setUrls] = useState([]);

    function changeImage(newFiles) {
        console.log(newFiles)

        let auxUrls = [...urls];
        let auxFiles = [...files];

        newFiles.forEach(file => {
            auxUrls.push(URL.createObjectURL(file));
            auxFiles.push(file);
        });

        setUrls([...auxUrls]);
        setFiles([...auxFiles]);
    };

    return (
        <Upload>
            <DivImage>

                {
                    urls.map((url, key) => (
                        <ItemImage>
                            <img className="img" src={url} />
                            <InfoImage>
                                <NameImage>{files[key] && files[key].name || ''}</NameImage>
                                <SizeImage>{files[key] && files[key].size / 1000} MB</SizeImage>
                            </InfoImage>
                        </ItemImage>
                    ))
                }
            </DivImage>

            <Dropzone onDrop={acceptedFiles => changeImage(acceptedFiles)}>
                {({ getRootProps, getInputProps, isDragActive, isDragReject }) => {
                    return (
                        <DivUpload
                            isDragActive={isDragActive}
                            isDragReject={isDragReject}
                            {...getRootProps()}>
                            <input
                                onChange={(e) => changeImage(e.target)}
                                {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </DivUpload>
                    )
                }}
            </Dropzone>

        </Upload>
    );
}