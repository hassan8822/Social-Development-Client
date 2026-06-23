const Gallery = () => {
 
  const galleryImages = [
    {
      id: 1,
      title: "Beach Cleanup Drive in Cox's Bazar",
      category: "Environment",
      image: "https://images.unsplash.com/photo-1616680214084-22670de1bc82?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Tree Plantation - Hossainpur, Kishoreganj",
      category: "Nature",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Slum Children's Education Support",
      category: "Education",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      title: "Road Cleanup in Dhaka",
      category: "Environment",
      image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: 5,
      title: "Healthcare Camp for Elderly in Barisal",
      category: "Health",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: 6,
      title: "Volunteer Firefighting Training - Chittagong",
      category: "Safety",
      image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=600&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        
   
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Event Gallery</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-500 mt-2">
            Glimpses of our community impact and social development initiatives
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white cursor-pointer h-64"
            >
          
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
           
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="text-lg font-semibold text-white leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;