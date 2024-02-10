import React from 'react';
import z from 'zod';
import { FormRegistration } from '../types';

const schema = z.object({
  name: z.string(),
});

type Form = z.infer<typeof schema>;

export const Subform = ({
  formControl,
  formNavigation,
}: FormRegistration<Form>) => {
  console.log(formControl, formNavigation);

  return <div>Example Subcomponent</div>;
};
