import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import { useParams } from 'react-router-dom'

const Room = () => {

  const { roomId } = useParams();

  const Mymeeting = async (element) => {
    const appID = 1792340178;

    const serverSecret = "11e25d072a125632cf37fa93ed2ec990";

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), 'username');
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,

      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };


  return (

    <div className='room-page'>

      <div ref={Mymeeting} />
    </div>
  )
}

export default Room