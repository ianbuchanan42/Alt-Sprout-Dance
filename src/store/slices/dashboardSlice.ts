// response range for simple and complex
// saved responses (editable)
// Target Audiences
// temperature

// useEffect(() => {
//   dispatch(loadDashboardFromServer());
// }, [dispatch]);

// !!! use createSelector from 'reselect' if we need values derived from values of state

// Partial and Omit utility methods

// request and stor user dashboard info like settings and data
import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../index';

type DanceTypes = ['Ballet', ...string[]];

type TargetAudienceOptions = [
  'Ballet Lovers',
  'Dance Enthusiasts',
  ...string[]
];

// 1. Define your state interface
export interface DashboardState {
  simpleResponseOn: boolean;
  complexResponseOn: boolean;
  simpleCharMax: number;
  complexCharMax: number;
  targetDanceTypes: DanceTypes;
  defaultDanceType: string;
  targetAudienceOptions: TargetAudienceOptions;
  defaultAudience: string;
}

// 2. Initial state
const initialState: DashboardState = {
  simpleResponseOn: true,
  complexResponseOn: true,
  simpleCharMax: 100,
  complexCharMax: 400,
  targetDanceTypes: ['Ballet', 'Contemporary', 'Modern'],
  defaultDanceType: 'Ballet',
  targetAudienceOptions: [
    'Ballet Lovers',
    'Dance Enthusiasts',
    'Dance Magazine Readers',
  ],
  defaultAudience: 'Ballet Lovers',
};

// 3. Create slice
export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    // ——— Response Options ———
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

    // --- Dance Types ---

    setNewTargetDanceType(state, action: PayloadAction<string>) {
      state.targetDanceTypes = [...state.targetDanceTypes, action.payload];
    },

    // ! unused !
    setTargetDanceTypes(state, action: PayloadAction<TargetAudienceOptions>) {
      state.targetAudienceOptions = action.payload;
    },

    setDefaultDanceType(state, action: PayloadAction<string>) {
      state.defaultDanceType = action.payload;
    },

    // --- Audience Options ---

    setNewTargetAudienceOption(state, action: PayloadAction<string>) {
      state.targetAudienceOptions = [
        ...state.targetAudienceOptions,
        action.payload,
      ];
    },

    // ! unused !
    setTargetAudienceOptions(
      state,
      action: PayloadAction<TargetAudienceOptions>
    ) {
      state.targetAudienceOptions = action.payload;
      // optionally reset defaultAudience if out of range
    },
    setDefaultAudience(state, action: PayloadAction<string>) {
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
  setNewTargetDanceType,
  setTargetDanceTypes,
  setDefaultDanceType,
  setNewTargetAudienceOption,
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

/** Dance Styles */

export const selectTargetDanceTypes = (state: RootState): string[] =>
  state.dashboard.targetDanceTypes;

export const selectDefaultDanceType = (state: RootState): string =>
  state.dashboard.defaultDanceType;

/** Audience settings */
export const selectTargetAudienceOptions = (state: RootState): string[] =>
  state.dashboard.targetAudienceOptions;

export const selectDefaultAudience = (state: RootState): string =>
  state.dashboard.defaultAudience;

//
// ——— Derived selectors ———
//

/**
 * Example: derive whether we're in a “simple-only” mode
 */
export const selectIsSimpleOnly = createSelector(
  selectSimpleResponseOn,
  selectComplexResponseOn,
  (simpleOn, complexOn) => simpleOn && !complexOn
);

export default dashboardSlice.reducer;
