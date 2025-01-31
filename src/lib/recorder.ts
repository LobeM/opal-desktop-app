import { v4 as uuid } from 'uuid';
import { hidePluginWindow } from './utils';

let videoTransferFileName: string | undefined;
let mediaRecorder: MediaRecorder | undefined;

export const StartRecording = (onSources: {
  id: string;
  screen: string;
  audio: string;
}) => {
  if (!mediaRecorder) {
    throw new Error('MediaRecorder not initialized');
  }
  hidePluginWindow(true);
  videoTransferFileName = `${uuid()}-${onSources?.id.slice(0, 8)}.webm`;
  mediaRecorder.start(1000);
};

export const onStopRecording = () => {
  if (mediaRecorder) {
    mediaRecorder.stop();
  }
};
