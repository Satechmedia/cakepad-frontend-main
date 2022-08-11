interface AdminState {
  token?: string | null;
  adminFilter?: "completed" | "active" | "paused" | "unlisted";
  projects?: Project[];
  profile?: any;
}

interface AdminAction {
  type: "SET_PROJECTS" | "SET_TOKEN" | "SET_PROFILE" | "SET_ADMIN_FILTER";
  payload: AdminState["token" | "adminFilter" | "projects"];
}
