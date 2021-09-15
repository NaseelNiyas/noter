declare module '@naseelniyas/unique_id'

export interface NoterType {
  id: string;
  name: string;
  data: string;
}

export interface ContextProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  noters: NoterType[];
  setNoters: Dispatch<SetStateAction<[]>>;
}

export interface SingleNoterTypes {
  noter: NoterType;
}