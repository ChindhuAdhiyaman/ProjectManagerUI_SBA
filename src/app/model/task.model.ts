export class Task {

  taskId: number;
  taskName: string;
  parentTaskName: string;
  priority: number;
  startDate: Date;
  endDate: Date;
  projectId: number;
  status: string;

  constructor(values: object = { }) {

  }
}
