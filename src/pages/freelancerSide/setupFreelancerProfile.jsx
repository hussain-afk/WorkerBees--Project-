import React, { useState } from 'react';
import { Briefcase, Globe, DollarSign, Plus, X, ArrowRight } from 'lucide-react';
import { useContext } from 'react';
import { ContextStore } from '../../context/ContextStore';

const SetupFreelancerProfilePage = ({ onSubmitSuccess }) => {
  const { freelancerFormData, setFreelancerFormData } = useContext(ContextStore);
  // console.log("Current freelancerFormData state:", freelancerFormData);
  const [skillInput, setSkillInput] = useState('');
  const [skills, setSkills] = useState(['React.js', 'Tailwind CSS', 'TypeScript', 'JavaScript']);

  const handleChange = (e) => {
    setFreelancerFormData({ ...freelancerFormData, [e.target.name]: e.target.value });
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalProfile = { ...freelancerFormData, skills };
    console.log("Freelancer Profile Initialized:", finalProfile);
    if (onSubmitSuccess) onSubmitSuccess(finalProfile);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0a0b0d] px-4 py-8 sm:px-6 relative overflow-hidden font-sans">
      
      {/* Ambient Hive Grid Glow backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-yellow-500/[0.05] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      {/* Main Glassmorphic Panel Container */}
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 bg-[#121318]/90 backdrop-blur-xl rounded-2xl border border-zinc-800/60 shadow-2xl overflow-hidden transition-all duration-300 hover:border-zinc-700/40">
        
        {/* Left Interactive Guide Column */}
        <div className="md:col-span-4 flex flex-col items-center md:items-start justify-between p-8 md:p-10 bg-[#161820]/40 border-b md:border-b-0 md:border-r border-zinc-800/60 text-center md:text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-black font-bold shadow-xl shadow-yellow-500/10 text-xl mx-auto md:mx-0">
              ⚡
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-white tracking-tight drop-shadow-md">
                Freelancer Profile Parameters
              </h2>
              <p className="mt-2 text-xs text-zinc-400 font-medium leading-relaxed uppercase tracking-wider">
                Initialize your professional tech stack onto the workspace matrix.
              </p>
            </div>
          </div>
          
          <div className="hidden md:block pt-8 border-t border-zinc-800/60 w-full">
            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
              Security Node Active
            </p>
            <p className="text-[11px] text-zinc-400 mt-1">
              Your configurations will be broadcast live across client vectors immediately upon initialization.
            </p>
          </div>
        </div>

        {/* Right Structural Form Column */}
        <div className="md:col-span-8 p-6 sm:p-10 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Input Row 1: Designation & Compensation */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block ml-0.5">
                  Professional Title
                </label>
                <div className="relative group">
                  <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-yellow-500 w-4 h-4 transition-colors" />
                  <input
                    name="title"
                    type="text"
                    required
                    placeholder="Frontend Engineer / UI Architect"
                    value={freelancerFormData.title}
                    onChange={handleChange}
                    className="w-full bg-[#171922] border border-zinc-800/80 focus:border-yellow-500/80 focus:ring-1 focus:ring-yellow-500/20 text-white rounded-xl pl-11 pr-4 py-3 text-xs transition-all outline-none duration-200"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block ml-0.5">
                  Hourly Rate ($)
                </label>
                <div className="relative group">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-zinc-500 group-focus-within:text-yellow-500 transition-colors">
                    $
                  </span>
                  <input
                    name="hourlyRate"
                    type="number"
                    required
                    placeholder="45"
                    value={freelancerFormData.hourlyRate}
                    onChange={handleChange}
                    className="w-full bg-[#171922] border border-zinc-800/80 focus:border-yellow-500/80 focus:ring-1 focus:ring-yellow-500/20 text-white rounded-xl pl-9 pr-4 py-3 text-xs transition-all outline-none duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Input Row 2: Portfolio Web Link */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block ml-0.5">
                Portfolio Hub URL
              </label>
              <div className="relative group">
                <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-yellow-500 w-4 h-4 transition-colors" />
                <input
                  name="portfolioUrl"
                  type="url"
                  required
                  placeholder="https://yourprofile.vercel.app"
                  value={freelancerFormData.portfolioUrl}
                  onChange={handleChange}
                  className="w-full bg-[#171922] border border-zinc-800/80 focus:border-yellow-500/80 focus:ring-1 focus:ring-yellow-500/20 text-white rounded-xl pl-11 pr-4 py-3 text-xs transition-all outline-none duration-200"
                />
              </div>
            </div>

            {/* Input Row 3: Skills Tokenizer Subform */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block ml-0.5">
                Core Core Stack Frameworks
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Inject new skill parameter (e.g., Next.js, Framer Motion)"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  className="flex-grow bg-[#171922] border border-zinc-800/80 focus:border-yellow-500/80 focus:ring-1 focus:ring-yellow-500/20 text-white rounded-xl px-4 py-3 text-xs transition-all outline-none duration-200"
                />
                <button
                  type="button"
                  onClick={handleAddSkill}
                  className="bg-[#1c1e29] hover:bg-zinc-800 text-white px-4 rounded-xl transition-all border border-zinc-800 cursor-pointer flex items-center justify-center active:scale-[0.97]"
                >
                  <Plus className="w-4 h-4 text-yellow-500" />
                </button>
              </div>
              
              {/* Dynamic Skill Badge Badges Row */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider bg-[#171922] border border-zinc-800 text-yellow-500/90 shadow-sm"
                  >
                    {skill}
                    <button 
                      type="button" 
                      onClick={() => handleRemoveSkill(skill)} 
                      className="text-zinc-500 hover:text-red-400 transition-colors cursor-pointer"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Input Row 4: Workspace Bio Manifesto */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block ml-0.5">
                Operational Statement (Bio)
              </label>
              <textarea
                name="bio"
                required
                rows="4"
                placeholder="Detail your engineering methodologies, responsive optimization workflows, and user behavior solutions..."
                value={freelancerFormData.bio}
                onChange={handleChange}
                className="w-full bg-[#171922] border border-zinc-800/80 focus:border-yellow-500/80 focus:ring-1 focus:ring-yellow-500/20 text-white rounded-xl p-4 text-xs transition-all outline-none resize-none duration-200"
              />
            </div>

            {/* Complete Submission Button */}
            <button
              type="submit"
              className="w-full mt-2 group relative flex justify-center items-center py-4 px-4 rounded-xl text-xs uppercase tracking-wider font-black text-black bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 transition-all duration-200 cursor-pointer active:scale-[0.98] shadow-lg shadow-yellow-500/10"
            >
              Finalize Infrastructure Deployment
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default SetupFreelancerProfilePage;