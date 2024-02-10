import { UseFormReturn, FieldValues } from 'react-hook-form';
import { ZodType } from 'zod';

export type FormEvent = React.FormEvent<HTMLFormElement>;

export type FormControl<T extends FieldValues> = UseFormReturn<T>;

export interface FormNavigation {
  next(e: FormEvent): void;
  back(): void;
  submit(): void;
}

export interface FormRegistration<T extends FieldValues> {
  formControl: FormControl<T>;
  formNavigation: FormNavigation;
}

export interface StepForm<T extends FieldValues> {
  component: React.FC<FormRegistration<T>>;
  schema: ZodType<T>;
}
