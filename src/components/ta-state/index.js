import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/data";
import { Image, Box, Heading } from "@chakra-ui/react";
import glasses from "../../utilities/assets/relieved_face.gif";
import chilling from "../../utilities/assets/yawning_face.gif";
import sleepy from "../../utilities/assets/sleeping_face.gif";
import overload from "../../utilities/assets/face_with_head_bandage.gif";
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
          face = glasses;
          message = "We are cover everything and we ready for more";
        } else if (claimed) {
          face = chilling; // no acatly ticket and work
          message = "We are chilling until any ticket came";
        }
      } else if (opened) {
        face = sleepy;
        message = "There is ticket and i am sleepy";
      }
    } else if (!available) {
      if (opened) {
        face = overload;
        message = "We are all busy with tickets and still there is more!!";
      } else if (!opened) {
        face = head;
        message = "Please no more ticket, we cant handle them";
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

