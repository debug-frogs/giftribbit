import {useState} from 'react'
import {FilePond, registerPlugin} from 'react-filepond'
import {Storage} from "aws-amplify";

import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import cuid from "cuid";
import axios from "../../../lib/axios";

registerPlugin(
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview,
    FilePondPluginFileValidateType,
    FilePondPluginFileValidateSize,
    FilePondPluginImageTransform,
    FilePondPluginImageResize,
)


const ImageUpload = ({source, classroomID, imageID}) => {
    const [image, setImage] = useState(
        source ? [{source: source, options: {type: "local"}}] : []
    )
    const acceptFileTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/heif', 'image/webp']

    return (
        <FilePond
            required
            acceptedFileTypes={acceptFileTypes}
            imageTransformOutputMimeType={'image/jpeg'}
            imageTransformOutputQuality={60}
            imageResizeMode='contain'
            imageResizeTargetWidth={900}
            imageResizeTargetHeight={900}
            files={image}
            onupdatefiles={setImage}
            allowMultiple={false}
            allowProcess={false}
            allowRemove={true}
            allowRevert={true}
            forceRevert={true}
            maxFiles={1}
            maxFileSize={'10MB'}
            maxParallelUploads={1}
            server={{
                process: async (fieldName, file, metadata, load, error, progress, abort) => {
                    const fileName = cuid() + '.jpeg'
                    const prefix = `${classroomID}/`
                    const key = `${classroomID}/${fileName}`
                    const image = new File([file], fileName);
                    try {
                        const listItems = await Storage.list(prefix)
                        for (const item of listItems) {
                            const removeItem = await Storage.remove(item.key)
                        }
                        const storageUpload = await Storage.put(key, image, {
                            contentType: 'image/jpeg'
                        })
                        const updateClassroomRes = axios.patch('/api/update/classroom', {
                            id: classroomID,
                            imageID: fileName
                        })
                        load(fileName)
                    }
                    catch (e) {error()}
                },
                revert: async (uniqueFileId, load, error) => {
                    const key = `${classroomID}/${uniqueFileId}`
                    const storageRemove = await Storage.remove(key)
                    const updateClassroomRes = await axios.patch('/api/update/classroom', {
                        id: classroomID,
                        imageID: null
                    })
                    setImage([])
                    load()
                },
                remove: async (source, load, error) => {
                    try {
                        const key = `${classroomID}/${imageID}`
                        const storageRemove = await Storage.remove(key)
                        const updateClassroomRes = await axios.patch('/api/update/classroom', {
                            id: classroomID,
                            imageID: null
                        })
                        setImage([])
                        load()
                    }
                    catch (e) {error()}
                },
                load: (source, load, error, progress, abort, headers) => {
                    const myRequest = new Request(source);
                    fetch(myRequest).then(function (response) {
                        response.blob().then(function (myBlob) {
                            load(myBlob)
                        })
                    })
                },
            }}
            name="image"
            labelIdle='<span class="filepond--label-action">Upload an Image for your Classroom</span>'
            credits=''
        />
    )
}

export default ImageUpload
