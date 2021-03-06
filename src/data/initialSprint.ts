export const initialSprint = {
  title: 'Sprint title',
  startDate: new Date('2022-02-02'),
  endDate: new Date('2022-04-08'),
  members: [
    'Name Surname',
    'Tom Talkins',
    'Harry Gudini'
  ],
  tasks: [
    {
      id: 1,
      status: 'To Do',
      title: 'TASK',
      priority: 'High',
      description: 'Apriel inventory of supplies',
      member: 'Name Surname',
      deadline: new Date('2022-03-01'),
      image: 'https://www.kindpng.com/picc/m/130-1300217_user-icon-member-icon-png-transparent-png.png',
      comments: [
        {
          id: 1,
          text: 'Need more time for this task',
          author: 'Tom tommas',
          date: new Date('2022-02-20')
        }
      ]
    },
    {
      id: 2,
      status: 'In Progress',
      title: 'TASK',
      priority: 'Medium',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac aliquam elit. Nulla et sapien felis. Maecenas at magna aliquam, aliquet tellus in, volutpat ipsum.',
      member: 'Name Surname',
      deadline: new Date('2022-03-01'),
      image: 'https://www.kindpng.com/picc/m/130-1300217_user-icon-member-icon-png-transparent-png.png',
      comments: []
    },
    {
      id: 5,
      status: 'In Progress',
      title: 'TASK',
      priority: 'Medium',
      description: 'May inventory of supplies',
      member: 'Name Surname',
      deadline: new Date('2022-03-01'),
      image: 'https://www.kindpng.com/picc/m/130-1300217_user-icon-member-icon-png-transparent-png.png',
      comments: []
    },
    {
      id: 3,
      status: 'In Review',
      title: 'TASK',
      priority: 'High',
      description: 'Modify report templates',
      member: 'Name Surname',
      deadline: new Date('2022-03-01'),
      image: 'https://www.kindpng.com/picc/m/130-1300217_user-icon-member-icon-png-transparent-png.png',
      comments: []
    },
    {
      id: 4,
      status: 'Done',
      title: 'TASK',
      priority: 'High',
      description: 'Metrics report for August',
      member: 'Name Surname',
      deadline: new Date('2022-03-01'),
      image: 'https://www.kindpng.com/picc/m/130-1300217_user-icon-member-icon-png-transparent-png.png',
      comments: []
    }
  ]
};
