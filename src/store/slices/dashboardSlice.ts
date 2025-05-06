// response range for simple and complex
// saved responses (editable)
// Target Audiences
// temperature

// !!! use createSelector from 'reselect' if we need values derived from values of state

// request and stor user dashboard info like settings and data
import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../index';

// 1. Define your state interface
export interface DashboardState {
  simpleResponseOn: boolean;
  complexResponseOn: boolean;
  simpleCharMax: number;
  complexCharMax: number;
  targetAudienceOptions: string[];
  defaultAudience: number;
}

// 2. Initial state
const initialState: DashboardState = {
  simpleResponseOn: true,
  complexResponseOn: true,
  simpleCharMax: 100,
  complexCharMax: 400,
  targetAudienceOptions: [
    'Ballet Lovers',
    'Dance Enthusiasts',
    'Dance Magazine Readers',
  ],
  defaultAudience: 0,
};

// 3. Create slice
export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    // ——— Granular actions ———
    toggleSimpleResponse(state) {
      state.simpleResponseOn = !state.simpleResponseOn;
    },
    toggleComplexResponse(state) {
      state.complexResponseOn = !state.complexResponseOn;
    },
    setSimpleCharMax(state, action: PayloadAction<number>) {
      state.simpleCharMax = action.payload;
    },
    setComplexCharMax(state, action: PayloadAction<number>) {
      state.complexCharMax = action.payload;
    },
    setTargetAudienceOptions(state, action: PayloadAction<string[]>) {
      state.targetAudienceOptions = action.payload;
      // optionally reset defaultAudience if out of range
      if (state.defaultAudience >= action.payload.length) {
        state.defaultAudience = 0;
      }
    },
    setDefaultAudience(state, action: PayloadAction<number>) {
      state.defaultAudience = action.payload;
    },

    // ——— Bulk update action ———
    updateDashboard(state, action: PayloadAction<Partial<DashboardState>>) {
      Object.assign(state, action.payload);
    },
  },
});

// 4. Export actions & reducer
export const {
  toggleSimpleResponse,
  toggleComplexResponse,
  setSimpleCharMax,
  setComplexCharMax,
  setTargetAudienceOptions,
  setDefaultAudience,
  updateDashboard,
} = dashboardSlice.actions;

//
// ——— Base selectors ———
//

/** Select the entire dashboard slice */
export const selectDashboard = (state: RootState): DashboardState =>
  state.dashboard;

/** Toggle flags */
export const selectSimpleResponseOn = (state: RootState): boolean =>
  state.dashboard.simpleResponseOn;

export const selectComplexResponseOn = (state: RootState): boolean =>
  state.dashboard.complexResponseOn;

/** Character limits */
export const selectSimpleCharMax = (state: RootState): number =>
  state.dashboard.simpleCharMax;

export const selectComplexCharMax = (state: RootState): number =>
  state.dashboard.complexCharMax;

/** Audience settings */
export const selectTargetAudienceOptions = (state: RootState): string[] =>
  state.dashboard.targetAudienceOptions;

export const selectDefaultAudienceIndex = (state: RootState): number =>
  state.dashboard.defaultAudience;

//
// ——— Derived selectors ———
//

/**
 * Get the name of the currently selected audience,
 * or `null` if the index is out of range.
 */
export const selectDefaultAudienceName = createSelector(
  selectTargetAudienceOptions,
  selectDefaultAudienceIndex,
  (options, index) => {
    return options[index] ?? null;
  }
);

/**
 * Example: derive whether we're in a “simple-only” mode
 */
export const selectIsSimpleOnly = createSelector(
  selectSimpleResponseOn,
  selectComplexResponseOn,
  (simpleOn, complexOn) => simpleOn && !complexOn
);

export default dashboardSlice.reducer;
