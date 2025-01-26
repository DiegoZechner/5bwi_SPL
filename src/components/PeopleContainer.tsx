import Card from './Card';
import { useEffect, useState } from "react";

type Person = {
  name: string;
  description: string;
  image: string;
};

export default function PeopleContainer() {
  const [people, setPeople] = useState<Person[]>([]);
 

  useEffect(() => {
    fetch("http://localhost:3306/items/people") 
    // http://10.115.1.48:8055/items/people
    // imageUrl={`http://10.115.1.48:8055/assets/${person.image}`}
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPeople(data.data); 
      })
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-10">
      {people.map((person, index) => (
        <Card
          key={index}
          name={person.name}
          description={person.description}
          imageUrl={`http://localhost:3306/assets/${person.image}`}
        />
      ))}
    </div>
  );
}
