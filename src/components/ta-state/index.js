import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/data";
import { Image } from "@chakra-ui/react";
import glasses from "../../utilities/assets/relieved_face.gif";
import chilling from "../../utilities/assets/yawning_face.gif";
import sleepy from "../../utilities/assets/sleeping_face.gif";
import overload from "../../utilities/assets/face_with_head_bandage.gif";
import head from "../../utilities/assets/face_with_head_bandage.gif";
import switcher from "../../utilities/assets/fireworks.gif";

function TaState() {
  const [imageInfo, setImageInfo] = useState({ message: "", face: switcher });
  const context = useContext(DataContext);

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
    if(face !==imageInfo.face ){
      setImageInfo({ face, message });
    }
  }, [context.users, context.dailyTicketsInfo]);

  return (
    <div>
      <Image title={imageInfo.message} src={imageInfo.face} />
    </div>
  );
}

export default TaState;

