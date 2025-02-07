import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters!'),
  email: z.string().email(),
  phoneNumber: z.string().min(6, 'Phone number must be at least 6 numbers!'),
});

type FormFields = z.infer<typeof formSchema>;

export default function App() {
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
    console.log(data);
  };

  return (
    <div className='container'>
      <h1>
        CV Maker <span className='h1-span'>PRO</span>
      </h1>
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
          Submit
        </button>
      </form>
    </div>
  );
}
