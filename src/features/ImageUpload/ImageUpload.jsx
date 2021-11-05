import {useState} from 'react'
import {FilePond, registerPlugin} from 'react-filepond'

import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';

registerPlugin(
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview,
    FilePondPluginFileValidateType,
    FilePondPluginFileValidateSize,
    FilePondPluginImageTransform,
    FilePondPluginImageResize,
)


const ImageUpload = ({source, url, processUrl, revertUrl}) => {
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
                url: url,
                process: {
                    url: processUrl,
                },
                revert: {
                    url: revertUrl,
                },
                remove: (source, load, error) => {
                    fetch(url + revertUrl, {method: 'DELETE'})
                        .then(() => {setImage([])})
                        .finally(() => load())
                },
                load: (source, load, error, progress, abort, headers) => {
                    const myRequest = new Request(source);
                    fetch(myRequest).then(function (response) {
                        response.blob().then(function (myBlob) {
                            load(myBlob)
                        });
                    });
                },
            }}
            name="image"
            labelIdle='<span class="filepond--label-action">Upload an Image for your Classroom</span>'
            credits=''
        />
    )
}

export default ImageUpload
