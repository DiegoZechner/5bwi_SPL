import Card from './Card';
import { useEffect, useState } from "react";

type Props = {}
type Person = {
  name: string;
  description: string;
  image: string;
}

export default function PeopleContainer({}: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-10 ">
      <Card name="Moo Zechner" description="Test Feld ohne Text Test Feld ohne Text" imageUrl="https://picsum.photos/id/4/200/300" />
    </div>
  )
}
