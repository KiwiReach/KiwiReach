export function Placeholder({
  width,
  height,
  text,
}: { width: number | string; height: number | string; text?: string }) {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor: "#f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "0.5rem",
      }}
    >
      {text || ""}
    </div>
  )
}

