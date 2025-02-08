import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters!'),
  email: z.string().email(),
  phoneNumber: z.string().min(6, 'Phone number must be at least 6 numbers!'),
  schoolName: z.string().min(3, 'School name must be at least 3 characters!'),
  titleOfStudy: z
    .string()
    .min(3, 'Title of study must be at least 3 characters!'),
  dateOfStudy: z
    .string()
    .min(3, 'Date of study must be at least 3 characters!'),
  companyName: z.string().min(3, 'Company name must be at least 3 characters!'),
  positionTitle: z
    .string()
    .min(3, 'Position title must be at least 3 characters!'),
  mainResp: z
    .string()
    .min(
      3,
      'Main Responsibilities of your job must be at least 15 characters!'
    ),
  workDate: z.string().min(3, 'Date bust be longer than 3 characters'),
});

type FormFields = z.infer<typeof formSchema>;

export default function App() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    schoolName: '',
    titleOfStudy: '',
    dateOfStudy: '',
    companyName: '',
    positionTitle: '',
    mainResp: '',
    workDate: '',
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
      schoolName: '',
      titleOfStudy: '',
      dateOfStudy: '',
      companyName: '',
      positionTitle: '',
      mainResp: '',
      workDate: '',
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

          <h2>Educational experience</h2>
          <input
            {...register('schoolName')}
            type='text'
            placeholder='School Name'
          />
          {errors.schoolName && (
            <div className='error'>{errors.schoolName.message}</div>
          )}
          <input
            {...register('titleOfStudy')}
            type='text'
            placeholder='Title of study'
          />
          {errors.titleOfStudy && (
            <div className='error'>{errors.titleOfStudy.message}</div>
          )}
          <input
            {...register('dateOfStudy')}
            type='text'
            placeholder='Date of study (e.g. 2011.01.01 - 2014.01.30)'
          />
          {errors.dateOfStudy && (
            <div className='error'>{errors.dateOfStudy.message}</div>
          )}

          <h2>Previous work experience</h2>
          <input
            {...register('companyName')}
            type='text'
            placeholder='Company name'
          />
          {errors.companyName && (
            <div className='error'>{errors.companyName.message}</div>
          )}
          <input
            {...register('positionTitle')}
            type='text'
            placeholder='Title of position'
          />
          {errors.positionTitle && (
            <div className='error'>{errors.positionTitle.message}</div>
          )}
          <input
            {...register('mainResp')}
            type='text'
            placeholder='Main responsibilities'
          />
          {errors.mainResp && (
            <div className='error'>{errors.mainResp.message}</div>
          )}
          <input
            {...register('workDate')}
            type='text'
            placeholder='Date of work (e.g. 2011.01.01 - 2014.01.30)'
          />
          {errors.workDate && (
            <div className='error'>{errors.workDate.message}</div>
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
