import { PhotoCarousel } from "@/components/PhotoCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95 py-12">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Photo Carousel
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience stunning landscapes with smooth navigation, auto-play, and keyboard controls
          </p>
        </header>

        <main className="animate-scale-in">
          <PhotoCarousel />
        </main>

        <footer className="mt-16 text-center text-sm text-muted-foreground animate-fade-in">
          <p>Use arrow keys to navigate • Space to pause/play • Click thumbnails to jump</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
