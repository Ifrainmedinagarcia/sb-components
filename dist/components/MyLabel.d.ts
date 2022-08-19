/// <reference types="react" />
import "./mylabel.css";
export interface Props {
    /**
    * This is message size that will be displayed
    */
    label: string;
    /**
    * This is the size that will be displayed
    */
    size: "normal" | "h1" | "h2" | "h3";
    /**
    * toUpperCase to label text
    */
    allCaps?: boolean;
    /**
    * This is the color
    */
    color?: "primary" | "secondary" | "tertiary";
    /**
* This is the color
*/
    fontColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor }: Props) => JSX.Element;
