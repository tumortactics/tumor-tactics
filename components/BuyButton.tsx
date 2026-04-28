export default function BuyButton() {
  return (
    <div
      style={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "259px",
        background: "#FFFFFF",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        boxShadow: "-2px 10px 5px rgba(0, 0, 0, 0)",
        borderRadius: "10px",
        fontFamily: "SQ Market, Helvetica, Arial, sans-serif",
      }}
    >
      <div style={{ padding: "20px" }}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://square.link/u/5eGF3o7o?src=embed"
          style={{
            display: "inline-block",
            fontSize: "18px",
            lineHeight: "48px",
            height: "48px",
            color: "#ffffff",
            minWidth: "212px",
            backgroundColor: "#006aff",
            textAlign: "center",
            boxShadow: "0 0 0 1px rgba(0,0,0,.1) inset",
            borderRadius: "6px",
            textDecoration: "none",
          }}
        >
          Buy now
        </a>
      </div>
    </div>
  );
}