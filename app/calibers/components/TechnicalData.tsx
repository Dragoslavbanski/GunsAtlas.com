type TechnicalDataProps = {
  title: string;
  data: [string, string][];
};

export default function TechnicalData({
  title,
  data,
}: TechnicalDataProps) {
  return (
    <div
      style={{
        width: "65%",
        margin: "50px auto 0 auto",
        padding: "9px 26px",
        border: "1px solid #d8b84c",
        borderRadius: "6px",
        backgroundColor: "#111",
        color: "#f0f0f0",
      }}
    >
      <h3
        style={{
          margin: "0 0 24px 0",
          paddingBottom: "14px",
          textAlign: "center",
          color: "#d8b84c",
          borderBottom: "1px solid #444",
          fontSize: "24px",
        }}
      >
        ТЕХНИЧЕСКИ ДАННИ НА {title}
      </h3>

      <div
  style={{
    width: "65%",
    margin: "0 auto",
  }}
>
  {data.map(([label, value]) => (
          <div
            key={label}
            style={{
              display: "grid",
              gridTemplateColumns: "45% 50%",
              gap: "20px",
              padding: "9px 4px",
              borderBottom: "1px solid #2f2f2f",
            }}
          >
            <span
  style={{
    color: "#cfcfcf",
    fontWeight: 600,
  }}
>
        
              {label}
            </span>

            <strong
              style={{
                color: "#ffffff",
                fontWeight: 600,
                textAlign: "right",
              }}
            >
              {value}
            </strong>
          </div>
        ))}
      </div>
    </div>
  );
}