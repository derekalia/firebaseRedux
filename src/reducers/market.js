import market from '../Cards/cards';

export default function (state = market, action) {
  const copy = Object.assign({}, state);
  switch (action.type) {
    case 'BUY_CARD':
      for (let i = 0; i < copy.face_up.length; i++) {
        if (copy.face_up[i].title === action.card) {
          copy.face_up.splice(i, 1);
        }
      }
      return copy;
    case 'DEAL_CARD':
      const toBeDealt = copy.deck[0];
      copy.face_up.push(toBeDealt);
      copy.deck.shift();
      return copy;
    case 'DEAL_NEW_MARKET':
      return state;
    default:
      return state;
  }
}
