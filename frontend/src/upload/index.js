import React, { useState } from 'react';
import Dropzone from 'react-dropzone'

import {
    Upload,
    DivUpload
} from './styles'

export default function UploadPage() {

    const [listFiles, setListFiles] = useState([]);

    function changeImage(target) {
        setListFiles([
            ...listFiles,
            ...target.files
        ]);

        console.log(listFiles)
    };

    return (
        <Upload>
            {
                listFiles.map(item => (
                    <img src={URL.createObjectURL(item)} />
                ))
            }
            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
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