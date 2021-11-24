import { state } from "./state.js";

export function firstStep() {
    state.test = true;
    return state.test;
}
