type Props = {
  name: string,
  description: string,
  imageUrl: string,
  age?: number;
}

export default function Card({name, description, imageUrl, age}: Props) {
  return (
    <div className="bg-white border rounded-lg ">
      <div className="h-50">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover border rounded-lg"/>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p>{description}</p>
        <p>{age}</p>
      </div>
    </div>
  )
}
