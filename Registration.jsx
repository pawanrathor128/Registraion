

import React from 'react';
import { useForm } from 'react-hook-form';

const User = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, watch } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const password = watch("password");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-6 w-full max-w-lg p-8 bg-white shadow-2xl rounded-lg'>
        <h1 className='text-center text-2xl font-bold'>REGISTER YOURSELF</h1>

        {/* First Name and Last Name */}
        <div className="flex flex-col md:flex-row gap-4">

          {/* First Name */}
          <label className="w-full">
            <p className="text-sm text-gray-700 mb-1">
              First Name: <sup className="text-pink-500">*</sup>
            </p>
            <input
              type="text"
              required
              placeholder="Enter First Name"
              {...register('firstname', { required: true, minLength: { value: 3, message: "Minimum length is 3" } })}
              className="bg-gray-100 rounded-lg w-full p-3 text-gray-700 border border-gray-300 outline-none focus:border-blue-500"
            />
            {errors.firstname && <span className="text-pink-500 text-xs">{errors.firstname.message}</span>}
          </label>

          {/* Last Name */}
          <label className="w-full">
            <p className="text-sm text-gray-700 mb-1">
              Last Name: <sup className="text-pink-500">*</sup>
            </p>
            <input
              type="text"
              placeholder="Enter Last Name"
              {...register('lastname', { required: true, minLength: { value: 3, message: "Minimum length is 3" } })}
              className="bg-gray-100 rounded-lg w-full p-3 text-gray-700 border border-gray-300 outline-none focus:border-blue-500"
            />
            {errors.lastname && <span className="text-pink-500 text-xs">{errors.lastname.message}</span>}
          </label>
        </div>

        {/* Email */}
        <label className="w-full">
          <p className="text-sm text-gray-700 mb-1">
            Email Address: <sup className="text-pink-500">*</sup>
          </p>
          <input
            type="email"
            placeholder="Enter your email address"
            {...register('email', { required: true })}
            className="bg-gray-100 rounded-lg w-full p-3 text-gray-700 border border-gray-300 outline-none focus:border-blue-500"
          />
          {errors.email && <span className="text-pink-500 text-xs">Email is required</span>}
        </label>

        {/* Skills */}
        <label className="w-full">
          <p className="text-sm text-gray-700 mb-1">
            Skills: <sup className="text-pink-500">*</sup>
          </p>
          <input
            type="text"
            placeholder="Skills..."
            {...register('skills', { required: true, minLength: { value: 3, message: "Minimum length is 3" } })}
            className="bg-gray-100 rounded-lg w-full p-3 text-gray-700 border border-gray-300 outline-none focus:border-blue-500"
          />
          {errors.skills && <span className="text-pink-500 text-xs">{errors.skills.message}</span>}
        </label>

        {/* Password and Confirm Password */}
        <div className="flex flex-col md:flex-row gap-4">

          {/* Create Password */}
          <label className="w-full">
            <p className="text-sm text-gray-700 mb-1">
              Create Password: <sup className="text-pink-500">*</sup>
            </p>
            <input
              type="password"
              placeholder="Enter Password"
              {...register('password', {
                required: true,
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/,
                  message: "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.",
                }
              })}
              className="bg-gray-100 rounded-lg w-full p-3 text-gray-700 border border-gray-300 outline-none focus:border-blue-500"
            />
          </label>

          {/* Confirm Password */}
          <label className="w-full">
            <p className="text-sm text-gray-700 mb-1">
              Confirm Password: <sup className="text-pink-500">*</sup>
            </p>
            <input
              type="password"
              placeholder="Confirm Password"
              {...register('confirmPassword', {
                required: true,
                validate: value => value === password || "Passwords do not match",
              })}
              className="bg-gray-100 rounded-lg w-full p-3 text-gray-700 border border-gray-300 outline-none focus:border-blue-500"
            />
          </label>
        </div>

        <div className="w-full">
          {errors.confirmPassword && (
            <span className="text-pink-500 text-xs">{errors.confirmPassword.message}</span>
          )}
          {errors.password && (
            <span className="text-pink-500 text-xs">{errors.password.message}</span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className='bg-yellow-400 py-2 px-4 rounded-lg mt-6 font-medium text-gray-900 w-full border border-gray-300 hover:bg-yellow-300'
          disabled={isSubmitting}
        >
          REGISTER
        </button>

        <div>
          <p className='text-center'>Existing user? <a href="#" className='text-blue-500'>Login</a></p>
          <p className='text-center'>
            <a href="#" className='text-blue-500'>Terms of Use</a> and <a href="#" className='text-blue-500'>Privacy Policy</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default User;










