import {useContext} from 'react';
import ImageContainer from "../ImageContainer/ImageContainer";
import ImageUpload from "../ImageUpload/ImageUpload";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";

const HeroImage = () => {
    const {asPath} = useRouter();
    const registryUid = asPath.substr(3)

    const loggedIn = true
    const image_src = useSelector(selectRegistry)?.event?.image_src

   if (loggedIn) {
        return (
            <ImageUpload
                source={image_src}
                url={'/api/pond'}
                processUrl={'/process/' + registryUid}
                revertUrl={'/revert/' + registryUid}
            />
        )
    } else {
        return (
            <ImageContainer
                src={image_src}
                layout='fill'
                priority
            />
        )
    }
}

export default HeroImage;
