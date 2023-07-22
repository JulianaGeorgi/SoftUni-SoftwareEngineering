import { Tip } from "./tip";

export interface User {
    email: string;
    username: string;
    userId: string | null;
    tipsCollection?: Tip ;
  }
  