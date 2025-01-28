export default {
  paths: {
    list: "/people",
    character: (characterId: string) => `/people/${characterId}`,
  },
}
