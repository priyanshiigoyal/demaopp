import React, {useState} from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import ImagePreview from './imagePreview/index';
 
function TakePhoto () {
    const [dataUri, setDataUri] = useState('');
  function handleTakePhoto (dataUri) {
    console.log('takePhoto');
    setDataUri(dataUri);
  }
  const isFullscreen = false;
  return (
    <div>
      {
        (dataUri)
          ? <ImagePreview dataUri={dataUri}
            isFullscreen={isFullscreen}
          />
          : <Camera onTakePhotoAnimationDone = {handleTakePhoto}
            isFullscreen={isFullscreen}
            isDisplayStartCameraError={true}
          />
      }
    </div>
  );
}
 
export default TakePhoto;