import { useState } from "react";

type UseToggleReturnType = [boolean, () => void];

const useToggle = (initialValue: boolean = false): UseToggleReturnType => {
  const [state, setState] = useState<boolean>(initialValue);

  const toggle = () => setState((prevState) => !prevState);

  return [state, toggle];
};

export default useToggle;
