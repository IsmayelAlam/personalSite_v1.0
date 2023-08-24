const style = {
  "text-align": "center",
  "font-size": "3.2rem",
  "font-weight": "500",
  "text-transform": "capitalize",
};

export default function SectionHeader({ title }) {
  return <h2 style={style}>{title}</h2>;
}
