import Image from "next/image"

// Create a wrapper component for optimized images
export function OptimizedImage({ src, alt, width, height, ...props }) {
  // For placeholder images, use a simple div instead of loading the placeholder
  if (src.includes("placeholder.svg")) {
    return (
      <div
        style={{
          width: width || "100%",
          height: height || 300,
          backgroundColor: "#f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className={props.className}
      >
        {alt}
      </div>
    )
  }

  return <Image src={src || "/placeholder.svg"} alt={alt} width={width} height={height} {...props} />
}

