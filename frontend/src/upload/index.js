import React, { useState, useEffect } from 'react';
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

import api from '../services/api';

export default function UploadPage() {

    const [files, setFiles] = useState([]);

    function uploadImage(uploadedFile) {
        const data = new FormData();

        data.append("file", uploadedFile.file, uploadedFile.name);

        api.post('/posts', data)
            .then(response => {
                console.log(response.data.data.url)
            })
            .catch(err => {
                console.log(err, err.response)
            })
    };

    function changeImage(newFiles) {
        let auxFiles = [...files];

        newFiles.forEach(file => {
            auxFiles.push({
                file,
                name: file.name,
                size: file.size,
                preview: URL.createObjectURL(file),
                url: null
            });
        });

        setFiles([...auxFiles]);

        auxFiles.forEach(uploadImage);
    };

    function removeImage(keyParam) {
        setFiles(files.filter((files, key) => key !== keyParam));
    };

    return (
        <Upload>
            <DivImage>

                {
                    files.map((file, key) => (
                        <ItemImage>
                            <img className="img" src={file.preview} />
                            <InfoImage>
                                <NameImage>{file.name || ''}</NameImage>
                                <SizeImage>{file.size / 1000} MB
                                <span onClick={() => removeImage(key)}>Excluir</span>
                                </SizeImage>
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