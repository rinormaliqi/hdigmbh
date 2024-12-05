import React from 'react';

function ContactInfo() {
  const contactDetails = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-blue-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m2.25-2.25h15a2.25 2.25 0 012.25 2.25z"
          />
        </svg>
      ),
      title: 'E-Mail-Adresse',
      details: ['info@hdigmbh.ch', 'support@hdigmbh.ch'],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-blue-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 8.25c0-2.485 2.015-4.5 4.5-4.5h7.5c2.485 0 4.5 2.015 4.5 4.5v7.5c0 2.485-2.015 4.5-4.5 4.5h-7.5c-2.485 0-4.5-2.015-4.5-4.5v-7.5z"
          />
        </svg>
      ),
      title: 'Telefonnummer',
      details: ['+41 76 804 49 77'],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-blue-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75v6.75m0 0L8.25 9m3.75 4.5L15.75 9M2.25 12a9.75 9.75 0 1119.5 0a9.75 9.75 0 01-19.5 0z"
          />
        </svg>
      ),
      title: 'Unsere Adresse',
      details: ['56340 Oberneuhofstrasse', 'Baar, Schweiz'],
    },
  ];

  return (
    <div className='flex flex-col gap-8'>
<div className="flex flex-col items-center justify-center text-center mt-14 mb-10 lg:mt-20">
<h2
            className={`text-base text-primary font-semibold tracking-wide uppercase text-red-600`}
          >
            Kontakt
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Information
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Montag-Freitag: 08:00 - 22:00
          </p>
        </div>
        <div className="bg-gray-50 p-10 flex justify-center">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {contactDetails.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <div className="p-4 bg-blue-100 rounded-full">{item.icon}</div>
            <h3 className="mt-4 text-lg font-bold text-gray-800">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-gray-500 space-y-1">
              {item.details.map((detail, i) => (
                <span key={i} className="block">
                  {detail}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
   
  );
}

export default ContactInfo;
