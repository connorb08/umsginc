const people = [
    {
      name: 'Connor Bray',
      email: 'connor.bray@maine.edu',
      position: 'President',
      imageUrl:
        'https://lh3.googleusercontent.com/a/AEdFTp4tUc9UezM9sn94SRwf1t_inefwZfKlt39F5gxQ1A=s96-c',
    },
    {
      name: 'Michael Delorge',
      email: 'michael.delorge@maine.edu',
      position: 'Vice President',
      imageUrl:
        'https://media.licdn.com/dms/image/C5603AQF3zBl5yXuJbQ/profile-displayphoto-shrink_800_800/0/1649991379824?e=1687392000&v=beta&t=JhBSr7sLVel9KpOqMJfFJ7HJ_tXX_bmGYS8JVxG9t3E',
    },
  ]
  
  export default function Example() {
    return (
      <ul role="list" className="divide-y divide-gray-100">
        {people.map((person) => (
          <li key={person.email} className="flex justify-between gap-x-6 py-5">
            <div className="flex gap-x-4">
              <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                <a href={`/employee/${person.email}`} className="mt-1 truncate text-xs leading-5 text-gray-500">View Details</a>
              </div>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{person.position}</p>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                  {person.email}
                </p>
              
            </div>
          </li>
        ))}
      </ul>
    )
  }
  