import React from 'react';
import { FaWrench, FaCogs, FaCheckCircle } from 'react-icons/fa'; // Importing React Icons

const ExpertTeam = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'Founder & Lead Technician',
      experience: '20+ years experience in automotive repair. Specializes in engine diagnostics and complex mechanical repairs. City & Guilds qualified with ongoing professional development.',
      initials: '',
      icon: "JS",
      bgColor: 'bg-teal-200',
      iconColor: 'text-primary',
    },
    {
      name: 'Mike Johnson',
      role: 'Senior Technician',
      experience: '15+ years experience specializing in brake systems, suspension work, and MOT testing. DVSA approved MOT tester with expertise in all vehicle types.',
      initials: 'MJ',
      icon: <FaCogs size={40} />,
      bgColor: 'bg-orange-200',
      iconColor: 'text-accent',
    },
    {
      name: 'Sarah Williams',
      role: 'Service Advisor',
      experience: '10+ years in automotive customer service. Ensures clear communication between our technicians and customers, providing detailed explanations and honest advice.',
      initials: 'SW',
      icon: <FaCheckCircle size={40} />,
      bgColor: 'bg-teal-200',
      iconColor: 'text-primary',
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">Meet Our Expert Team</h2>
        <p className="text-lg mb-12">Our skilled technicians bring decades of combined experience and a passion for automotive excellence</p>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-card text-card-foreground flex flex-col rounded-xl border py-6 shadow-sm border-border text-center">
              <div className={`w-18 h-18 ${member.bgColor} rounded-full flex items-center justify-center mx-auto`}>
                {member.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
              <p className="text-accent font-medium mb-5">{member.role}</p>
              <p className="text-muted-foreground leading-relaxed">{member.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertTeam;
