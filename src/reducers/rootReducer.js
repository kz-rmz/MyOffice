// eslint-disable-next-line no-unused-vars
const initState = {
  history: [
    {
      id: 0,
      date: Date(2020, 2, 12),
      worker: "Электрик",
      isDone: true
    },
    {
      id: 1,
      date: new Date(2020, 2, 12),
      worker: "Сантехник",
      isDone: true
    }
  ],
  //----------------------------------------
  payHistory: [
    {
      id: 0,
      date: "2012 - 02 - 20",
      expirationDate: "2012 - 03 - 20",
      amount: 27200,
      isPaid: true
    },
    {
      id: 1,
      date: "2012 - 02 - 20",
      expirationDate: "2012 - 03 - 20",
      amount: 27200,
      isPaid: true
    }
  ],
  //----------------------------------------
  profile: [
    {
      id: 0,
      building: " БЦ 'В7' ",
      company: "Фирма",
      bin: 83011232545,
      room: 102,
      space: 13.6,
      price: 2000,
      total() {
        return this.price * this.space;
      }
    }],
  //----------------------------------------
  docs: [
    {
      id: 0,
      name: "Договор аренды",
    },
    {
      id: 1,
      name: "Счет на оплату",
    }],
  //---------------------------
  workers: [
    {
      id: 0,
      name: "Электрик",
      content: ["Не горит свет", "Нет электричества", "Не работает розетка"],
    },
    {
      id: 1,
      name: "Сантехник",
      content: ["Нет воды", "Нет отопления", "Проблемы с сантехникой"],
    },
    {
      id: 2,
      name: "Уборка",
      content: ["Убрать помещение", "Вывезти мусор"],
    },
    {
      id: 3,
      name: "Связь",
      content: ["Не работает интернет", "Нет телефонной связи"],
    }
  ]
}

const rootReducer = (state = initState, action) => {
  return state;
}

export default rootReducer;