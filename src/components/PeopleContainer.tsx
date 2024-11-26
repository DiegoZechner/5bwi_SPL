import Card from './Card';
type Props = {}

export default function PeopleContainer({}: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-10 ">
      <Card name="Diego Zechner" description="Test Feld ohne Text Test Feld ohne Text" imageUrl="https://picsum.photos/id/1/200/300" />
      <Card name="Maxim Zechner" description="Test Feld ohne Text Test Feld ohne Text" imageUrl="https://picsum.photos/id/2/200/300" />
      <Card name="Tamir Zechner" description="Test Feld ohne Text Test Feld ohne Text" imageUrl="https://picsum.photos/id/3/200/300" />
      <Card name="Nigg Zechner" description="Test Feld ohne Text Test Feld ohne Text" imageUrl="https://picsum.photos/id/4/200/300" />
      <Card name="Ronny Zechner" description="Test Feld ohne Text Test Feld ohne Text" imageUrl="https://picsum.photos/id/4/200/300" />
      <Card name="Moo Zechner" description="Test Feld ohne Text Test Feld ohne Text" imageUrl="https://picsum.photos/id/4/200/300" />
    </div>
  )
}
