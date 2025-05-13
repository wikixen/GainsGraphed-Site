import { createFileRoute } from "@tanstack/react-router";
import { DashboardTitle } from "../../../components/dashboard/dashboardTitle";
import { useState } from "react";
import { Card } from "../../../components/ui/card";

export const Route = createFileRoute("/_authenticated/_layout/history")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <DashboardTitle
        title="Workout History"
        subtitle="Review your past workouts and track your progress"
      />
      <h2 className="text-sm">Recent Workouts</h2>
    </>
  );
}

interface HistoryCardProps {
  workoutName: string,
  date: Date,
  duration: number,
  exercises: Exercise[]
}

interface Exercise {
  name: string,
  sets: ExerciseSet[],
}

interface ExerciseSet {
  reps: number,
  weight: number,
}

const HistoryCard = (props: HistoryCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <h1>{props.workoutName}</h1>
      <h2>{props.date.toLocaleDateString()}</h2>
      <div>
        <span>Duration</span>
        <span>{props.duration}</span>
      </div>
      <section>
        <h2>Exercises</h2>
        {
          props.exercises.map((exercise) => (
            <div>
              <span>Duration</span>
              <div>
                <span>{exercise.name}</span>
                <span>{exercise.sets.length} x </span>
              </div>
            </div>
          ))
        }
      </section>
    </Card>
  )
}