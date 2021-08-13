const AUTH_TOKEN = "fe82cbfd-d235-46a3-bc09-83aa1d123635";
export default class Request {
  constructor(
    url = "https://ajax.test-danit.com/api/v2/cards",
    token = AUTH_TOKEN,
    email = "in@m.ua",
    password = "qwert123",
    urlEmail = "https://ajax.test-danit.com/api/v2/cards/login"
  ) {
    this.url = url;
    this.token = token;
    this.receiveParams = {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };
    this.ChangeParams = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    };
    this.email = email;
    this.password = password;
    this.urlEmail = urlEmail;
  }
  async getAllCardsInfo() {
    const { data } = await axios.get(this.url, this.receiveParams);
    return data;
  }
  async allCardsLength() {
    const { data } = await axios.get(this.url, this.receiveParams);
    return data.length;
  }
  deleteCard(cardId) {
    axios
      .delete(this.url + `/${cardId}`, this.receiveParams)
      .then(({ status }) => {
        return status;
      });
  }
  async getCard(cardId) {
    const { data } = await axios.get(
      this.url + `/${cardId}`,
      this.receiveParams
    );
    return data;
  }
  async changeCard(cardId, requestBody) {
    const { data } = await axios.put(
      this.url + `/${cardId}`,
      requestBody,
      this.ChangeParams
    );
    return data;
  }
  async createCard(requestBody) {
    const { data } = await axios.post(this.url, requestBody, this.ChangeParams);
    return data;
  }
  loginToThePage(log, pass) {
    const token = axios(this.urlEmail, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({ email: log, password: pass }),
    }).then((token) => token.data);
    this.token = token;
    return this.token;
  }
}
