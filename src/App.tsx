import { SubmitHandler, useForm } from 'react-hook-form';

type FormFields = {
  name: string;
  email: string;
  phoneNumber: string;
};

export default function App() {
  const { register, handleSubmit } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>
        CV Maker <span className='h1-span'>PRO</span>
      </h1>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <h2>Basic Information</h2>
        <input {...register('name')} type='text' placeholder='Name' />
        <input {...register('email')} type='email' placeholder='Email' />
        <input
          {...register('phoneNumber')}
          type='number'
          placeholder='Phone Number'
        />
        <button type='submit' className='submit-btn'>
          Submit
        </button>
      </form>
    </>
  );
}
