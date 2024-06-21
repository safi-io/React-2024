export default function Activity({ name, colorName }) {
  let styles = { color: colorName };
  return (
    <>
      <h2 style={styles}>Hello {name.toUpperCase()} and 
        your color was {colorName.toUpperCase()}.
      </h2>
    </>
  );
}