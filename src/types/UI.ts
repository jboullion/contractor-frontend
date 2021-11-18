import { RenderFunction } from 'vue';
export interface DropdownOption {
  label: string;
  value: string | number;
}

export interface NavChildItem {
  name: string;
  to: string;
}

export interface NavigationItem {
  name: string;
  icon: RenderFunction;
  current: boolean;
  to?: string;
  children?: NavChildItem[];
}
