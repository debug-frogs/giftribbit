import {useContext} from 'react';
import ImageContainer from "../ImageContainer/ImageContainer";
import ImageUpload from "../ImageUpload/ImageUpload";
import {ClassroomContext} from "../../pages/classroom/[id]";

const HeroImage = () => {
    const [profile] = useContext(ClassroomContext).profile
    const [classroom] = useContext(ClassroomContext).classroom

   if (classroom.Teacher.id === profile.id) {
        return (
            <ImageUpload
                source={classroom.image}
                url={'/api/pond'}
                processUrl={'/process/'+classroom.id}
                revertUrl={'/revert/'+classroom.id}
            />
        )
    } else {
        return (
            <ImageContainer
                src={classroom.image}
                layout='fill'
                priority
            />
        )
    }
}

export default HeroImage;
