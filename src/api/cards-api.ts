import data from "./data";

class CardsApi {
    setCards() {
        return new Promise((res, rej) => {
            try {
                setTimeout(() => {
                    res(data)
                }, 2000)
            } catch (err) {
                rej(err)
            }
        })
    }
}

export const cardsApi = new CardsApi()