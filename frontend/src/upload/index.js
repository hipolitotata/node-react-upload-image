import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
        async function getFiles() {
            try {
                const response = await api.get('/posts/list');
                console.log(response.data)
                if (response.data) {
                    setFiles([...response.data]);
                }
            }
            catch (err) {
                console.log(err, err.response);
            }
        };

        getFiles();
    }, [])

    function uploadImage(uploadedFile) {
        if (uploadedFile._id) return;
        const data = new FormData();

        data.append("file", uploadedFile.file, uploadedFile.name);

        api.post('/posts/create', data)
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

    async function removeImage(keyParam) {
        try {
            let file = files[keyParam];
            const response = await api.delete(`/posts/delete/${file._id}`);
            console.log(response);
            setFiles(files.filter((files, key) => key !== keyParam));
        } catch(err){
            console.log(err, err.response);
        }
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