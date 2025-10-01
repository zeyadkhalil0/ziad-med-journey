import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { CalendarDays, Clock, Video, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const BookTime = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { toast } = useToast();

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", 
    "02:00 PM", "03:00 PM", "04:00 PM"
  ];

  const meetingTypes = [
    { icon: Video, title: "Virtual Meeting", description: "Online video consultation" },
    { icon: MapPin, title: "In-Person", description: "Meet at the clinic" },
    { icon: CalendarDays, title: "Study Group", description: "Join medical study session" }
  ];

  const handleBooking = (time: string) => {
    toast({
      title: "Consultation Booked!",
      description: `Your meeting is scheduled for ${date?.toLocaleDateString()} at ${time}`,
    });
  };

  return (
    <section id="book-time" className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Book a Time</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Schedule a consultation, study session, or discussion about medical topics
        </p>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {meetingTypes.map((type, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <type.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
              <p className="text-muted-foreground">{type.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <CalendarDays className="w-6 h-6 text-primary" />
              Select a Date
            </h3>
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6 text-primary" />
              Available Time Slots
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {timeSlots.map((time, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-14 hover:bg-primary hover:text-primary-foreground transition-all"
                  onClick={() => handleBooking(time)}
                >
                  {time}
                </Button>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6 text-center">
              All times are in Egypt Standard Time (EET)
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
