'use client';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/app/ui/select';
import React from 'react';
import Texts from '../Texts';
import { Check } from 'lucide-react';
import { useFormik } from 'formik';

type Props = {};

const Form = (props: Props) => {
  const [success, setSuccess] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      surname: '',
      family: '',
      email: '',
      attendance: '',
      invitedBy: '',
    },
    onSubmit: (values) => {
      setSuccess(true);
      console.log(values);
    },
  });

  return (
    <div className="bg-beige w-[70%] min-[500px]:min-w-[350px] max-[500px]:min-w-[150px] max-[600px]:w-[90%] font-ebGaramond text-black mx-auto py-6 min-[600px]:px-6 max-[600px]:px-3 rounded-lg">
      <form className="flex flex-col items-start gap-6">
        <p>Name: (required) </p>
        <div className="flex w-full max-[650px]:flex-col min-[650px]:items-center gap-6">
          <div className="flex w-[50%] max-[650px]:w-full flex-col items-start gap-1">
            <label htmlFor="firstName">First Name</label>
            <input
              className="py-1 px-3 w-full bg-transparent border-b border-black"
              type="text"
              id="firstName"
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              placeholder="Enter first name"
            />
          </div>

          <div className="flex w-full min-[650px]:w-[50%] flex-col items-start gap-1">
            <label htmlFor="name">Surname </label>
            <input
              className="py-1 px-3 w-full bg-transparent border-b border-black"
              type="text"
              id="surname"
              name="surname"
              onChange={formik.handleChange}
              value={formik.values.surname}
              placeholder="Enter surname"
            />
          </div>
        </div>

        <div className="w-full flex flex-col items-start gap-1">
          <label htmlFor="email">Email (required)</label>
          <input
            className="py-1 px-3 bg-transparent w-full border-b border-black"
            type="email"
            id="email"
            name="email"
            placeholder="orokunle@gmail.com"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div className="w-full flex flex-col items-start gap-1">
          <label className="text-start" htmlFor="Attendance">
            Will you be bringing a plus one? (required)
          </label>
          <Select value={formik.values.attendance}>
            <SelectTrigger className="w-full border-none ">
              <SelectValue placeholder="Select attendance" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="border-none">
                <SelectLabel>Confirm attendance </SelectLabel>
                <SelectItem value="Yes">Yes</SelectItem>
                <SelectItem value="No">No</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <button
          className=" mx-auto rounded-[45%] border border-black w-[100px] py-3"
          type="submit"
        >
          Send
        </button>
        <div className="mx-auto flex justify-center w-full">
          {success && (
            <Texts className="flex items-center text-green-600 ">
              <span>Thank you!, RSVP sent.</span>
              <span className=" text-[16px]">
                {' '}
                <Check size={14} />
              </span>
            </Texts>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
