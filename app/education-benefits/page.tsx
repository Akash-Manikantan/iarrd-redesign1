"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function EducationBenefits() {
  const [selectedProof, setSelectedProof] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const proofOptions = [
    { id: 1, label: "Dated school ID", rating: "Good" },
    { id: 2, label: "Dated official/unofficial transcript", rating: "Fair" },
    { id: 3, label: "Dated enrollment letter on school letterhead", rating: "Fair" },
    { id: 4, label: "Dated class schedule for the semester", rating: "Poor" },
    { id: 5, label: "Dated syllabus for a class", rating: "Poor" },
    { id: 6, label: "Dated receipt from bursar", rating: "Poor" },
    { id: 7, label: "Dated scholarship/financial aid letter", rating: "Poor" },
    { id: 8, label: "Other (Example: Screenshot of school portal)", rating: "Poor" }
  ];

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case "Good":
        return "bg-green-100 text-green-800";
      case "Fair":
        return "bg-yellow-100 text-yellow-800";
      case "Poor":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.753 2 16.253s4.5 10 10 10 10-4.5 10-10S17.5 6.253 12 6.253z" />
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">Education Benefits Application</h1>
          </div>
          <p className="text-cyan-200 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Apply for education benefits by selecting the type of proof you would like to provide.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 sm:p-10">
          {/* Form Section */}
          <div className="space-y-6">
            <div>
              <label className="block text-gray-900 font-semibold text-lg mb-3">
                Please select the type of proof you would like to provide <span className="text-red-500">*</span>
              </label>
              
              {/* Custom Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full px-6 py-4 rounded-lg border-2 transition-all duration-200 flex items-center justify-between text-left font-medium ${
                    selectedProof
                      ? "bg-cyan-50 border-cyan-600 text-gray-900"
                      : "bg-gray-50 border-gray-300 text-gray-600 hover:border-gray-400"
                  }`}
                >
                  <span>{selectedProof || "Select..."}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Options */}
                {isDropdownOpen && (
                  <div className="absolute z-50 w-full mt-2 bg-white border-2 border-gray-300 rounded-lg shadow-2xl overflow-hidden">
                    {proofOptions.map((option, index) => (
                      <button
                        key={option.id}
                        onClick={() => {
                          setSelectedProof(`${index + 1}. ${option.label} - ${option.rating}`);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full px-6 py-3 text-left hover:bg-cyan-50 transition-colors duration-150 border-b border-gray-100 last:border-b-0 flex items-center justify-between group"
                      >
                        <span className="text-gray-800 font-medium group-hover:text-cyan-700 transition-colors">
                          {index + 1}. {option.label}
                        </span>
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ml-3 ${getRatingColor(option.rating)}`}>
                          {option.rating}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Selected Option Display */}
            {selectedProof && (
              <div className="mt-8 p-6 bg-cyan-50 border-l-4 border-cyan-600 rounded-lg animate-in fade-in duration-300">
                <p className="text-sm text-gray-600 mb-2 font-semibold">Selected Proof:</p>
                <p className="text-lg text-gray-900 font-bold">{selectedProof}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 pt-8">
              <button
                onClick={() => setSelectedProof(null)}
                className="flex-1 px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all duration-200 hover:border-gray-400"
              >
                Clear Selection
              </button>
              <button
                disabled={!selectedProof}
                className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                  selectedProof
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-600/50 cursor-pointer"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                <span>Continue</span>
                <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
              </button>
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-gray-900 font-bold text-sm mb-4">How to Rate Your Proof:</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <div className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 bg-green-500`}></div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Good</p>
                  <p className="text-gray-600 text-xs">Most recent & verifiable</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 bg-yellow-500`}></div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Fair</p>
                  <p className="text-gray-600 text-xs">Recently dated</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 bg-red-500`}></div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Poor</p>
                  <p className="text-gray-600 text-xs">May be older</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-cyan-200 text-sm">
            Need help? <a href="mailto:iarrd.official@gmail.com" className="text-cyan-300 font-semibold hover:text-white transition-colors">Contact our support team</a>
          </p>
        </div>
      </div>
    </div>
  );
}
