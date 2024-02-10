import { StepForm } from '../types';
import { FieldValues } from 'react-hook-form';

interface UseMultiform<T extends FieldValues> {
  globalState: Record<string, string>;
  stages: Record<number, StepForm<T>>;
}

export const useMultiform = <T extends FieldValues>({
  globalState,
  stages,
}: UseMultiform<T>) => {
  console.log(stages);
  console.log(globalState);

  return null;
};
