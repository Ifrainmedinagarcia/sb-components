import "./mylabel.css"


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
	allCaps?: boolean

	/**
 	* This is the color
 	*/
	 color?: "primary" | "secondary" | "tertiary"

	 	/**
 	* This is the color
 	*/
	 fontColor?: string
	 
}

export const MyLabel = ({ 
	allCaps= false,
	color="primary",
	label = "No Label", 
	size = "normal", 
	fontColor
}: Props): JSX.Element => {
		
	return (
		<span className={`label ${size} text-${color}`} style={{color: fontColor}}>
			{allCaps ? label.toUpperCase() : label}
		</span>
	)
}
