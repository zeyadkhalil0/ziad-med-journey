import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ClinicalMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState("");
  const [showTokenInput, setShowTokenInput] = useState(true);
  const { toast } = useToast();

  const initializeMap = (token: string) => {
    if (!mapContainer.current) return;

    try {
      mapboxgl.accessToken = token;

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [32.5498, 29.9668], // Suez, Egypt coordinates
        zoom: 13,
      });

      // Add marker for Suez University Faculty of Medicine
      new mapboxgl.Marker({ color: "#2563eb" })
        .setLngLat([32.5498, 29.9668])
        .setPopup(
          new mapboxgl.Popup().setHTML(
            "<h3 style='font-weight: bold; margin-bottom: 4px;'>Suez University Faculty of Medicine</h3><p style='font-size: 14px;'>Medical Campus, Suez, Egypt</p>"
          )
        )
        .addTo(map.current);

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

      setShowTokenInput(false);
      toast({
        title: "Map Loaded",
        description: "Location map has been initialized successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid Mapbox token. Please check and try again.",
        variant: "destructive",
      });
    }
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken);
    }
  };

  return (
    <section id="location" className="py-20 bg-accent/30">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Clinical Location</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Find my primary clinical training location at Suez University
        </p>

        <div className="max-w-5xl mx-auto">
          {showTokenInput ? (
            <Card className="p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Initialize Map</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                To display the interactive map, please enter your Mapbox public token. 
                Get one for free at{" "}
                <a 
                  href="https://mapbox.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  mapbox.com
                </a>
              </p>
              <form onSubmit={handleTokenSubmit} className="flex gap-3">
                <Input
                  type="text"
                  placeholder="pk.eyJ1IjoieW91cnVzZXJuYW1lIi..."
                  value={mapboxToken}
                  onChange={(e) => setMapboxToken(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" className="gap-2">
                  <Navigation className="w-4 h-4" />
                  Load Map
                </Button>
              </form>
            </Card>
          ) : null}

          <Card className="overflow-hidden">
            <div 
              ref={mapContainer} 
              className="w-full h-[500px] bg-accent"
            />
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="p-6 text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-sm text-muted-foreground">
                Suez University Faculty of Medicine<br />
                Suez, Egypt
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <Navigation className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Directions</h3>
              <p className="text-sm text-muted-foreground">
                Easy access via main roads<br />
                Parking available
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Campus</h3>
              <p className="text-sm text-muted-foreground">
                Modern medical facilities<br />
                Research laboratories
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
