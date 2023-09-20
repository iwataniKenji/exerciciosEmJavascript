import { useMemo } from "react";

export function Main() {
  const currentDateAndHour = new Date().toLocaleString("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  });
  const currentHour = new Date().getHours();

  const greetings = useMemo(() => {
    if (currentHour >= 0 && currentHour < 12) {
      return "Bom dia";
    }

    if (currentHour >= 12 && currentHour < 18) {
      return "Boa tarde";
    }

    return "Boa noite";
  }, []);

  return (
    <main
      style={{
        flex: "70%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid black",
      }}
    >
      <h2>{`${currentDateAndHour} - ${greetings}`}</h2>
    </main>
  );
}
