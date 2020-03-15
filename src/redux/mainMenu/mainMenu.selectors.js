import { createSelector } from 'reselect'

const selectMainMenuIN = state => state.mainMenu;

export const selectMainMenu = createSelector(selectMainMenuIN, mainMenu => mainMenu.sections)


