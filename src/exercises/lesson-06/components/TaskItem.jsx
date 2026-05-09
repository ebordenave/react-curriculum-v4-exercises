const TaskItem = ({ task, handleToggle }) => {
  return (
    <li
      style={{
        textDecoration: task.completed
          ? 'line-through'
          : 'none',
      }}
      onClick={() => handleToggle(task.id)}
    >
      {task.title || 'Untitled Text'}{' '}
      {task.completed ? '✅' : '⏳'}
    </li>
  );
};

export default TaskItem;
