import { motion } from "framer-motion";
import { useEffect } from "react";

interface Props {
  link: string;
  closePreview: () => void;
}

const ImagePreview: React.FC<Props> = ({ link, closePreview }: Props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black/80 z-[200] backdrop-blur-sm p-3 sm:p-5"
      onClick={closePreview}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        onClick={(e: React.SyntheticEvent) => e.stopPropagation()}
        className="w-[60vh] h-[60vh] max-w-[500px] max-h-[500px]"
      >
        <img src={link} alt={link} className="object-contain h-full w-full rounded-sm p-4" />
      </div>
    </motion.div>
  );
};

export default ImagePreview;
