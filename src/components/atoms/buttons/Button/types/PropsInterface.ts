import type { SeverityType as ButtonSeverityType } from "@/components/atoms/buttons/Button/types/SeverityType";

export default interface PropsInterface {
  disabled?: boolean;
  text?: string;
  severity?: ButtonSeverityType;
}
