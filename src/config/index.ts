export default {
  paths: {
    list: "/people",
    character: (characterId: string) => `/people/${characterId}`,
  },

  defaultPage: "1",
  defaultRowsPerPage: 10,
}
