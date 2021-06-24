import Icon from "./assets/icon.svg"
import MyWallet from "./pages/MyWallet"
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Price from "./pages/Price";

const routes =  [
  {
    path: "/wallet",
    component: MyWallet,
    icon: Icon,
    name: "MY WALLET"
  },
  {
    path: "/buy",
    component: Buy,
    icon: Icon,
    name: "BUY BITCOIN"
  },
  {
    path: "/sell",
    component: Sell,
    icon: Icon,
    name: "SELL BITCOIN"
  },
  {
    path: "/bitcoin",
    component: Price,
    icon: Icon,
    name: "BITCOIN PRICE"
  },
]

export default routes