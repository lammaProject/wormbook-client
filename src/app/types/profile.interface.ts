enum Role {
  "admin" = "admin",
  "user" = "user",
  "mod" = "mod",
}

export interface ProfileInterface {
  id: number;
  username: string;
  role: Role;
}
