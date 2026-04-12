// use ffcd react snippet to create this component
function SnackList() {
  const snacks = [
    // use a return to stack braces vertically with prettier
    // order the array of objects in reverse order
    {
      name: 'Chocolate Chip Cookies',
      rank: 5,
    },
    {
      name: 'Chips',
      rank: 4,
    },
    {
      name: 'Blueberries',
      rank: 3,
    },
    {
      name: 'Bananas',
      rank: 2,
    },
    {
      name: 'Apple',
      rank: 1,
    },
  ];
  // sorting is a bit tricky
  // use the toSorted function and inside the parantheses
  // (a, b) represent your objects "snacks",
  // => arrow function is what tells you what the output will be
  // a.rank - b.rank outputs the snacks in ascending numerical order
  const sortedFavoriteSnacks = snacks.toSorted(
    (a, b) => a.rank - b.rank
  );

  return (
    <ul>
      {/* map is also tricky since it uses a combination of html and js
    the structure is similar as toSorted and the output is a list
    list takes in a key parameter which allows the user to define what it uses
    to order the snacks
    perhaps an ordered list could this as well but that is an html solution vs
    a javascript solution */}
      {sortedFavoriteSnacks.map((snack) => (
        <li key={snack.rank}>
          Rank {snack.rank}: {snack.name}
        </li>
      ))}
    </ul>
  );
}

export default SnackList;
