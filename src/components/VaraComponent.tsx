import { useEffect, useRef } from "react";
import Vara from "vara";

interface VaraComponentProps {
  text: string;
  fontSize?: number;
}

const VaraComponent = ({ text, fontSize = 46 }: VaraComponentProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      // Clear any existing content
      while (elementRef.current.firstChild) {
        elementRef.current.removeChild(elementRef.current.firstChild);
      }

      // Initialize Vara
      new Vara(
        `#${elementRef.current.id}`,
        "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
        [
          {
            text: text,
          },
        ],
        {
          fontSize: fontSize,
          textAlign: "center",
          strokeWidth: 2,
          duration: 5000,
        },
      );
    }
  }, [text, fontSize]);

  return <div ref={elementRef} id="vara-container"></div>;
};

export default VaraComponent;
