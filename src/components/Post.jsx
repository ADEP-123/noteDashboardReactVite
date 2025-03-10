const names = ["Maximilian", "Manuel", "Andres", "Camilo"];

export default function Post() {
  const chosenName =
    names[Math.floor(Math.random() * (names.length - 1 - 0 + 1)) + 0];
  return (
    <div>
      <p>{chosenName}</p>
      <p>text example</p>
    </div>
  );
}
