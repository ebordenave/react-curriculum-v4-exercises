import TaskItem from './TaskItem';

function TaskList({ visibleTasks, handleToggle }) {
  return (
    <ul>
      {visibleTasks.map((task) => (
        <TaskItem
          task={task}
          key={task.id}
          handleToggle={handleToggle}
        />
      ))}
    </ul>
  );
}

export default TaskList;
