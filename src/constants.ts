export const IDS = {
  button: "button",
  container: "container",
} as const;

export const MESSAGES = {
  containerFound: `Znaleziono formularz ${IDS.container}`,
  error: {
    basic: "Error",
    containerNotFound: `Nie znaleziono kontenera ${IDS.container}. Skrypt został wstrzymany.`,
  },
} as const;
