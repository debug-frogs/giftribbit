import {useContext} from 'react';
import ImageContainer from "../ImageContainer/ImageContainer";
import ImageUpload from "../ImageUpload/ImageUpload";
import {ClassroomContext} from "../../pages/classroom/[id]";
import {Box, Container} from "@mui/material";

const ClassroomHeroImage = () => {
    const [classroom] = useContext(ClassroomContext)

   if (classroom.Teacher.id === classroom.userSub) {
        return (
            <ImageUpload
                source={classroom.image}
                url={'/api/pond/'}
                processUrl={'process/' + classroom.id}
                revertUrl={'revert/' + classroom.id}
            />
        )
    } else {
        return (
            <Container
                maxWidth='xs'
            >
                <Box
                    maxHeight={400}
                    overflow='hidden'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                >
                    <ImageContainer
                        src={classroom.image}
                        layout='fill'
                        priority
                    />
                </Box>
            </Container>
        )
    }
}

export default ClassroomHeroImage;
