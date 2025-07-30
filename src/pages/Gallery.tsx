import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      image: gallery1,
      title: 'Professional Hair Styling',
      category: 'hairstyling',
      description: 'Modern cut and styling for professional look'
    },
    {
      id: 2,
      image: gallery2,
      title: 'Bridal Makeup & Hair',
      category: 'bridal',
      description: 'Complete bridal transformation for the special day'
    },
    {
      id: 3,
      image: gallery3,
      title: 'Trendy Hair Cut',
      category: 'haircut',
      description: 'Contemporary haircut with precision styling'
    },
    {
      id: 4,
      image: gallery4,
      title: 'Hair Coloring & Highlights',
      category: 'coloring',
      description: 'Beautiful color transformation with highlights'
    },
    {
      id: 5,
      image: gallery5,
      title: 'Relaxing Hair Spa',
      category: 'spa',
      description: 'Rejuvenating hair spa treatment experience'
    },
    {
      id: 6,
      image: gallery6,
      title: 'Professional Makeup',
      category: 'makeup',
      description: 'Flawless makeup for special occasions'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Work', count: galleryItems.length },
    { id: 'haircut', name: 'Hair Cuts', count: galleryItems.filter(item => item.category === 'haircut').length },
    { id: 'coloring', name: 'Hair Coloring', count: galleryItems.filter(item => item.category === 'coloring').length },
    { id: 'bridal', name: 'Bridal', count: galleryItems.filter(item => item.category === 'bridal').length },
    { id: 'makeup', name: 'Makeup', count: galleryItems.filter(item => item.category === 'makeup').length },
    { id: 'spa', name: 'Spa Treatments', count: galleryItems.filter(item => item.category === 'spa').length },
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const previousImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : filteredItems.length - 1);
    }
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage < filteredItems.length - 1 ? selectedImage + 1 : 0);
    }
  };

  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4 gradient-text">
            Our Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of stunning transformations and see the artistry that goes into each of our services. Every image tells a story of beauty and excellence.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              onClick={() => setActiveFilter(category.id)}
              className={`${
                activeFilter === category.id 
                  ? 'btn-gradient' 
                  : 'border-2 hover:border-primary hover:text-primary'
              } transition-all duration-300`}
            >
              {category.name}
              <Badge variant="secondary" className="ml-2">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-poppins font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-white/90">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center glass p-8 rounded-2xl">
          <h3 className="text-2xl font-poppins font-bold mb-4">
            Want to Be Our Next Success Story?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Book your appointment today and let our talented team create a transformation that you'll love. Join our gallery of satisfied clients!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-gradient">
              <Link to="/booking">Book Your Session</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={filteredItems[selectedImage].image}
              alt={filteredItems[selectedImage].title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            {filteredItems.length > 1 && (
              <>
                <button
                  onClick={previousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="font-poppins font-semibold text-xl mb-2">
                {filteredItems[selectedImage].title}
              </h3>
              <p className="text-white/90">{filteredItems[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;