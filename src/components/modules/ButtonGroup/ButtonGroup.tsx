import React from "react";
import {AppButton} from "../../styled";

//style chính là cục gạch, và ghép style lại với nhau thành component
export interface ButtonGroupProps {
  numButtons?: number;
  onButtonClick?: (index: number) => void;
}

export const ButtonGroup = ({
  numButtons = 3,
  onButtonClick,
}: ButtonGroupProps) => {
  return (
    <div>
      {Array.from({length: numButtons}, (_, index) => (
        <AppButton
          kind="primary"
          key={index}
          onPress={() => onButtonClick?.(index)}
        >
          Button {index + 1}
        </AppButton>
      ))}
    </div>
  );
};
