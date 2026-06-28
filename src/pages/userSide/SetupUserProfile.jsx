import React, { useState } from 'react';
import { useContext } from 'react';
import { ContextStore } from '../../context/ContextStore';

const SetupUserProfilePage = ({ onSubmitSuccess }) => {
  const { userformData, setUserFormData } = useContext(ContextStore);
//   console.log("Current User Profile Data:", userformData);

  const handleChange = (e) => {
    setUserFormData({ ...userformData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("User Profile Data Submitted:", userformData);
    if (onSubmitSuccess) onSubmitSuccess(userformData);
  };

  return (
    <div className="min-h-screen bg-[#0a0b0d] text-white flex items-center justify-center p-4">
      
      {/* Form Card */}
      <div className="w-full max-w-md bg-[#121318] p-6 rounded-xl border border-zinc-800 shadow-xl">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Personal Profile</h2>
          <p className="text-xs text-zinc-400 mt-1">Set up your account identity</p>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Full Name */}
          <div>
            <label className="text-xs font-semibold text-zinc-400 block mb-1">Full Name</label>
            <input
              name="fullName"
              type="text"
              required
              placeholder="John Doe"
              value={userformData.fullName}
              onChange={handleChange}
              className="w-full bg-[#171922] border border-zinc-800 focus:border-yellow-500 rounded-lg p-2.5 text-sm outline-none text-white"
            />
          </div>

          {/* Profile Headline */}
          <div>
            <label className="text-xs font-semibold text-zinc-400 block mb-1">Short Headline</label>
            <input
              name="headline"
              type="text"
              required
              placeholder="Product Designer & Tech Enthusiast"
              value={userformData.headline}
              onChange={handleChange}
              className="w-full bg-[#171922] border border-zinc-800 focus:border-yellow-500 rounded-lg p-2.5 text-sm outline-none text-white"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="text-xs font-semibold text-zinc-400 block mb-1">Phone Number</label>
            <input
              name="phoneNumber"
              type="tel"
              required
              placeholder="+1 (555) 000-0000"
              value={userformData.phoneNumber}
              onChange={handleChange}
              className="w-full bg-[#171922] border border-zinc-800 focus:border-yellow-500 rounded-lg p-2.5 text-sm outline-none text-white"
            />
          </div>

          {/* Location */}
          <div>
            <label className="text-xs font-semibold text-zinc-400 block mb-1">Location (City, Country)</label>
            <input
              name="location"
              type="text"
              required
              placeholder="New York, USA"
              value={userformData.location}
              onChange={handleChange}
              className="w-full bg-[#171922] border border-zinc-800 focus:border-yellow-500 rounded-lg p-2.5 text-sm outline-none text-white"
            />
          </div>

          {/* Profile Picture Link */}
          <div>
            <label className="text-xs font-semibold text-zinc-400 block mb-1">Profile Image URL</label>
            <input
              name="avatarUrl"
              type="url"
              placeholder="https://example.com/my-photo.jpg"
              value={userformData.avatarUrl}
              onChange={handleChange}
              className="w-full bg-[#171922] border border-zinc-800 focus:border-yellow-500 rounded-lg p-2.5 text-sm outline-none text-white"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2.5 px-4 rounded-lg text-sm transition-colors cursor-pointer mt-2"
          >
            Finish Profile Setup
          </button>

        </form>
      </div>

    </div>
  );
};

export default SetupUserProfilePage;