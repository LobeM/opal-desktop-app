import { useZodForm } from './use-zod-form';

export const useStudioSettings = (
  id: string,
  screen?: string,
  audio?: string,
  preset?: 'HD' | 'SD',
  plan?: 'PRO' | 'FREE'
) => {
  const { register, watch } = useZodForm(updateStudioSettingSchema, {
    screen: screen!,
    audio: audio!,
    preset: preset!,
  });
};
