import { useMutation } from "@tanstack/react-query";
import { GithubUser } from "./types";
type Payload = {
  username: "string";
};

const BASE_URL = "https://api.github.com";

export default function useGithubUsers() {
  const {} = useMutation({
    mutationFn: async (payload: Payload) => {
      const response = await fetch(
        `${BASE_URL}/search/users?q=` + payload.username
      );
      return response.json() as Promise<GithubUser>;
    },
  });
}
