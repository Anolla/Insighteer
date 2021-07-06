import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/data";
import { Image, Box, Heading } from "@chakra-ui/react";
import glasses from "../../utilities/assets/smiling_face_with_sunglasses.gif";
import chilling from "../../utilities/assets/relieved_face.gif";
import yawning from "../../utilities/assets/yawning_face.gif";
import sleepy from "../../utilities/assets/sleeping_face.gif";
import overload from "../../utilities/assets/exploding_head.gif";
import head from "../../utilities/assets/face_with_head_bandage.gif";
import switcher from "../../utilities/assets/fireworks.gif";

function TaState() {
  const [imageInfo, setImageInfo] = useState({ message: "", face: switcher });
  const context = useContext(DataContext);
  // Emojis context.dailyTicketsInfo.opened context.dailyTicketsInfo.users.available 

  useEffect(() => {
    const available = context.users.available.length;
    const { claimed, opened } = context.dailyTicketsInfo;
    let face;
    let message;
    if (available) {
      if (!opened) {
        if (!claimed) {
          face = chilling;  
          message = "Chilling until a ticket is raised";
        } else if (claimed) {
          face = glasses;
          message = "We covered everything and are ready for more";
        }
      } else if (opened) {
        if(opened >= 5){
          face = sleepy;
          message = "There are tickets but I am sleepy";

        }else if(opened < 5){
          face = yawning;
          message = "There are some tickets but I am too lazy to take one";
        }
      }
    } else if (!available) {
      if (opened) {
        face = overload;
        message = "We are busy solving tickets and more are coming in !!";
      } else if (!opened) {
        face = head;
        message = "Warning: it is almost a ticket overload!";
      }
    }
    if (face !== imageInfo.face) {
      setImageInfo({ face, message });
    }
  }, [context.users, context.dailyTicketsInfo]);

  return (
    <Box className='item' borderWidth="0px" p='6' overflow="hidden">
      <Heading size='sm'>TA Status</Heading>
      <Box className='flexCol' justifyContent='space-evenly' h='100%' w='100%' >
        <Image title={imageInfo.message} src={imageInfo.face} />
        {/* <Heading fontWeight='500' pb='5px' size='xs'>{imageInfo.message}</Heading> */}

      </Box>
    </Box>
  );
}

export default TaState;

