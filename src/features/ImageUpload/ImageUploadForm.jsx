import {Button} from "@mui/material";
import axios from "axios";
import ImageUpload from "./ImageUpload";
import {useRouter} from "next/router";
import {useState} from "react";


const ImageUploadForm = () => {
    const [submittable, setSubmittable] = useState(false)
    const router = useRouter()

    const onSubmit = async (event) => {
        event.preventDefault()
        setSubmittable(false)

        const url = '/api/submit'
        const data = JSON.stringify({
            key: event.target.image.value
        })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        }
        await axios.post(url, data, config)
            .finally(() => {
                router.reload()
            })
    }

    return (
        <form onSubmit={onSubmit}>
            <ImageUpload
                onprocessfiles={() => setSubmittable(true)}
                onprocessfilerevert={() => setSubmittable(false)}
                onprocessfileabort={() => setSubmittable(false)}
            />
            <Button
                type='submit'
                variant='outlined'
                disabled={!submittable}
            >
                Submit
            </Button>
        </form>
    )
}

export default ImageUploadForm
