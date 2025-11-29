import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Download, Share2 } from "lucide-react";
import { useEffect, useCallback } from "react";

interface ImageLightboxProps {
  images: Array<{ image: string; title: string; description: string }>;
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ImageLightbox = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: ImageLightboxProps) => {
  const currentImage = images[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleKeyDown]);

  const handleDownload = async () => {
    const link = document.createElement("a");
    link.href = currentImage.image;
    link.download = `${currentImage.title.toLowerCase().replace(/\s+/g, "-")}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: currentImage.title,
          text: currentImage.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 backdrop-blur-xl"
          onClick={onClose}
        >
          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onClick={onClose}
            className="absolute right-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-card/10 text-card backdrop-blur-sm transition-colors hover:bg-card/20"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </motion.button>

          {/* Navigation Buttons */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 top-1/2 z-50 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-card/10 text-card backdrop-blur-sm transition-all hover:bg-card/20 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 z-50 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-card/10 text-card backdrop-blur-sm transition-all hover:bg-card/20 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </motion.button>

          {/* Main Image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="relative mx-auto max-h-[85vh] max-w-[90vw] overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage.image}
              alt={currentImage.title}
              className="h-auto max-h-[85vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl"
            />
          </motion.div>

          {/* Bottom Info Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/90 to-transparent px-6 py-8"
          >
            <div className="mx-auto flex max-w-4xl items-center justify-between">
              <div>
                <h2 className="font-display text-xl font-semibold text-card md:text-2xl">
                  {currentImage.title}
                </h2>
                <p className="mt-1 text-sm text-card/70 md:text-base">
                  {currentImage.description}
                </p>
                <p className="mt-2 text-xs text-card/50">
                  {currentIndex + 1} of {images.length}
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload();
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-card/10 text-card transition-colors hover:bg-card/20"
                  aria-label="Download image"
                >
                  <Download className="h-5 w-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShare();
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-card/10 text-card transition-colors hover:bg-card/20"
                  aria-label="Share image"
                >
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Dot Indicators */}
          <div className="absolute bottom-28 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  // Navigate to specific index
                  const diff = index - currentIndex;
                  if (diff > 0) {
                    for (let i = 0; i < diff; i++) onNext();
                  } else {
                    for (let i = 0; i < Math.abs(diff); i++) onPrev();
                  }
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-card"
                    : "w-2 bg-card/40 hover:bg-card/60"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageLightbox;
