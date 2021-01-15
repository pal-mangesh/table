import React, { ReactElement } from "react";

interface Props {
  onChange?: any;
  value?: string;
}

function Input({ value, onChange }: Props): ReactElement {
  const onInputChange = (e: any) => {
    const { value } = e.target;
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <>
      <input value={value} onChange={onInputChange} />
    </>
  );
}

export default Input;
