import { create } from "zustand";
import type {
  GoalTimeSchema,
  LearningEfficiencySchema,
} from "@/app/app/(view)/planner/create/page";

type PlanState = {
  goalTime: GoalTimeSchema | null;
  learningEfficiency: LearningEfficiencySchema | null;

  setGoalTime: (data: GoalTimeSchema) => void;
  setLearningEfficiency: (data: LearningEfficiencySchema) => void;

  reset: () => void;

  isReady: () => boolean;
  getPlan: () => (GoalTimeSchema & LearningEfficiencySchema) | null;
};

const usePlanStore = create<PlanState>((set, get) => ({
  goalTime: null,
  learningEfficiency: null,

  setGoalTime: (data) => set({ goalTime: data }),

  setLearningEfficiency: (data) =>
    set({ learningEfficiency: data }),

  reset: () =>
    set({
      goalTime: null,
      learningEfficiency: null,
    }),

  isReady: () => {
    const { goalTime, learningEfficiency } = get();
    return Boolean(goalTime && learningEfficiency);
  },

  getPlan: () => {
    const { goalTime, learningEfficiency } = get();
    if (!goalTime || !learningEfficiency) return null;

    return {
      ...goalTime,
      ...learningEfficiency,
    };
  },
}));

export default usePlanStore;
