import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters!'),
  email: z.string().email(),
  phoneNumber: z.string().min(6, 'Phone number must be at least 6 numbers!'),
});

type FormFields = z.infer<typeof formSchema>;

export default function App() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    setFormValues(data);
  };

  return (
    <div className='container'>
      <h1>
        CV Maker <span className='h1-span'>PRO</span>
      </h1>
      <div className='page'>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <h2>Basic Information</h2>
          <input {...register('name')} type='text' placeholder='Name' />
          {errors.name && <div className='error'>{errors.name.message}</div>}
          <input {...register('email')} type='email' placeholder='Email' />
          {errors.email && <div className='error'>{errors.email.message}</div>}

          <input
            {...register('phoneNumber')}
            type='text'
            placeholder='Phone Number'
          />
          {errors.phoneNumber && (
            <div className='error'>{errors.phoneNumber.message}</div>
          )}

          <button type='submit' className='submit-btn'>
            {formValues.name === '' ? 'Submit' : 'Edit'}
          </button>
        </form>
        <div className='preview'>
          <div className='preview-basic-info'>
            <h3 className='preview-header'>CV - {formValues.name}</h3>
            <p className='preview-value name'>{formValues.name}</p>
            <p className='preview-value email'>{formValues.email}</p>
            <p className='preview-value phone'>{formValues.phoneNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
