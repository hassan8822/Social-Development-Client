


const feature = [
  {
    title: "Create Social Events",
    desc: "Easily create community service events like tree plantation, cleaning, donation.",
    img: "https://i.ibb.co.com/TBq4TJDf/pexels-weavehall-collective-746895245-18935695.jpg",
    icon: "📅",
  },
  {
    title: "Join Community Events",
    desc: "Join nearby social service events and work together with volunteers.",
    img: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
    icon: "🤝",
  },
  {
    title: "Find Local Events",
    desc: "Discover events happening around your area instantly.",
    img: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg",
    icon: "📍",
  },
  {
    title: "Event Notifications",
    desc: "Get instant updates about upcoming and joined events.",
    img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
    icon: "🔔",
  },
  {
    title: "Team Collaboration",
    desc: "Work together with community members for social impact.",
    img: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg",
    icon: "👥",
  },
  {
    title: "Track Impact",
    desc: "See how your contribution is making real change in society.",
    img: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
    icon: "📊",
  },
];

export default function Feature() {
  return (
    <section className="py-16 bg-linear-to-r from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-10">
  Featured topics
</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {feature.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <img src={item.img} alt={item.title} className="h-40 w-full object-cover" />
              <div className="p-5 text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}