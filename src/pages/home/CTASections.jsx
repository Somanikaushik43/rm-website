import { Linkedin } from "lucide-react";

const CTASection = () => {
  const teamMembers = [
    {
      name: "Mira Smith",
      role: "Business Consultant",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      color: "bg-pink-200",
      featured: true,
    },
    {
      name: "Sarah Johnson",
      role: "Financial Advisor",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      color: "bg-amber-100",
    },
    {
      name: "Michael Chen",
      role: "Risk Analyst",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      color: "bg-indigo-200",
    },
    {
      name: "David Park",
      role: "Compliance Officer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      color: "bg-green-200",
    },
    {
      name: "James Wilson",
      role: "Audit Manager",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      color: "bg-red-200",
    },
    {
      name: "Robert Lee",
      role: "Senior Auditor",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      color: "bg-cyan-200",
    },
  ];

  // Avatar images for top (first 3 members)
  const topAvatars = [
    "https://www.riskman.in/wp-content/uploads/2020/09/sukanta-nag.jpg",
    "https://www.riskman.in/wp-content/uploads/2020/09/prasen-pal.jpg",
    "https://www.riskman.in/wp-content/uploads/2020/09/arpit-garg.jpg",
  ];

  return (
    <section
      className="
        relative w-full
        transition-colors duration-300
        bg-orange-50/40
        dark:bg-[#06071B]
        py-20 md:py-28
      "
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* TOP AVATARS */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center -space-x-4">
            {topAvatars.map((avatar, i) => (
              <div
                key={i}
                className="relative w-14 h-14 rounded-full border-4 border-white dark:border-[#06071B] overflow-hidden shadow-lg"
              >
                <img
                  src={avatar}
                  alt={`Team member ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            <div className="relative w-14 h-14 rounded-full border-4 border-white dark:border-[#06071B] bg-amber-400 flex items-center justify-center shadow-lg">
              <span className="text-sm font-bold text-stone-900">12K+</span>
            </div>
          </div>
        </div>

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-stone-900 dark:text-white">
          Create Your Success
        </h2>

        {/* DESCRIPTION */}
        <p className="text-center max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-10 text-stone-600 dark:text-white/70">
          Receive personalized guidance from seasoned startup advisors who have
          not only navigated the challenges of launching a business but have
          also successfully built their own ventures.
        </p>

        {/* CTA BUTTON */}
        <div className="flex justify-center mb-12">
          <a 
            href="/contact"
            className="
              inline-block px-8 py-4 font-semibold rounded-lg shadow-lg
              transition-all duration-300
              bg-orange-600 text-white
              hover:bg-orange-700
              dark:bg-indigo-600 dark:text-white
              dark:hover:bg-indigo-700
            "
          >
            Schedule a Free Consultation
          </a>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`
                relative rounded-2xl overflow-hidden aspect-[3/4]
                ${member.color}
                transition-transform duration-300 hover:-translate-y-2
                ${member.featured ? 'md:col-span-1' : ''}
              `}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"
              />
              
              {/* NAME OVERLAY (Featured member only) */}
              {member.featured && (
                <div className="absolute top-4 left-4 right-4">
                  <h3 className="text-stone-900 font-semibold text-sm mb-0.5">
                    {member.name}
                  </h3>
                  <p className="text-stone-700 text-xs">
                    {member.role}
                  </p>
                </div>
              )}

              {/* LINKEDIN ICON (Featured member only) */}
              {member.featured && (
                <div className="absolute bottom-4 left-4">
                  <div className="w-8 h-8 bg-stone-900 rounded flex items-center justify-center">
                    <Linkedin size={16} className="text-white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CAPTION */}
        <p className="text-center text-sm text-stone-500 dark:text-white/50">
          Our leader board
        </p>
      </div>
    </section>
  );
};

export default CTASection;