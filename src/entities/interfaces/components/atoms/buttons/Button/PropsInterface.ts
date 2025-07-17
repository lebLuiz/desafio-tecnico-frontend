import type { SeverityType as ButtonSeverityType } from "@/entities/types/components/atoms/buttons/Button/SeverityType";

export default interface PropsInterface {
  disabled?: boolean;
  text?: string;
  severity?: ButtonSeverityType;
}
