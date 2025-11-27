export const IDS = {
  container: "container",
} as const;

export const SELECTORS = {
  container: `.container`,
} as const;

export const MESSAGES = {
  containerFound: `Znaleziono kontener ${IDS.container}`,
  error: {
    basic: "Error",
    containerNotFound: `Nie znaleziono kontenera ${IDS.container}. Skrypt został wstrzymany.`,
  },
} as const;
