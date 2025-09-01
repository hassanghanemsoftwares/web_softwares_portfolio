import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Demonstration } from "@/types/api.interfaces";
import { useTranslation } from "react-i18next";
interface DemonstrationsSectionProps {
  demonstrations: Demonstration[];
  i18n: { language: string };
  getText: (text: Record<string, string> | undefined, lang: string) => string;
  getYouTubeVideoId: (url: string) => string | null;
}

const DemonstrationsSection: React.FC<DemonstrationsSectionProps> = ({
  demonstrations,
  i18n,
  getText,
  getYouTubeVideoId,
}) => {
  const [open, setOpen] = useState(false);
  const [currentDemo, setCurrentDemo] = useState<Demonstration | null>(null);

  const { t } = useTranslation();

  const handlePlay = (demo: Demonstration) => {
    setCurrentDemo(demo);
    setOpen(true);
  };

  if (!demonstrations || demonstrations.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {demonstrations.map((demo, index) => {
          const videoId = getYouTubeVideoId(demo.video_url);
          const thumbnail = videoId
            ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
            : "/fallback-thumbnail.jpg";

          return (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div
                className="relative aspect-video flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${thumbnail})` }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>

                <Button
                  size="lg"
                  className="relative z-10 group-hover:scale-110 transition-transform duration-300"
                  onClick={() => handlePlay(demo)}
                >
                  <Play className="mr-2 h-6 w-6" />
                  {t("playDemo")}
                </Button>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {getText(demo.title, i18n.language)}
                </h3>
                <p className="text-muted-foreground">
                  {getText(demo.description, i18n.language)}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          <DialogHeader className="p-4">
            <DialogTitle>
              {currentDemo && getText(currentDemo.title, i18n.language)}
            </DialogTitle>
          </DialogHeader>
          {currentDemo && (
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeVideoId(
                  currentDemo.video_url
                )}`}
                title={t("demoVideo")}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DemonstrationsSection;
