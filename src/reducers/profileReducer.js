export const profileState = {
  profile: [
    {
      building: " БЦ 'В7' ",
      company: "Фирма",
      bin: 83011232545,
      room: 102,
      space: 13.6,
      price: 2000,
      total() {
        return this.price * this.space;
      }
    },
    {

    }
  ]
}

