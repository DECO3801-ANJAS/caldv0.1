import IParticipant from "../models/participant";

interface IParticipantData {
    [index: string]: IParticipant[];
}
  
export default IParticipantData;