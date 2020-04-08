import React, { useState } from 'react';
import Dropzone from 'react-dropzone'

import {
    Upload,
    DivUpload,
    DivImage,
    ItemImage,
    InfoImage,
    NameImage,
    SizeImage,
    LogoutButton
} from './styles'

import api from '../services/api';

import { useHistory } from 'react-router-dom';

export default function UploadPage() {

    const [files, setFiles] = useState([]);

    const history = useHistory();

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

    function logout() {
        localStorage.removeItem("x-access-token");
        history.push('/login');
    };

    return (
        <Upload>

            <LogoutButton onClick={logout}>Sair</LogoutButton>

            <DivImage>
                {
                    files.map((file, key) => (
                        <ItemImage>
                            <img
                                accepted="image/*"
                                alt="imgUpload"
                                className="img"
                                src={file.preview} />
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

            <Dropzone accept="image/*" onDrop={acceptedFiles => changeImage(acceptedFiles)}>
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