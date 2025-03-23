'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function RestaurantForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [submitting, setSubmitting] = useState(false);

  async function onHandleSubmit(data) {
    setSubmitting(true);

    try {
      // Replace with your actual form endpoint
      const response = await fetch('https://formspree.io/f/mldgqznb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success(
          'Thank you! Your reservation request has been received. We will contact you shortly to confirm.',
          {
            duration: 5000,
            position: 'top-center',
          },
        );
        reset();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Reservation request failed');
      }
    } catch (error) {
      toast.error(error.message || 'Something went wrong. Please try again.', {
        duration: 5000,
        position: 'top-center',
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div id="reservation" className="mx-auto max-w-2xl rounded-lg p-6 font-primary3 shadow-md">
      {/* Toast container */}
      <Toaster />

      <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">Make a Reservation</h2>

      <form onSubmit={handleSubmit(onHandleSubmit)} className="space-y-4">
        {/* Name & Phone */}
        <div className="flex flex-col gap-4">
          <div className="flex-1">
            <label className="mb-1 block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-[400px] rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              {...register('fullName', { required: 'Full name is required' })}
            />
            {errors.fullName && <p className="text-sm text-red-600">{errors.fullName.message}</p>}
          </div>

          <div className="flex-1">
            <label className="mb-1 block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-[400px] rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              {...register('phone', { required: 'Phone number is required' })}
            />
            {errors.phone && <p className="text-sm text-red-600">{errors.phone.message}</p>}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-[400px] rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Please provide a valid email address',
              },
            })}
          />
          {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
        </div>

        {/* Date & Time */}
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex-1">
            <label className="mb-1 block text-sm font-medium text-gray-700">Reservation Date</label>
            <input
              type="date"
              className="w-[400px] rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              {...register('date', { required: 'Date are required' })}
            />
            {errors.reservationDateTime && (
              <p className="text-sm text-red-600">{errors.reservationDateTime.message}</p>
            )}
          </div>
        </div>

        {/* Party Size */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Number of Guests</label>
          <select
            className="w-[400px] rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            {...register('partySize', {
              required: 'Number of guests is required',
            })}
          >
            <option value="">Select number of guests</option>
            <option value="1">1 person</option>
            <option value="2">2 people</option>
            <option value="3">3 people</option>
            <option value="4">4 people</option>
            <option value="5">5 people</option>
            <option value="6">6 people</option>
            <option value="7">7 people</option>
            <option value="8">8 people</option>
            <option value="large">More than 8 (Please specify in notes)</option>
          </select>
          {errors.partySize && <p className="text-sm text-red-600">{errors.partySize.message}</p>}
        </div>

        {/* Special Requests */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Special Requests</label>
          <textarea
            placeholder="Dietary requirements, special occasions, seating preferences, etc."
            rows={4}
            className="w-[400px] resize-y rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            {...register('specialRequests')}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={submitting}
            className="rounded-md bg-amber-600 px-4 py-2 font-medium text-white transition duration-200 hover:bg-amber-700 disabled:bg-amber-400"
          >
            {submitting ? 'Processing...' : 'Request Reservation'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default RestaurantForm;
