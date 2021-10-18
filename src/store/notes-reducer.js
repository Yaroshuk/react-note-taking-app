import { COLOR_FILTER } from "./constants";

const DUMMY_NOTES = [
  {
    id: "n0",
    text: "It's my first note AWESOME!!!",
    colorFilter: COLOR_FILTER.none,
  },
  {
    id: "n1",
    text: "Ad tempor ea velit duis ullamco reprehenderit laboris.",
    colorFilter: COLOR_FILTER.orange,
  },
  {
    id: "n2",
    text: "Anim amet ad culpa esse elit consectetur laboris anim do irure sit. Sit quis ad exercitation enim nulla aliquip amet nulla. Laborum in nisi est quis excepteur consequat.",
    colorFilter: COLOR_FILTER.green,
  },
  {
    id: "n2",
    text: "Anim amet ad culpa esse elit consectetur laboris anim do irure sit. Sit quis ad exercitation enim nulla aliquip amet nulla. Laborum in nisi est quis excepteur consequat.",
    colorFilter: COLOR_FILTER.blue,
  },
  {
    id: "n2",
    text: "Anim amet ad culpa esse elit consectetur laboris anim do irure sit. Sit quis ad exercitation enim nulla aliquip amet nulla. Laborum in nisi est quis excepteur consequat.",
    colorFilter: COLOR_FILTER.none,
  },
];
const initialState = [...DUMMY_NOTES];

const notesReducer = (state = initialState, action) => {
  return state;
};

export default notesReducer;
