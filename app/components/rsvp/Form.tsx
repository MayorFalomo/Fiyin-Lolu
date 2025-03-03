'use client';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
      lastName: '',
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
    <div className="bg-beige font-ebGaramond w-fit text-black mx-auto p-6 rounded-lg">
      <form className="flex flex-col items-start gap-6">
        <p>Name: (required) </p>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-start gap-1">
            <label htmlFor="firstName">First Name</label>
            <input
              className="py-1 px-3 bg-transparent border-b border-black"
              type="text"
              id="firstName"
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
          </div>

          <div className="flex flex-col items-start gap-1">
            <label htmlFor="name">Other Name (Name we know) </label>
            <input
              className="py-1 px-3 bg-transparent border-b border-black"
              type="text"
              id="lastName"
              name="lasName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-start gap-1">
          <label htmlFor="family">Family Name (optional)</label>
          <input
            className="py-1 px-3 bg-transparent w-full border-b border-black"
            type="text"
            id="family"
            name="family"
            placeholder="Orokunle Family"
            onChange={formik.handleChange}
            value={formik.values.family}
          />
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
          <label htmlFor="Attendance">Will you be attending? (required)</label>
          <Select value={formik.values.attendance}>
            <SelectTrigger className="w-full border-none ">
              <SelectValue placeholder="Select attendance" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="border-none">
                <SelectLabel>Confirm your attendance </SelectLabel>
                <SelectItem value="Yes">Yes, I will be attending</SelectItem>
                <SelectItem value="No">No, I would not be around</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full flex flex-col items-start gap-1">
          <label htmlFor="Attendance">Invited by? (required)</label>
          <Select>
            <SelectTrigger className="w-full border-none ">
              <SelectValue placeholder="Please tell us who invited you" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="border-none">
                {/* <SelectLabel>Confirm your attendance </SelectLabel> */}
                <SelectItem value="Yes">Groom's Family</SelectItem>
                <SelectItem value="No">Bride's Family</SelectItem>
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
