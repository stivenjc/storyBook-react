import React from "react";
import "./MyLabel.css";
import { AllCaps } from "../stories/components/MyLabel.stories";

export interface Props {
  /**
   * este es el mensaje a mostrar en la etiqueta
   */
  label: string;
  /**
   * este es el tamaño de la etiqueta
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * colores basicos de boton
   */

  color?: "text-primary" | "text-secondary" | "text-tertiary";
  /**
   * si quiere todo en mayusculas
   */
  allCaps?: boolean;
  /**
   * color personalizado de la fuente
   */
  fontColor?: string;
}

export const MyLabel = ({
  size = "normal",
  label = "No Label",
  allCaps = false,
  color = "text-primary",
  fontColor,
}: Props) => {
  return (
    <span className={`label ${size} ${color}`} style={{ color: fontColor }}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
