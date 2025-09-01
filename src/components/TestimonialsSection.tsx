import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Testimonial } from "@/types/api.interfaces";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  i18n: { language: string };
  getText: (text: Record<string, string> | undefined, lang: string) => string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
  i18n,
  getText,
}) => {
  if (!testimonials || testimonials.length === 0) return null;

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <Card
          key={index}
          className="animate-scale-in"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-muted-foreground mb-6 italic">
              {getText(testimonial.content, i18n.language)}
            </p>
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-semibold text-sm">
                  {getText(testimonial.name, i18n.language).charAt(0)}
                </span>
              </div>
              <div>
                <div className="font-semibold">
                  {getText(testimonial.name, i18n.language)}
                </div>
                <div className="text-sm text-muted-foreground">
                  {getText(testimonial.role, i18n.language)},{" "}
                  {getText(testimonial.company, i18n.language)}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

  );
};

export default TestimonialsSection;
