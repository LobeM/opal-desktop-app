import { SourceDeviceStateProps } from '@/hooks/use-media-sources';
import { useStudioSettings } from '@/hooks/use-studio-settings';

type Props = {
  state: SourceDeviceStateProps;
  user:
    | ({
        subscription: {
          plan: 'PRO' | 'FREE';
        } | null;
        studio: {
          id: string;
          screen: string | null;
          mic: string | null;
          preset: 'HD' | 'SD';
          camera: string | null;
          userId: string | null;
        } | null;
      } & {
        id: string;
        email: string;
        firstname: string;
        lastname: string;
        createdAt: Date;
        clerkid: string;
      })
    | null;
};

const MediaConfiguration = ({ state, user }: Props) => {
  const activeScreen = state.displays?.find(
    (display) => display.id === user?.studio?.screen
  );
  const activeAudio = state.audioInputs?.find(
    (mic) => mic.deviceId === user?.studio?.mic
  );

  const { isPending, onPreset, register } = useStudioSettings(
    user!.id,
    user?.studio?.screen || state.displays?.[0]?.id,
    user?.studio?.mic || state.audioInputs?.[0]?.deviceId,
    user?.studio?.preset,
    user?.subscription?.plan
  );

  return <form className='flex flex-col h-full w-full relative gap-y-5'></form>;
};

export default MediaConfiguration;
