interface newSettings {
  algorithm: string;
  numBars: number;
  speed: number;
  sort: boolean;
  shuffle: boolean;
}

export const changeSettings = <T extends newSettings>(
  graphSettings: T,
  setterFunction: (value: T) => void, // Adjusted type to match setGraphSettings
  valueToChange: Partial<T>
) => {
  setterFunction({ ...graphSettings, ...valueToChange }); // Ensuring compatibility with setterFunction
};
