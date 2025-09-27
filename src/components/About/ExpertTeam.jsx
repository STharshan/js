import React from 'react';
import { FaCogs, FaCheckCircle } from 'react-icons/fa'; // Importing React Icons

const ExpertTeam = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'Founder & Lead Technician',
      experience:
        '20+ years experience in automotive repair. Specializes in engine diagnostics and complex mechanical repairs. City & Guilds qualified with ongoing professional development.',
      icon: "JS",
      bgColor: 'bg-teal-200',
    },
    {
      name: 'Mike Johnson',
      role: 'Senior Technician',
      experience:
        '15+ years experience specializing in brake systems, suspension work, and MOT testing. DVSA approved MOT tester with expertise in all vehicle types.',
      icon: <FaCogs size={40} />,
      bgColor: 'bg-orange-200',
    },
    {
      name: 'Sarah Williams',
      role: 'Service Advisor',
      experience:
        '10+ years in automotive customer service. Ensures clear communication between our technicians and customers, providing detailed explanations and honest advice.',
      icon: <FaCheckCircle size={40} />,
      bgColor: 'bg-teal-200',
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">Meet Our Expert Team</h2>
        <p className="text-lg mb-12">
          Our skilled technicians bring decades of combined experience and a
          passion for automotive excellence
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="
                bg-white flex flex-col rounded-xl py-6 px-4 text-center shadow-md
                transition-all duration-300
                hover:shadow-[0_0_25px_#00BFA5]
                active:shadow-[0_0_25px_#00BFA5]
              "
            >
              <div
                className={`w-20 h-20 ${member.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-gray-800`}
              >
                {member.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-teal-600 font-medium mb-5">{member.role}</p>
              <p className="text-gray-600 leading-relaxed">
                {member.experience}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertTeam;
