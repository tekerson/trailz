import Reflux from "reflux";

export default Reflux.createActions({
  fetchList: { asyncResult: true },
  togglePark: {},
  toggleTrail: { asyncResult: true },
});
