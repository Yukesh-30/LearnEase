import React from 'react'
import Background from '../../components/Background'

function Features({ isDark }) {
  const features = [
    {
      title: "AI-Powered Adaptive Multiplayer Quiz/Game Engine (Hook)",
      color: "pink",
      icon: (
        <svg
          className="stroke-pink-600 transition-all duration-500 group-hover:stroke-white"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2.5 7.5C2.5 4.73858 4.73858 2.5 7.5 2.5C10.2614 2.5 12.5 4.73858 12.5 7.5C12.5 10.2614 10.2614 12.5 7.5 12.5C4.73858 12.5 2.5 10.2614 2.5 7.5Z" strokeWidth="2"></path>
          <path d="M2.5 22.5C2.5 20.143 2.5 18.9645 3.23223 18.2322C3.96447 17.5 5.14298 17.5 7.5 17.5C9.85702 17.5 11.0355 17.5 11.7678 18.2322C12.5 18.9645 12.5 20.143 12.5 22.5C12.5 24.857 12.5 26.0355 11.7678 26.7678C11.0355 27.5 9.85702 27.5 7.5 27.5C5.14298 27.5 3.96447 27.5 3.23223 26.7678C2.5 26.0355 2.5 24.857 2.5 22.5Z" strokeWidth="2"></path>
          <path d="M17.5 7.5C17.5 5.14298 17.5 3.96447 18.2322 3.23223C18.9645 2.5 20.143 2.5 22.5 2.5C24.857 2.5 26.0355 2.5 26.7678 3.23223C27.5 3.96447 27.5 5.14298 27.5 7.5C27.5 9.85702 27.5 11.0355 26.7678 11.7678C26.0355 12.5 24.857 12.5 22.5 12.5C20.143 12.5 18.9645 12.5 18.2322 11.7678C17.5 11.0355 17.5 9.85702 17.5 7.5Z" strokeWidth="2"></path>
          <path d="M17.5 22.5C17.5 19.7386 19.7386 17.5 22.5 17.5C25.2614 17.5 27.5 19.7386 27.5 22.5C27.5 25.2614 25.2614 27.5 22.5 27.5C19.7386 27.5 17.5 25.2614 17.5 22.5Z" strokeWidth="2"></path>
        </svg>
      ),
      points: [
        "Multiple levels per topic",
        "Leaderboards",
        "Placement-relevant topics",
        "AI-assisted learning system",
      ],
    },
    {
      title: "Hosted Sessions (Meet-like)",
      color: "teal",
      icon: (
        <svg
          className="stroke-teal-600 transition-all duration-500 group-hover:stroke-white"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3.75 26.25H26.25M6.25 22.875C4.86929 22.875 3.75 21.8676 3.75 20.625V12.75C3.75 11.5074 4.86929 10.5 6.25 10.5C7.63071 10.5 8.75 11.5074 8.75 12.75V20.625C8.75 21.8676 7.63071 22.875 6.25 22.875ZM15 22.875C13.6193 22.875 12.5 21.8676 12.5 20.625V9.375C12.5 8.13236 13.6193 7.125 15 7.125C16.3807 7.125 17.5 8.13236 17.5 9.375V20.625C17.5 21.8676 16.3807 22.875 15 22.875ZM23.75 22.875C22.3693 22.875 21.25 21.8676 21.25 20.625V6C21.25 4.75736 22.3693 3.75 23.75 3.75C25.1307 3.75 26.25 4.75736 26.25 6V20.625C26.25 21.8676 25.1307 22.875 23.75 22.875Z" strokeWidth="2" strokeLinecap="round"></path>
        </svg>
      ),
      points: [
        "Anyone can host a session",
        "AI will summarize the live discussion",
        "Chat section among participants",
        "AI-assisted chat and session storage",
        "Shared Canvas",
      ],
    },
    {
      title: "Lecture Summarizer & Test Generator",
      color: "orange",
      icon: (
        <svg
          className="stroke-orange-600 transition-all duration-500 group-hover:stroke-white"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.4167 12.0833V21.25M5.41667 21.25V20.8333C5.41667 19.262 5.41667 18.4763 5.90482 17.9882C6.39298 17.5 7.17865 17.5 8.75 17.5H22.0833C23.6547 17.5 24.4404 17.5 24.9285 17.9882C25.4167 18.4763 25.4167 19.262 25.4167 20.8333V21.25M15.4167 9.16667C13.8453 9.16667 13.0596 9.16667 12.5715 8.67851C12.0833 8.19036 12.0833 7.40468 12.0833 5.83333C12.0833 4.26198 12.0833 3.47631 12.5715 2.98816C13.0596 2.5 13.8453 2.5 15.4167 2.5C16.988 2.5 17.7737 2.5 18.2618 2.98816C18.75 3.47631 18.75 4.26198 18.75 5.83333C18.75 7.40468 18.75 8.19036 18.2618 8.67851C17.7737 9.16667 16.988 9.16667 15.4167 9.16667Z" strokeWidth="2" strokeLinecap="round"></path>
        </svg>
      ),
      points: [
        "Upload PPT/PDF → AI summarizes",
        "Generate questions from uploaded content",
        "Conduct tests/quizzes from that content",
        "AI evaluates performance",
      ],
    },
  ];

  return (
    <section className="mb-32 -mt-8 flex flex-col items-center justify-between relative overflow-hidden no-custom-cursor">
      <div className="mx-auto my-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2
            className={`text-4xl font-heading text-center font-bold py-5 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Features
          </h2>
        </div>

        <div className="flex justify-center mt-5 items-start gap-x-5 gap-y-8 flex-wrap lg:flex-nowrap lg:gap-x-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="relative w-full text-center border-1 border-amber-500 p-4 rounded-lg max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4"
            >
              <div
                className={`bg-${feature.color}-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-orange-600`}
              >
                {feature.icon}
              </div>
              <h4 className={`text-lg ${isDark ? "text-white" : "text-gray-900"} mb-3 font-para font-light capitalize`}>
                {feature.title}
              </h4>
              <ul className="text-sm font-normal text-gray-500 text-left list-disc list-inside space-y-1">
                {feature.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features
